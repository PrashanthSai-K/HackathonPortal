import React, { useState } from 'react'
import { Button } from "../../../components/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/components/ui/card"
import NotificationForm from './NotificationForm'
import EditNotificatoin from './EditNotificatoin';
import { adminPostRequest } from '../exports';
import { toast } from 'react-toastify';
import { useActionState } from '../../../CustomHooks';


export default function NotificationItem({ notification, fetchFunctionCall }) {

    const [isEditing, setIsEditing] = useState(false);


    const handleDelete = async () => {
        try {
            const response = await adminPostRequest("/notification/delete", { id: notification?.id });
            toast.success("Deleted successfully");
            fetchFunctionCall();
        } catch (error) {
            console.log(error);
            toast.error("Some unexpected error");
        }
    }

    const [deleteCall, isDeleting] = useActionState(handleDelete, true);

    return (
        <>
            <Card className='w-96 h-80 m-1 md:m-3'>
                <CardHeader>
                    <CardTitle>{notification.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <>
                        <p>{notification.description}</p>
                        <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
                        <span className={`inline-block mt-2 text-xs font-medium px-2.5 py-0.5 rounded ${notification.type === 'result' ? 'bg-green-100 text-green-800' :
                            notification.type === 'finalist' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                            }`}>
                            {notification.type === 'result' ? 'Result' :
                                notification.type === 'finalist' ? 'Finalist' :
                                    'Important Date'}
                        </span>
                    </>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsEditing(true)}>
                        Edit
                    </Button>
                    <Button variant="destructive" onClick={()=>deleteCall()} disabled={isDeleting}>
                        {
                            isDeleting
                                ?
                                <div className=" h-screen w-full flex items-center justify-center">
                                    <i className="pi pi-spin pi-spinner text-4xl"></i>
                                </div>
                                :
                                "Delete"
                        }
                    </Button>
                </CardFooter>
            </Card>
            <EditNotificatoin
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}
                notification={notification}
                fetchFunctionCall={fetchFunctionCall}
            />
        </>
    )
}
