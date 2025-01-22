import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../../AuthContext';
import Navbar from '../components/LandingPage/Navbar';
import Table from '../components/Presentation/Table';

export default function Presentation() {

    const { loggedIn, user } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            navigate("/")
        }
        if(loggedIn && user.role != "admin"){
            navigate("/");
        }
    }, [])

    return (
        <>
            <Navbar />
            <section className=" px-3 pt-24 home" id="">
                <Table />
            </section>
        </>
    )
}
