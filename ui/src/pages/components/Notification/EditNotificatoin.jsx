import React, { useState } from 'react';
import { Button } from "../../../components/components/ui/button"
import { Input } from "../../../components/components/ui/input"
import { Label } from "../../../components/components/ui/label"
import { Textarea } from "../../../components/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "../../../components/components/ui/dialog"
import { adminPutRequest } from '../exports';
import { toast } from 'react-toastify';
import { useActionState } from '../../../CustomHooks';

export default function EditNotificatoin({ isOpen, onClose, notification, fetchFunctionCall }) {

    const [id, setId] = useState(notification?.id || "");
    const [title, setTitle] = useState(notification?.title || '');
    const [description, setDescription] = useState(notification?.description || '');
    const [date, setDate] = useState(notification?.date || '');
    const [type, setType] = useState(notification?.type || 'deadline');


    const handleUpdate = async () => {
        try {
            const response = await adminPutRequest("/notification", { id:id, title: title, description: description, date: date, type: type });
            toast.success("Successfully updated !!");
            fetchFunctionCall();
            onClose();
        } catch (error) {
            console.log(error);
            toast.error("Some unexpected error");
        }
    }

    const [updateCall, isLoading] = useActionState(handleUpdate);

    return (
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle>Edit Notification</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={updateCall} className="space-y-4 w-full">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="date">Date</Label>
                            <Input
                                id="date"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="type">Type</Label>
                            <Select value={type} onValueChange={(value) => setType(value)}>
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
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {
                                isLoading
                                    ?
                                    <div className=" h-screen w-full flex items-center justify-center">
                                        <i className="pi pi-spin pi-spinner text-4xl"></i>
                                    </div>
                                    :
                                    "Update Notification"
                            }
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
