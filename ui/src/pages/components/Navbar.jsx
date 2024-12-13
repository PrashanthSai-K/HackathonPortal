
import React, { lazy } from 'react';
import { Menubar } from 'primereact/menubar';
import Logo from "../../assets/logo.png"


export default function Navbar() {

    const itemtemplate = (item) => (
        <a className='flex gap-2 items-center px-3 py-1 rounded-lg cursor-pointer'>
            <span>{item.label}</span>
        </a>
    )

    const dropDownItemTemplate = (item) => (
        <a className='flex gap-2 items-center px-3 py-1 rounded-lg cursor-pointer '>
            <span>{item.label}</span>
            <span className='pi pi-angle-down transition-transform' onClick={(e)=>{ 
                e.target.classList.toggle("rotate-180")
            }}> </span>
        </a>
    )

    const buttonTemplate = (item) => (
        <button className='py-1 px-2 bg-violet-950 text-white rounded-lg'>
            {item.label}
        </button>
    )

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            template: itemtemplate
        },
        {
            label: 'Problem Statement',
            icon: 'pi pi-database',
            template: itemtemplate
        },
        {
            label: 'Info',
            icon: 'pi pi-info-circle',
            items: [
                {
                    label: 'About',
                    icon: 'pi pi-info-circle',
                    template: itemtemplate

                },
                {
                    label: 'Guidelines',
                    icon: 'pi pi-list-check',
                    template: itemtemplate
                },
                {
                    label: 'Contacu Us',
                    icon: 'pi pi-address-book',
                    template: itemtemplate
                },
            ],
            template: dropDownItemTemplate

        },
        {
            label: 'Login / Register',
            icon: 'pi pi-button',
            template: buttonTemplate
        }
    ];

    return (
        <nav className="flex w-full items-center h-20 fixed z-10 ">
            <div className='w-2/3 md:w-1/3 flex items-center gap-2'>
                    <img className='w-15 h-14' src={Logo} alt="Logo Image" />
                    <h3>TANSCHE</h3>
                    <h4></h4>
            </div>
            <Menubar className='flex bg-white h-full w-1/3 md:w-2/3 gap-5 justify-end' model={items} />
        </nav>
    )
}
