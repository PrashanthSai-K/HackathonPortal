import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import React, { useRef, useState } from 'react'
// import Navbar from '../components/LandingPage/Navbar';

export default function Registration() {

    const [formData, setFormData] = useState({});


    const formRef = useRef();

    return (
        <>
            <div className='h-screen'>
                <div className='text-start pl-5 text-2xl flex gap-3 items-center pt-5 fixed h-20 text-blue-800'>
                    <span className='text-xl pi pi-user-plus text-blue-800 font-medium'></span>
                    Institute Registration
                </div>
                <form ref={formRef} className='flex flex-col gap-5 md:pl-5 pt-20 h-full transition-all duration-500 '>
                    <div className='h-5/6 w-11/12 border'>
                        <div className='text-xsm font-medium flex gap-5 items-center w-full'>
                            <span className='w-2/12'>Project Name:</span>
                            <InputText className=' border p-2 w-10/12 pl-5 ' name='project_name' value={formData.project_name} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                        </div>
                        <div className='text-xsm font-medium flex gap-5 items-center w-full'>
                            <span className='w-2/12'>Project Lead: </span>
                            {/* <MultiSelect value={formData.project_lead} options={users} onChange={(e) => { if (e.target.value.length <= 1) setFormData({ ...formData, [e.target.name]: e.target.value }) }} optionLabel="email"
                        filter name='project_lead' placeholder="Select Users" itemTemplate={countryTemplate} className="text-xsm  border w-10/12 rounded min-h-10 border-gray-100 flex items-center gap-2 pl-5 overflow-y-scroll scrollbar-hidden "
                        display="chip" itemClassName='bg-gray-100 border-b text-xsm'
                    /> */}
                        </div>

                        <div className='text-xsm font-medium flex gap-5 items-center  w-full'>
                            <span className='w-2/12'>Team Project : </span>
                            {/* <input type="checkbox" name='multiple_users' className=" appearance-none border h-5 w-5 rounded text-side-blue checked:bg-side-blue checked:border-side-blue checked:text-white focus:ring-0 checked:after:content-['✓'] checked:after:text-white checked:after:flex checked:after:justify-center checked:after:items-center"
                        value={formData.multiple_users} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.checked })}
                    /> */}
                            <span className='text-gray-500 text-xsm'> (Note: Select if you project consists of more than one member)</span>
                        </div>
                        {
                            formData.multiple_users &&
                            <div className='text-xsm font-medium flex gap-5 items-center w-full'>
                                <span className='w-2/12'>Team Members: </span>
                                <MultiSelect value={formData.assigned_users} options={teamMembers} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} optionLabel="email"
                                    filter name='assigned_users' placeholder="Select Users" itemTemplate={countryTemplate} className="text-xsm  border w-10/12 rounded min-h-10 border-gray-100 flex items-center gap-2 pl-5 overflow-y-scroll scrollbar-hidden "
                                    display="chip" itemClassName='bg-gray-100 border-b text-xsm'
                                />
                            </div>
                        }

                        <div className='text-xsm font-medium flex gap-5 items-center w-full'>
                            <span className='w-2/12'>Status:</span>
                            <div className=' border w-10/12 rounded  border-gray-100 flex items-center gap-2 p-2 pl-5 '>
                                <span className="h-1.5 w-1.5 bg-orange-500 rounded-full"></span>
                                <span>{"Pending"}</span>
                            </div>
                        </div>

                        <div className='text-xsm font-medium flex gap-5 items-start justify-start w-full'>
                            <span className='w-2/12 '>Description </span>
                            <InputTextarea name='project_description' value={formData.project_description} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} className=' border p-2 w-10/12 pl-5' autoResize rows={5} cols={30} />
                        </div>
                        {/* <ConfirmPopupComponent popUpMessage={"Do you want to create project ?"} buttonName={"Create"}  /> */}
                    </div>
                </form>
            </div>
        </>
    )
}
