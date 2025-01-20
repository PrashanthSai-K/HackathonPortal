import React, { useEffect, useState } from 'react'
import NotificationForm from '../components/Notification/NotificationForm'
import ViewNotification from '../components/Notification/ViewNotification'
import Navbar from '../components/LandingPage/Navbar'
import { adminGetRequest } from '../components/exports'
import { useActionState } from '../../CustomHooks'

export default function Notification() {

    const [notifications, setNotifications] = useState([]);

    const fetchNotification = async (req, res) => {
        try {
            const response = await adminGetRequest("/notification");
            setNotifications(response.data.data);
        } catch (error) {
            console.log("some error");
        }
    }

    const [fetchFunctionCall, isLoading] = useActionState(fetchNotification, true);

    useEffect(() => {
        fetchFunctionCall();
    }, [])

    return (

        <>
            <Navbar />
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Manage Notifications</h1>
                <div className="flex flex-col md:flex-row gap-3 ">
                    <div className='w-11/12 md:w-4/12 px-4 md:px-0'>
                        <h2 className="text-2xl font-semibold mb-4 text-start">Create Notification</h2>
                        <NotificationForm fetchFunctionCall={fetchFunctionCall} />
                    </div>
                    <div className=' w-full md:w-7/12'>
                        <h2 className="text-2xl font-semibold mb-4 text-end px-4 md:px-0">Existing Notifications</h2>
                        <div className='w-full md:max-h-96 md:overflow-scroll '>
                            <ViewNotification notifications={notifications} isLoading={isLoading} fetchFunctionCall={fetchFunctionCall} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
