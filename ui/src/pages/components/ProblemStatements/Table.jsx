
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import PopupModal from './PopupModal';
import SHA256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import { useNavigate } from 'react-router';

export default function Table({ data, user, getUser }) {

    const [ps, setPs] = useState([]);

    const [globalFilter, setGlobalFilter] = useState("")

    const navigate = useNavigate();

    const appendSlug = (data) => {
        const result = data.map((d) => {
            // Generate a consistent hash using the problem ID (or any other field you want)
            const hash = SHA256(d.ps_id.toString());  // Hash the problem ID or any other field
            let slug = Base64.stringify(hash).substring(0, 10);  // Convert to Base64 and take first 10 characters

            // Replace URL-unsafe characters with URL-safe alternatives
            slug = slug.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

            return {
                ...d, route: slug
            };
        });
        setPs(result);
    }


    useEffect(() => {
        appendSlug(data)
    }, [data]);

    const customSortIcon = (options) => {
        const iconStyle = { color: "white" };
        const updownstyle = { color: "white", fontSize: "0.9rem", } // Style for the icons

        let icon = options.sorted ? (
            options.sortOrder < 0 ? (
                <i className="pi pi-arrow-down" style={updownstyle}></i> // Down arrow
            ) : (
                <i className="pi pi-arrow-up" style={updownstyle}></i> // Up arrow
            )
        ) : (
            <i className="pi pi-arrow-right-arrow-left rotate-90 flex items-center justify-center" style={iconStyle}></i> // Default sort icon
        );

        return icon;
    };

    const [visible, setVisible] = useState(false);
    const [modalData, setModalData] = useState({});

        const formatKey = (key) => {
            // Replace underscores with spaces and capitalize each word
            return key
                .replace(/_/g, ' ') // Replace underscores with spaces
                .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
        };
    


    const setModal = (rowData) => {
        const dataEntries = Object.entries(rowData)
        .slice(0,6)
        .map(([key, value]) => ({
            key: formatKey(key),
            value,
        }));
        setModalData(dataEntries);
        setVisible(true);
    }

    const redirectApprove = (rowData) => {
        console.log(rowData);

        if (rowData && rowData.count > 0) {
            navigate(`/problems/${rowData.route}`)
        } else {
            window.alert("Opps !! No registrations found.");
        }
    }

    const tableLoader = () => (
        <div className='flex items-center justify-center min-h-96 h-full w-full '>
            <i className="pi pi-spin pi-spinner" style={{ color: "gray", fontSize: '2rem' }}></i>

        </div>
    )

    return (
        <>
            <div className=''>
                <div className='flex items-center justify-between flex-col md:flex-row'>
                    <h3 className='pb-2 g-black font-semibold text-2xl text-violet-950 text-center'>PROBLEM STATEMENTS</h3>
                    <div className=' border md:mt-24 h-8 w-80 rounded-lg bg-gray-50 md:flex items-center overflow-hidden'>
                        <input type="text" placeholder='Search' onChange={(e) => setGlobalFilter(e.target.value)} className='border-t pl-1 border-b border-e-0 h-8 w-72 focus:outline-none outline-none focus:border-0 bg-gray-50 ' />
                        <i className='pi pi-search text-gray-300'></i>
                    </div>
                </div>

                <div className="card w-full pt-3 flex items-center justify-center px-4 md:px-8">
                    <DataTable loader sortIcon={customSortIcon} value={ps} emptyMessage={tableLoader} paginator={ps.length > 5 ? true : false} rows={5} rowsPerPageOptions={[5, 10, 25, 50]} globalFilter={globalFilter} paginatorClassName='text-black' stripedRows className='border rounded-lg overflow-hidden w-11/12 min-h-96 max-w-screen-lg'>
                        <Column field="ps_id" header="Code" align={"left"} style={{ height: "3rem" }} bodyStyle={{ width: "6rem" }} headerClassName='border-b p-1 bg-violet-950 text-sm' className='border-b p-1 text-center text-sm'></Column>
                        <Column field="category" sortable header="Category" align={"left"} bodyStyle={{ height: "3rem", width: "8rem" }} headerClassName='border-b text-end font-medium bg-violet-950 text-sm' className='border text-sm text-center '></Column>
                        <Column field="title" header="Title" sortable align={"left"} headerClassName='text-white border-b text-end font-medium bg-violet-950 text-sm' className='border p-1 text-sm '></Column>
                        <Column field="organization" header="Organization" align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-950 text-sm' className='border p-1 text-justify text-sm'></Column>
                        <Column field="" header="Action" align={"center"} bodyStyle={{ width: "7rem" }} headerClassName=' border-b text-end font-medium bg-violet-950 text-sm' className='border p-1 text-center text-sm'
                            body={(rowData) => (
                                <div className='flex items-center justify-center gap-1'>
                                    <button
                                        onClick={() => setModal(rowData)}
                                        className="px-2 py-1 bg-violet-500 text-white rounded"
                                    >
                                        View
                                    </button>
                                    {
                                        user && user.role == "admin" &&
                                        <button
                                            onClick={() => redirectApprove(rowData)}
                                            className="px-2 py-1 bg-violet-950 text-white rounded"
                                        >

                                            Approve
                                        </button>
                                    }
                                </div>
                            )}
                        ></Column>
                    </DataTable>
                    <PopupModal visible={visible} setVisible={setVisible} modalData={modalData} />

                </div>
            </div>
        </>
    );
}
