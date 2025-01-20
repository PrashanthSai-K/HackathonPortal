import React, { useEffect, useState } from 'react'
import Table from '../components/ProblemStatements/Table'
import { userGetRequest } from '../components/exports';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router';
import Navbar from '../components/LandingPage/Navbar';


export default function ProblemStatements() {

    const [ps, setPs] = useState([]);

    const { user } = useAuth();

    const navigate = useNavigate();


    const fetchPs = async () => {
        try {
            const response = await userGetRequest("/ps");
            setPs(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(user && user.role == 'admin'){
            navigate("/problems-manage");
        }
        fetchPs();
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
                <Table user={user} data={ps} />
            </section>

        </>
    )
}
