import React, { useEffect, useState } from 'react'
import Table from '../components/ProblemStatements/Table'
import Navbar from '../components/LandingPage/Navbar'
import { userGetRequest } from '../components/exports';

export default function ProblemStatements() {

    const [ps, setPs] = useState([]);

    const fetchPs = async()=>{
        try {
            const response = await userGetRequest("/ps");
            setPs(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchPs();
    },[])

console.log(ps);

    return (
        <>
            <Navbar />
            <section className="home" id="home">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <h3 className='pb-5 g-black font-semibold text-3xl text-[#7f58f3] text-center'>PROBLEM STATEMENTS</h3>
                <Table data={ps} />
            </section>
        </>
    )
}
