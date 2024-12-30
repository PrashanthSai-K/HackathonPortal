import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { adminGetRequest, userGetRequest } from '../components/exports';
import SHA256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import Navbar from '../components/LandingPage/Navbar';
import Table from '../components/ProblemStatementView/Table';
import { useAuth } from '../../AuthContext';
import { use } from 'react';

export default function ProblemStatementsView() {

    const { id } = useParams();

    const { user, getUser } = useAuth();

    const [ps, setPs] = useState();
    const [data, setData] = useState();

    const fetchPs = async () => {
        try {
            const response = await userGetRequest("/ps");
            appendSlug(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const appendSlug = (data) => {

        const result = data.map((d) => {
            // Generate a consistent hash using the problem ID (or any other field you want)
            const hash = SHA256(d.ps_id.toString());  // Hash the problem ID or any other field
            let slug = Base64.stringify(hash).substring(0, 10);  // Convert to Base64 and take first 10 characters

            // Replace URL-unsafe characters with URL-safe alternatives
            slug = slug.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

            return {
                ...d, route: slug
            };
        });
        findPageData(result);
    }

    const findPageData = (data) => {
        const result = data.find((d) => d.route === id)

        if (result != undefined && result != null) {
            setData(result);
            fetchPsRegistration(result);
            return
        }
    }

    const fetchPsRegistration = async (data) => {
        try {
            const response = await adminGetRequest(`/ps/registration/${data.ps_id}`);
            setPs(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        getUser();
        if (user && user.role != "user") {
            navigate("/")
        }
    }, [user])

    useEffect(()=> {
        fetchPs();
    },[])

    return (
        <>
            <Navbar />
            {ps &&
                <section className=" px-3 pt-24 home" id="home">
                    <div className='font-semibold text-sm lg:text-lg max-w-sm md:max-w-lg lg:max-w-full  text-justify'>
                        {`${data.ps_id} - ${data.title}`}
                    </div>
                    <Table data={ps} fetchPs={fetchPs} />
                </section>
            }
        </>
    )
}
