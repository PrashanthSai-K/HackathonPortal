import { Sidebar } from 'primereact/sidebar'
import React from 'react'

export default function AddPopup({visible, setVisible}) {
    return (
        <>
            <Sidebar position='right' visible={visible} className='md:w-1/2 w-3/4' onHide={() => setVisible(false)}>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
        </>
    )
}
