
import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function Navbar() {

    const itemtemplate = (item) => (
        <a className='flex gap-2 items-center px-3 py-1'>
            <span>{item.label}</span>
            <span className={item.icon}></span>
        </a>
    )

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            template: itemtemplate
        },
        {
            label: 'About',
            icon: 'pi pi-star',
            template: itemtemplate

        },
        // {
        //     label: 'Projects',
        //     icon: 'pi pi-search',
        //     items: [
        //         {
        //             label: 'Components',
        //             icon: 'pi pi-bolt'
        //         },
        //         {
        //             label: 'Blocks',
        //             icon: 'pi pi-server'
        //         },
        //         {
        //             label: 'UI Kit',
        //             icon: 'pi pi-pencil'
        //         },
        //         {
        //             label: 'Templates',
        //             icon: 'pi pi-palette',
        //             items: [
        //                 {
        //                     label: 'Apollo',
        //                     icon: 'pi pi-palette'
        //                 },
        //                 {
        //                     label: 'Ultima',
        //                     icon: 'pi pi-palette'
        //                 }
        //             ]
        //         }
        //     ]
        // },
        {
            label: 'Guidelines',
            icon: 'pi pi-envelope',
            template: itemtemplate
        }
    ];

    return (
        <nav className="flex w-full h-20 fixed z-10 bg-white">
            <div className='w-1/3'></div>
            <Menubar className='flex bg-white w-2/3 gap-5 justify-end cursor-pointer' model={items}  />
        </nav>
    )
}
        