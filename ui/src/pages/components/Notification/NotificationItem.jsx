import React, { useState } from 'react'
import { Button } from "../../../components/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/components/ui/card"
import NotificationForm from './NotificationForm'


export default function NotificationItem({notification}) {
console.log(notification);

    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{notification.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {isEditing ? (
                        <NotificationForm notification={notification} />
                    ) : (
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
                    )}
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                    <Button variant="outline" >
                        {/* {isEditing ? 'Cancel' : 'Edit'} */}
                    </Button>
                    <Button variant="destructive" >
                        {/* {isDeleting ? 'Deleting...' : 'Delete'} */}
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
