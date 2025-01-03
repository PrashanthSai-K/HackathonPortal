
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import PopupModal from './PopupModal';
import SHA256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import { useNavigate } from 'react-router';
// import UploadPopup from './UploadPopup';
import { useActionState } from '../../../CustomHooks';
import { adminPostRequest } from '../exports';
import { toast } from 'react-toastify';
import EditInstitution from './EditInstitution';
import PasswordPopup from './PasswordPopup';
// import { ProductService } from './service/ProductService';

export default function Table({ data, user, setAddVisible, fetchInstitutionCall, fetchPs }) {

    const [institute, setInstitute] = useState([]);

    const [globalFilter, setGlobalFilter] = useState("")

    const navigate = useNavigate();

    // const appendSlug = (data) => {
    //     const result = data.map((d) => {
    //         // Generate a consistent hash using the problem ID (or any other field you want)
    //         const hash = SHA256(d.ps_id.toString());  // Hash the problem ID or any other field
    //         let slug = Base64.stringify(hash).substring(0, 10);  // Convert to Base64 and take first 10 characters

    //         // Replace URL-unsafe characters with URL-safe alternatives
    //         slug = slug.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

    //         return {
    //             ...d, route: slug
    //         };
    //     });
    //     setPs(result);
    // }


    useEffect(() => {
        setInstitute(data)
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

    // const [visible, setVisible] = useState(false);

    const [modalData, setModalData] = useState({});


    const setModal = (rowData) => {
        setModalData(rowData);
        setEditVisible(true);
    }


    const tableLoader = () => (
        <div className='flex items-center justify-center min-h-96 h-full w-full '>
            <p>No Data Available</p>
        </div>
    )

    const [selectedRows, setSelectedRows] = useState([]); // To store selected rows

    const handleSelectionChange = (e) => {
        setSelectedRows(e.value);
    }

    const deleteProblems = async () => {
        try {

            const id = selectedRows.map((row) => row && row.id)
            if (id.length <= 0) {
                alert("None selected !! Select rows to delete")
                return;
            }
            if (!(window.confirm("Do you want to delete the selected instituions ?"))) {
                return;
            }
            const response = await adminPostRequest("/institute/delete", id);
            toast.success("Deleted successfully !!");
            fetchInstitutionCall();
        } catch (error) {
            console.log(error);
            toast.error("Error deleting ");
        }
    }

    const [deleteFunctionCall, deleteLoading] = useActionState(deleteProblems, true);

    const [editVisible, setEditVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");



    return (
        <>
            {/* <div className=''> */}
            <div className='flex w-11/12 max-w-screen-xl items-center justify-between'>
                <h3 className='pt-1 font-semibold text-2xl text-violet-950 text-center'>INSTITUTION</h3>
                <div className='flex items-center justify-center gap-2'>
                    <div className='hidden border mt-28 h-8 w-80 rounded-lg bg-gray-50 md:flex items-center overflow-hidden'>
                        <input type="text" placeholder='Search' onChange={(e) => setGlobalFilter(e.target.value)} className='border-t pl-1 border-b border-e-0 h-8 w-72 focus:outline-none focus:border-0 bg-gray-50 ' />
                        <i className='pi pi-search text-gray-300'></i>
                    </div>
                    <div className='mt-28 flex items-center justify-center gap-1 cursor-pointer border p-1.5 rounded-lg bg-gray-50 text-sm'
                        onClick={() => setAddVisible(true)}
                    >
                        <span className='text-black' style={{ color: "rgb(139 92 246 / var(--tw-text-opacity, 1))" }}>ADD</span>
                        <i className='pi pi-plus-circle text-xl text-violet-500'></i>
                    </div>
                    {deleteLoading ?
                        <div className='mt-28 flex items-center justify-center gap-1 cursor-pointer border p-1.5 rounded-lg bg-gray-50 text-sm'
                        >
                            <i className='pi pi-spin pi-spinner text-xl text-red-400 '></i>
                        </div>
                        :
                        <div className='mt-28 flex items-center justify-center gap-1 cursor-pointer border p-1.5 rounded-lg bg-gray-50 text-sm'
                            onClick={() => deleteFunctionCall()}
                        >
                            <i className='pi pi-trash text-xl text-red-400 '></i>
                        </div>
                    }
                </div>
            </div>

            <div className="card w-full pt-3 flex items-center justify-center px-4 md:px-8  ">
                <DataTable loader selectionMode={"multiple"} selection={selectedRows} onSelectionChange={handleSelectionChange} sortIcon={customSortIcon} value={institute} emptyMessage={tableLoader} paginator={institute.length > 5 ? true : false} rows={5} rowsPerPageOptions={[5, 10, 25, 50]} globalFilter={globalFilter} paginatorClassName='text-black' stripedRows className='border rounded-lg overflow-hidden w-11/12 min-h-96 max-w-screen-xl'>
                    <Column selectionMode="multiple" align={"center"} style={{ height: "3rem" }} bodyStyle={{ width: "3rem" }} headerClassName=' p-1 bg-violet-950 text-sm' className='border-r border-b p-1 text-center text-sm'></Column>
                    <Column field="institution_code" sortable header="Code" align={"left"} style={{ height: "3rem" }} bodyStyle={{ width: "6rem" }} headerClassName='border-b p-1 bg-violet-950 text-sm' className='border-b p-1 text-center text-sm'></Column>
                    <Column field="institution_name" sortable header="Name" align={"left"} bodyStyle={{ height: "3rem", width: "8rem" }} headerClassName='border-b text-end font-medium bg-violet-950 text-sm' className='border text-sm text-center '></Column>
                    <Column field="institution_type" header="Type" sortable align={"left"} headerClassName='text-white border-b text-end font-medium bg-violet-950 text-sm' className='border p-1 text-sm '></Column>
                    <Column field="address" header="Address" align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-950 text-sm' className='border p-1 text-justify text-sm'></Column>
                    <Column field="city" header="City" align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-950 text-sm' className='border p-1 text-center text-sm'></Column>
                    <Column field="state" header="State" align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-950 text-sm' className='border p-1 text-center text-sm'></Column>
                    <Column field="pincode" header="Pincode" align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-950 text-sm' className='border p-1 text-center text-sm'></Column>
                    <Column field="poc_name" header="POC Name" align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-950 text-sm' className='border p-1 text-center text-sm'></Column>
                    <Column field="poc_email" header="POC Email" align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-950 text-sm' className='border p-1 text-center text-sm'></Column>
                    <Column field="poc_number" header="POC Number" align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-950 text-sm' className='border p-1 text-center text-sm'></Column>
                    <Column field="" header="Action" align={"center"} bodyStyle={{ width: "7rem" }} headerClassName=' border-b text-end font-medium bg-violet-950 text-sm' className='border-l border-b p-1 text-center text-sm'
                        body={(rowData) => (
                            <div className='flex items-center justify-center gap-1'>
                                <button
                                    onClick={() => setModal(rowData)}
                                    className="px-2 py-1 bg-violet-500 text-white rounded"
                                >
                                    Edit
                                </button>
                            </div>
                        )}
                    ></Column>
                </DataTable>
                <EditInstitution visible={editVisible} setVisible={setEditVisible} instituteDetail={modalData} fetchInstitutionCall={fetchInstitutionCall} setPasswordVisible={setPasswordVisible} setPassword={setPassword} />
                <PasswordPopup visible={passwordVisible} setVisible={setPasswordVisible} password={password} />
            </div>
            {/* </div> */}
        </>
    );
}
