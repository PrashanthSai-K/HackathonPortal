import React from 'react'
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function PopupModal({ visible, setVisible, modalData }) {

    return (
        <>

            <Dialog header="Problem Statement Details" headerClassName="p-2 w-full" visible={visible} onHide={() => { if (!visible) return; setVisible(false); }}
                className='p-3 md:p-0  w-7/12 flex items-center justify-center' breakpoints={{ '960px': '75vw', '641px': '90vw' }}>
                <center className='pb-4'>
                    <DataTable value={modalData} stripedRows className='border rounded-lg overflow-hidden w-11/12 max-h-full'>
                        <Column field="key" headerStyle={{ display: "none" }} align={"left"} style={{ height: "3rem" }} bodyStyle={{ width: "20%" }} headerClassName='border-b p-1 bg-[#7f58f3] text-sm' className='border-b p-1 text-start pl-3 text-sm'></Column>
                        <Column field="value" align={"left"} bodyStyle={{ height: "3rem", width: "80%" }} headerClassName='border-b text-end font-medium bg-[#7f58f3] text-sm' className='border text-justify pl-3 text-sm '></Column>
                    </DataTable>
                </center>
            </Dialog>
        </>
    )
}
