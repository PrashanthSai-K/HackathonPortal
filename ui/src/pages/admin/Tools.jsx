import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/components/ui/tabs"
import EventDetails from '../components/Tools/EventDetails';
import Email from '../components/Tools/Email';
import Navbar from '../components/LandingPage/Navbar';


export default function Tools() {

    const { loggedIn, user } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            navigate("/");
        }
        if(loggedIn && user.role != "admin"){
            navigate("/");
        }
    }, [])

    return (
        <>
            <Navbar />
            <section className=''>
                <div className="container mx-auto py-7 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold mb-6">Administration</h1>
                    <Tabs defaultValue="details" className="w-4/5 ">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="details">Event Details</TabsTrigger>
                            <TabsTrigger value="emails">Email Management</TabsTrigger>
                        </TabsList>
                        <TabsContent value="details">
                            <EventDetails />
                        </TabsContent>
                        <TabsContent value="emails">
                            <Email />
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    )
}
