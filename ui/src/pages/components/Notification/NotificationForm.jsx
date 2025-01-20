import React, { useState } from 'react'
import { Button } from "../../../components/components/ui/button"
import { Input } from "../../../components/components/ui/input"
import { Label } from "../../../components/components/ui/label"
import { Textarea } from "../../../components/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/components/ui/select"


export default function NotificationForm({notification}) {

    const [title, setTitle] = useState(notification?.title || '');
    const [description, setDescription] = useState(notification?.description || '');
    const [date, setDate] = useState(notification?.date || '');
    const [type, setType] = useState(notification?.type || 'deadline');

    const handleSubmit =()=>{

    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4 ">
                <div className="space-y-2  w-full text-start">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2  w-full text-start">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2  w-full text-start">
                    <Label htmlFor="date">Date</Label>
                    <Input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="space-y-2  w-full text-start">
                    <Label htmlFor="type">Type</Label>
                    <Select value={type} >
                        <SelectTrigger>
                            <SelectValue placeholder="Select notification type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="result">Result</SelectItem>
                            <SelectItem value="finalist">Finalist</SelectItem>
                            <SelectItem value="deadline">Important Date</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button type="submit" className=' w-full text-start'>
                    Submit
                    {/* {isSubmitting ? 'Saving...' : (notification ? 'Update' : 'Create')} Notification */}
                </Button>
            </form>
        </>
    )
}
