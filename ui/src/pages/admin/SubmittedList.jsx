import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../../AuthContext';
import Navbar from '../components/LandingPage/Navbar';
import Table from '../components/Submitted/Table';

export default function SubmittedList() {
    const { user } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (user.role != 'admin') {
            navigate("/")
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
