
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import { ProductService } from './service/ProductService';

export default function Table({data}) {

    const [ps, setPs] = useState(data);

    useEffect(() => {
        setPs(data)
    }, [data]);

    console.log(ps);
    
    return (
        <div className="card w-full h- flex items-center justify-center  ">
            <DataTable value={ps} tableStyle={{ minWidth: '50rem' }} className='border rounded-lg overflow-hidden max-w-screen-lg '>
                <Column field="ps_id" header="Code" align={"left"} headerClassName='border-b p-1 bg-[#7f58f3] big' className='border-b p-1 text-justify'></Column>
                <Column field="category" header="Category" align={"left"} headerClassName='border text-end font-medium bg-[#7f58f3]' className='border-b p-1'></Column>
                <Column field="title" header="Title" align={"left"} headerClassName='border text-end font-medium bg-[#7f58f3]' className='border-b p-1'></Column>
                <Column field="description" header="Description" align={"left"} headerClassName='border text-end font-medium bg-[#7f58f3]' className='border-b p-1 text-justify'></Column>
                <Column field="organization" header="Organization" align={"left"} headerClassName='border text-end font-medium bg-[#7f58f3]' className='border-b p-1 text-justify '></Column>
                <Column field="" header="Action" align={"left"} headerClassName='border text-end font-medium bg-[#7f58f3]' className='border-b p-1 text-justify ' ></Column>

            </DataTable>
        </div>
    );
}
