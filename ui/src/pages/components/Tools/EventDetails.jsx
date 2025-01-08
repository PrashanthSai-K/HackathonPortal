import React, { useEffect, useState } from 'react'
import { Button } from "../../../components/components/ui/button"
import { Input } from "../../../components/components/ui/input"
import { Label } from "../../../components/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/components/ui/card"
import { adminGetRequest, adminPostRequest } from '../exports'
import { toast } from 'react-toastify'
import { useActionState } from '../../../CustomHooks'


export default function EventDetails() {

    const data = {
        eventDate: "",
        eventVenue: "",
        finalRoundDate: "",
        resultsDate: "",
        prizeMoney: "",
    }

    const [eventDetails, setEventDetails] = useState(data);

    const handleChange = (e) => {
        const { name, value } = e.target
        setEventDetails((prevData) => (
            { ...prevData, [name]: value }
        ))
    }

    const handleSubmit = async () => {
        try {
            if(!(window.confirm("Do you want to update these details ?"))){
                return;
            }
            const response = await adminPostRequest("/events", eventDetails);
            fetchFunction();
            toast.success("Updated details Successfully");
        } catch (error) {
            console.log(error);
            toast.error("Some unexpected error");
        }
    }

    const [handleSubmitCall, isLoading] = useActionState(handleSubmit);

    const fetchEventDetails = async () => {
        try {
            const response = await adminGetRequest("/events");
            if (response.data) {
                const data = response.data.data
                setEventDetails((prevData) => (
                    {
                        ...prevData,
                        eventDate: data.event_date,
                        eventVenue: data.event_venue,
                        finalRoundDate: data.final_round_date,
                        resultsDate: data.results_date,
                        prizeMoney: data.prize_money
                    }
                ))
            }
        } catch (error) {
            console.log(error);
        }
    }

    const [fetchFunction, isFetchLoading] = useActionState(fetchEventDetails, true);

    useEffect(() => {
        fetchFunction();
    }, [])

    return (
        <>

            <Card>
                <CardHeader>
                    <CardTitle>Event Details</CardTitle>
                </CardHeader>
                <form className="" onSubmit={handleSubmitCall}>

                    <CardContent className='flex'>
                        {
                            isFetchLoading ?
                                <i
                                    style={{ color: "white", fontSize: "1rem" }}
                                    className="gap-2 px-3 py-1 pi pi-spin pi-spinner"
                                ></i>
                                :
                                <div className="flex flex-wrap">
                                    <div className="space-y-2 py-2 w-11/12 md:w-5/12 flex flex-col items-start ">
                                        <Label htmlFor="eventDate">Event Date</Label>
                                        <Input
                                            type="date"
                                            id="eventDate"
                                            name="eventDate"
                                            value={eventDetails.eventDate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2 py-2 md:pl-20 w-11/12 md:w-5/12 flex flex-col items-start ">
                                        <Label htmlFor="eventVenue">Event Venue</Label>
                                        <Input
                                            type="text"
                                            id="eventVenue"
                                            name="eventVenue"
                                            value={eventDetails.eventVenue}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2 py-2 w-11/12 md:w-5/12  flex flex-col items-start ">
                                        <Label htmlFor="finalRoundDate">Final Round Date</Label>
                                        <Input
                                            type="date"
                                            id="finalRoundDate"
                                            name="finalRoundDate"
                                            value={eventDetails.finalRoundDate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2 py-2 w-11/12 md:w-5/12 md:pl-20 flex flex-col items-start ">
                                        <Label htmlFor="resultsDate">Results Date</Label>
                                        <Input
                                            type="date"
                                            id="resultsDate"
                                            name="resultsDate"
                                            value={eventDetails.resultsDate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2 py-2 w-11/12 md:w-5/12 flex flex-col items-start ">
                                        <Label htmlFor="prizeMoney">Prize Money ($)</Label>
                                        <Input
                                            type="text"
                                            id="prizeMoney"
                                            name="prizeMoney"
                                            value={eventDetails.prizeMoney}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                        }

                    </CardContent>
                    <CardFooter className='flex justify-center md:justify-end w-full'>
                        <Button type="submit" >
                            {
                                isLoading ?
                                    <i
                                        style={{ color: "white", fontSize: "1rem" }}
                                        className="gap-2 px-3 py-1 pi pi-spin pi-spinner"
                                    ></i>
                                    : "Submit"
                            }
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </>
    )
}
