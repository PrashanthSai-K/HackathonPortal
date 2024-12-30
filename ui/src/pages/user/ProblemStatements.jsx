import React, { useEffect, useState } from 'react'
import Table from '../components/ProblemStatements/Table'
import Navbar from '../components/LandingPage/Navbar'
import { userGetRequest } from '../components/exports';
import { useAuth } from '../../AuthContext';


export default function ProblemStatements() {

    const [ps, setPs] = useState([]);

    const { user, getUser } = useAuth();


    const fetchPs = async () => {
        try {
            const response = await userGetRequest("/ps");
            setPs(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPs();
        getUser();
    }, [])

    return (
        <>
            <Navbar />
            <section className="home" id="home">
                <div className="circle hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <Table user={user} getUser={getUser} data={ps} />
            </section>

        </>
    )
}
