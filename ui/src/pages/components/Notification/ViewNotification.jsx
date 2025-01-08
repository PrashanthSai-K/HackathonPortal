import React from 'react'
import NotificationItem from './NotificationItem'

export default function ViewNotification() {

    const notifications = [
        {
          id: 1,
          title: "Finalist Published",
          description: "Finalist results will be published soon stay tuned for updates",
          date: "10/01/2025",
          type: "deadline"
        },  
    
        {
          id: 2,
          title: "Evaluation Inprogress",
          description: "Evaluation is going at full speed get ready for the Big day",
          date: "11/01/2025",
          type: "finalist"
        }, 
      ]

    return (
        <>
            <div className="space-y-3">
                {notifications.length === 0 ? (
                    <p>No notifications found.</p>
                ) : (
                    notifications.map((notification)=>{
                        return(
                            <NotificationItem notification={notification} />
                        )
                    })
                )}
            </div>
        </>
    )
}
