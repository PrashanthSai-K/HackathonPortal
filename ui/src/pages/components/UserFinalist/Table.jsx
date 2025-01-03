import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useEffect, useState } from 'react'
import { userGetRequest } from '../exports';
import { useActionState } from '../../../CustomHooks';

export default function Table() {
    const [finalist, setFinalist] = useState([]);
    const [globalFilter, setGlobalFilter] = useState();

    const customSortIcon = (options) => {
        const iconStyle = { color: "white" };
        const updownstyle = { color: "white", fontSize: "0.9rem" }; // Style for the icons

        let icon = options.sorted ? (
            options.sortOrder < 0 ? (
                <i className="pi pi-arrow-down" style={updownstyle}></i> // Down arrow
            ) : (
                <i className="pi pi-arrow-up" style={updownstyle}></i> // Up arrow
            )
        ) : (
            <i
                className="pi pi-arrow-right-arrow-left rotate-90 flex items-center justify-center"
                style={iconStyle}
            ></i>
        );

        return icon;
    };


    const tableLoader = () => (
        <div className='flex items-center justify-center min-h-96 h-full w-full '>
            <i className="pi pi-spin pi-spinner" style={{ color: "gray", fontSize: '2rem' }}></i>
        </div>
    )

    const statusTemplate = (rowData) => (

        rowData.status === "SUBMITTED" ?
            (
                <div className='bg-orange-500 p-1 h-8 w-24 rounded-lg flex items-center justify-center' >
                    <p className='text-white text-sm'>{rowData.status}</p>
                </div>
            ) : (
                <div className='bg-green-500 p-1 h-8 w-24 rounded-lg flex items-center justify-center' >
                    <p className='text-white text-sm'>{rowData.status}</p>
                </div>
            )
    )

    const fetchFinalist = async () => {
        try {
            const response = await userGetRequest("/finalist/getFinalist");
            setFinalist(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }


    const [finalistCall, isLoading] = useActionState(fetchFinalist, true);


    useEffect(() => {
        finalistCall();
    }, [])

    return (
        <>
                <div className="card w-full pt-3 flex items-center relative -z-50 justify-center px-4 md:px-8  ">
                    <DataTable sortIcon={customSortIcon} value={finalist} emptyMessage={tableLoader} paginator={finalist.length > 5} rows={5} rowsPerPageOptions={[5, 10, 25, 50]} globalFilter={globalFilter} paginatorClassName='text-black' stripedRows className='border rounded-lg overflow-hidden w-11/12 min-h-96 max-w-screen-lg'>
                        <Column field="ps_id" header="Code" align={"left"} style={{ height: "3rem" }} bodyStyle={{ width: "6rem" }} headerClassName='border-b p-1 bg-violet-900 text-sm ' className='border-b-2 border-r-2 p-1 text-center text-sm'></Column>
                        <Column field="title" sortable header="Title" align={"left"} bodyStyle={{ height: "3rem", width: "18rem" }} headerClassName='border-b text-end font-medium bg-violet-900 text-sm' className='border-b-2 p-1 border-r-2 text-sm text-justify '></Column>
                        <Column field="team_name" sortable header="Team Name" align={"left"} bodyStyle={{ height: "3rem", width: "8rem" }} headerClassName='border-b text-end font-medium bg-violet-900 text-sm' className='p-1 border-b-2 border-r-2 text-sm text-center '></Column>
                        <Column field="leader_name" header="Leader Name" sortable align={"center"} bodyStyle={{ height: "3rem", width: "10rem" }} headerClassName='text-white border-b text-end font-medium bg-violet-900 text-sm' className='border-b-2 border-r-2 p-1 text-sm '></Column>
                        <Column field="number_of_participants" sortable header="Participants" align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-900 text-sm' className='border-b-2 border-r-2 p-1 text-sm'></Column>
                        <Column field="status" header="Status" body={statusTemplate} align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-900 text-sm' className='border-b-2 justify-center items-center flex border-r-2 p-1 text-sm'></Column>
                    </DataTable>
                </div>
        </>
    )
}