import { Dialog } from 'primereact/dialog';
import React from 'react'
import { toast } from 'react-toastify';

export default function PasswordPopup({ visible, setVisible, password }) {

    
    const copyClipboard = ()=> {
        navigator.clipboard.writeText(password);
        toast.info("Copied successfully ")
    }

    return (
        <>
            <Dialog header="Password" headerClassName=' p-2 w-full' visible={visible} position={"top"} className='mt-10 w-1/3 h-1/4' style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }} draggable={false} resizable={false}>
                <center>
                    <p className='text-red-500 text-sm font-medium p-2 w-full'>Note : Password is shown only once please note it down</p>
                    <div className='flex w-full items-center justify-center'>
                        <p className=' w-4/5 h-7 bg-gray-100 border-s border-b border-t rounded-s-lg ' >{password} </p>
                        <i onClick={()=>copyClipboard()} className='flex justify-end pi pi-copy h-7 p-1 bg-gray-100 border-t border-r border-b rounded-e-lg cursor-pointer'></i>
                        {}
                    </div>
                </center>
            </Dialog>
        </>
    )
}
