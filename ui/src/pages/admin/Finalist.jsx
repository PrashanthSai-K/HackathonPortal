import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import Table from '../components/Finalist/Table'

export default function Finalist() {
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
