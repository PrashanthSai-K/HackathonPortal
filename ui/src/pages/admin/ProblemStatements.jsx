import React, { useEffect, useState } from 'react'
import { userGetRequest } from '../components/exports';
import { useAuth } from '../../AuthContext';
import Table from '../components/AdminPS/Table';
import AddPopup from '../components/AdminPS/AddPopup';
import UploadPopup from '../components/AdminPS/UploadPopup';
import { useNavigate } from 'react-router';
import Navbar from '../components/LandingPage/Navbar';


export default function AdminProblemStatements() {

    const [ps, setPs] = useState([]);

    const fetchPs = async () => {
        try {
            const response = await userGetRequest("/ps");
            setPs(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const { loggedIn, user } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (!loggedIn) {
            navigate("/")
        }
        if(loggedIn && user.role != "admin"){
            navigate("/");
        }
        fetchPs();
    }, [])

    const [visible, setVisible] = useState(false);
    const [uploadVisible, setUploadVisible] = useState(false);

    return (
        <>
            <Navbar />
            <section className="home w-full flex flex-col items-center justify-center pt-24" id="home">
                <div className="circle hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <div className="circle  hidden md:block"></div>
                <Table user={user} data={ps} fetchPs={fetchPs} setAddVisible={setVisible} setUploadVisible={setUploadVisible} />
                <AddPopup visible={visible} setVisible={setVisible} fetchPs={fetchPs} />
                <UploadPopup visible={uploadVisible} setVisible={setUploadVisible} fetchPs={fetchPs} />
            </section>
        </>
    )
}
