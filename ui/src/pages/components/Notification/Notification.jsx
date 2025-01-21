import { useState } from "react"
import { Button } from "../../../components/components/ui/button"
import { Bell } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/components/ui/popover"

export function NotificationButton({ notifications }) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            className={`rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen ? "" : "animate-bounce"}  bg-violet-800 hover:bg-violet-950`}
            onClick={() => setIsOpen(true)}
          >
            <Bell className="scale-150 " color="white" />
            <span className="sr-only">Open notifications</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 max-h-96 overflow-scroll pr-2">
          <div className="grid gap-4 ">
            {notifications.length === 0 ? (
              <p>No new notifications</p>
            ) : (
              notifications.map((notification) => (
                <>
                  <div key={notification.id} className="grid gap-1 w-full text-justify border-b pb-2">
                    <h3 className="font-semibold">{notification.title}</h3>
                    <p className="text-sm">{notification.description}</p>
                    {notification.date && (
                      <p className="text-xs text-gray-500">{notification.date}</p>
                    )}
                    {notification.type === "result" && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Result</span>
                    )}
                    {notification.type === "finalist" && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Finalist</span>
                    )}
                    {notification.type === "deadline" && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">Important Date</span>
                    )}
                  </div>
                </>
              ))
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}