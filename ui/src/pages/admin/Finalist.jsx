import React, { useEffect } from 'react'
import Navbar from '../components/LandingPage/Navbar'
import Table from '../components/Finalist/Table'
import { useNavigate } from 'react-router';
import { useAuth } from '../../AuthContext';

export default function Finalist() {

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
                <div className=' text-center text-violet-900 text-xl font-semibold'>FINALIST</div>
                <Table />
            </section>
        </>
    )
}
