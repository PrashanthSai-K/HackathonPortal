import React, { useEffect, useState } from 'react'
import Navbar from '../components/LandingPage/Navbar'
import { userGetRequest } from '../components/exports';
import { useAuth } from '../../AuthContext';
import Table from '../components/AdminPS/Table';
import AddPopup from '../components/AdminPS/AddPopup';


export default function AdminProblemStatements() {

    const [ps, setPs] = useState([]);

    const { user } = useAuth();


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
        // getUser();
    }, [])

    const [visible, setVisible] = useState(false);

    return (
        <>
            <Navbar />
            <section className="home" id="home">
                <div className="circle hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <Table user={user} data={ps} setAddVisible={setVisible} />
                <AddPopup visible={visible} setVisible={setVisible} />
            </section>

        </>
    )
}
