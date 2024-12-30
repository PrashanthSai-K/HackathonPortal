import React from 'react'
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function PopupModal({ visible, setVisible, modalData }) {

    const formatKey = (key) => {
        // Replace underscores with spaces and capitalize each word
        return key
            .replace(/_/g, ' ') // Replace underscores with spaces
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
    };

    const dataEntries = Object.entries(modalData)
        .slice()
        .map(([key, value]) => ({
            key: formatKey(key),
            value: key === 'specific_key' // Replace 'specific_key' with the actual key you want to check
                ? <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>
                : value,
        }));


    return (
        <>

            <Dialog header="Problem Statement Details" headerClassName="p-2 w-full" visible={visible} onHide={() => { if (!visible) return; setVisible(false); }}
                className='p-3 md:p-0  w-7/12 flex items-center justify-center' breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <center className='pb-4'>
                    <DataTable value={dataEntries} stripedRows className='border rounded-lg overflow-hidden w-11/12 max-h-full'>
                        <Column field="key" headerStyle={{ display: "none" }} align={"left"} style={{ height: "3rem" }} bodyStyle={{ width: "20%" }} headerClassName='border-b p-1 bg-[#7f58f3] text-sm' className='border-b p-1 text-start pl-3 text-sm'></Column>
                        <Column
                            field="value"
                            align={"left"}
                            body={(rowData) => (
                                rowData.key == "Doc Link" ? (
                                    <a href={rowData.value} className='text-blue-700 underline' target="_blank" rel="noopener noreferrer">
                                        {rowData.value}
                                    </a>
                                ) : (
                                    rowData.value
                                )
                            )}
                            bodyStyle={{ height: "3rem", width: "80%" }}
                            headerClassName='border-b text-end font-medium bg-[#7f58f3] text-sm'
                            className='border text-justify pl-3 text-sm '
                        >

                        </Column>
                    </DataTable>
                </center>
            </Dialog>
        </>
    )
}
