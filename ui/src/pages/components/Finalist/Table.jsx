import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useEffect, useState } from 'react'
import { adminGetRequest, adminPostRequest } from '../exports';
import { toast } from 'react-toastify';
import PopupModal from './PopupModal';
import { useActionState } from '../../../CustomHooks';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../components/components/ui/dropdown-menu"
import { Button } from "../../../components/components/ui/button"
import { MoreHorizontal, Edit, Trash, Eye } from "lucide-react";
// import { Button } from "../../../components/components/ui/button"
import { FileDown } from "lucide-react"
import { ExportToPdf } from '../../ReportGeneration/Pdf';
import { ExportToExcel } from '../../ReportGeneration/Excel';


export default function Table() {
    const [finalist, setFinalist] = useState([]);
    const [globalFilter, setGlobalFilter] = useState();
    const [modalData, setModalData] = useState();
    const [visible, setVisible] = useState(false);

    const formatKey = (key) => {
        // Replace underscores with spaces and capitalize each word
        return key
            .replace(/_/g, " ") // Replace underscores with spaces
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
    };

    const setModal = (rowData) => {
        const data = Object.entries(rowData)
            .slice(2)
            .map(([key, value]) => ({
                key: formatKey(key),
                value:
                    key === "specific_key" ? ( // Replace 'specific_key' with the actual key you want to check
                        <a href={value} target="_blank" rel="noopener noreferrer">
                            {value}
                        </a>
                    ) : (
                        value
                    )
            }));
        setModalData(data);
        setVisible(true);
    };

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
            ></i> // Default sort icon
        );

        return icon;
    };


    const tableLoader = () => (
        <div className='flex items-center justify-center min-h-96 h-full w-full '>
            <p>No Finalist Available</p>
        </div>
    )

    const statusTemplate = (rowData) => (
        <div className='bg-green-500 p-1 h-8 rounded-lg flex items-center justify-center' >
            <p className='text-white text-sm'>{rowData.stage}</p>
        </div>
    )

    const fetchFinalist = async () => {
        try {
            const response = await adminGetRequest("/finalist");
            setFinalist(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const [finalistCall, isLoading] = useActionState(fetchFinalist, true);


    useEffect(() => {
        finalistCall();
    }, [])

    const selectTeam = async (data) => {
        try {
            if (!window.confirm("Do you want to move participant to Winner ?")) {
                return
            }
            const response = await adminPostRequest("/winner/toWinner", { ps_id: data.ps_id, team_id: data.team_id });
            toast.success("Selected Sucessfully");
            fetchFinalist();
        } catch (error) {
            console.log(error);
            toast.error("Some Error");
        }
    };

    const unselectTeam = async (data) => {
        try {
            if (!window.confirm("Do you want to remove participant from Participation Round ?")) {
                return
            }
            const response = await adminPostRequest("/presentation/backtoPresentation", { ps_id: data.ps_id, team_id: data.team_id });
            toast.success("Unselected Sucessfully");
            fetchFinalist();
        } catch (error) {
            console.log(error);
            toast.error("Some Error");
        }
    };

    const exportCheckPdf = (data) => {
        if (finalist.length > 0) {
            ExportToPdf(data);
        } else {
            window.alert("Oops!! No data found to export.");
        }
    }

    const exportCheckExcel = (data) => {
        if (finalist.length > 0) {
            ExportToExcel(data);
        } else {
            window.alert("Oops!! No data found to export.");
        }
    }

    return (
        <>
            {isLoading ?
                <div className='flex items-center justify-center min-h-96 h-full w-full '>
                    <i className="pi pi-spin pi-spinner" style={{ color: "gray", fontSize: '2rem' }}></i>
                </div>
                :
                <>
                    <div className=' w-full flex items-center justify-between flex-col md:flex-row'>
                        <div className='text-center text-violet-900 text-xl font-semibold'>FINALIST</div>
                        <div className=' flex gap-2'>
                            <div className=' border h-8 w-80 rounded-lg bg-gray-50 md:flex items-center overflow-hidden'>
                                <input type="text" placeholder='Search' onChange={(e) => setGlobalFilter(e.target.value)} className='border-t pl-1 border-b border-e-0 h-8 w-72 focus:outline-none focus:border-0 bg-gray-50 ' />
                                <i className='pi pi-search text-gray-300'></i>
                            </div>
                            <div className='flex items-center justify-center gap-1 cursor-pointer border p-1.5 rounded-lg bg-gray-50 text-sm'
                                onClick={() => exportCheckPdf(finalist)}
                            >
                                <div className='text-black hidden md:block' style={{ color: "#ef4444" }}>PDF</div>
                                <i className='pi pi-file-pdf text-xl text-red-500 '></i>
                            </div>
                            <div className='flex items-center justify-center gap-1 cursor-pointer border p-1.5 rounded-lg bg-gray-50 text-sm'
                                onClick={() => exportCheckExcel(finalist)}
                            >
                                <div className='text-black hidden md:block' style={{ color: "#22c55e" }}>Excel</div>
                                <i className='pi pi-file-pdf text-xl text-green-500 '></i>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full pt-3 flex items-center justify-center px-4 md:px-8 ">
                        <DataTable sortIcon={customSortIcon} value={finalist} emptyMessage={tableLoader} paginator={finalist.length > 5} rows={5} rowsPerPageOptions={[5, 10, 25, 50]} globalFilter={globalFilter} paginatorClassName='text-black' stripedRows className='border rounded-lg overflow-hidden w-11/12 min-h-96 max-w-screen-lg'>
                            <Column field="ps_id" header="Code" align={"left"} style={{ height: "3rem" }} bodyStyle={{ width: "6rem" }} headerClassName='border-b p-1 bg-violet-900 text-sm relative z-10' className='border-b-2 border-r-2 p-1 text-center text-sm'></Column>
                            <Column field="title" sortable header="Title" align={"left"} bodyStyle={{ height: "3rem", width: "18rem" }} headerClassName='border-b text-end font-medium bg-violet-900 text-sm  relative z-10' className='border-b-2 p-1 border-r-2 text-sm text-justify '></Column>
                            <Column field="team_name" sortable header="Team Name" align={"left"} bodyStyle={{ height: "3rem", width: "8rem" }} headerClassName='border-b text-end font-medium bg-violet-900 text-sm  relative z-10' className='p-1 border-b-2 border-r-2 text-sm text-center '></Column>
                            <Column field="leader_name" header="Leader Name" sortable align={"center"} bodyStyle={{ height: "3rem", width: "10rem" }} headerClassName='text-white border-b text-end font-medium bg-violet-900 text-sm  relative z-10' className='border-b-2 border-r-2 p-1 text-sm '></Column>
                            <Column field="number_of_participants" sortable header="Participants" align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-900 text-sm  relative z-10' className='border-b-2 border-r-2 p-1 text-sm'></Column>
                            <Column field="status" header="Status" body={statusTemplate} align={"center"} bodyStyle={{ height: "5rem" }} headerClassName='border-b text-end font-medium bg-violet-900 text-sm  relative z-10' className='border-b-2 border-r-2 p-1 text-sm'></Column>

                            <Column field="" header="Action" align={"center"} bodyStyle={{ width: "7rem" }} headerClassName=' border-b text-end font-medium bg-violet-900 text-sm  relative z-10' className='border-b-2  p-1 text-center text-sm'
                                body={(rowData) => (
                                    <>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className='bg-white w-36 p-1'>
                                                <DropdownMenuItem onClick={() => setModal(rowData)}>
                                                    <Eye />
                                                    <span>View</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => selectTeam(rowData)}>
                                                    <Edit />
                                                    <span>Select</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => unselectTeam(rowData)}>
                                                    <Trash />
                                                    <span>Unselect</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </>
                                )}
                            ></Column>
                        </DataTable>
                        <PopupModal visible={visible} setVisible={setVisible} modalData={modalData} />
                    </div>
                </>
            }
        </>
    )
}
