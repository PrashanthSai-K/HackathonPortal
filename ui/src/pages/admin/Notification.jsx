import React from 'react'
import NotificationForm from '../components/Notification/NotificationForm'
import ViewNotification from '../components/Notification/ViewNotification'
import Navbar from '../components/LandingPage/Navbar'

export default function Notification() {
    return (

        <>
            <Navbar />
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6">Manage Notifications</h1>
                <div className="flex flex-col md:flex-row gap-3 ">
                    <div className='w-11/12 md:w-3/12 px-4 md:px-0'>
                        <h2 className="text-2xl font-semibold mb-4 text-start">Create Notification</h2>
                        <NotificationForm />
                    </div>
                    <div className=' w-11/12 md:w-8/12'>
                        <h2 className="text-2xl font-semibold mb-4 text-end">Existing Notifications</h2>
                        <div className='max-h-96 overflow-scroll'>
                            <ViewNotification />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
