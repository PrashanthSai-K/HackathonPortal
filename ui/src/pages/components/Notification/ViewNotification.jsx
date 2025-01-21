import React, { useEffect, useState } from 'react'
import NotificationItem from './NotificationItem'
import EditInstitution from '../Institution/EditInstitution'
import EditNotificatoin from './EditNotificatoin';
import { adminGetRequest } from '../exports';
import { useActionState } from '../../../CustomHooks';

export default function ViewNotification({ notifications, isLoading, fetchFunctionCall }) {

    if (isLoading) return (
        <div className=" h-screen w-full flex items-center justify-center">
            <i className="pi pi-spin pi-spinner text-4xl"></i>
        </div>
    )

    return (
        <>
            <div className="w-full flex flex-wrap justify-center md:justify-start">
                {notifications.length === 0 ? (
                    <p>No notifications found.</p>
                ) : (
                    notifications.map((notification) => {
                        return (
                            <NotificationItem notification={notification} fetchFunctionCall={fetchFunctionCall} />
                        )
                    })
                )}
            </div>

        </>
    )
}
