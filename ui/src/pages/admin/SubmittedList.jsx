import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../../AuthContext';
import Navbar from '../components/LandingPage/Navbar';
import Table from '../components/SubmittedList/Table';

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
                <div className=' text-center text-violet-900 text-xl font-semibold'>SUBMITTED LIST</div>
                <Table />
            </section>
        </>
    )
}
