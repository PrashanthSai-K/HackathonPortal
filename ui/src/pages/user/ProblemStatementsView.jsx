import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { userGetRequest } from '../components/exports';
import SHA256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import Navbar from '../components/LandingPage/Navbar';

export default function ProblemStatementsView() {

    const { id } = useParams();

    const [ps, setPs] = useState();

    const fetchPs = async () => {
        try {
            const response = await userGetRequest("/ps/registration");
            appendSlug(response.data.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    const appendSlug = (data) => {
        console.log(data);
                
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

        console.log(result);
           
        findPageData(result);
    }

    const findPageData = (data) => {

        const result = data.find((d) => d.route === id)
        setPs(result);
    }

    useEffect(() => {
        fetchPs();
    }, [])

    return (
        <>
            <Navbar />
            {ps &&
                <section className=" px-3 pt-24" id="home">
                    <div className='font-semibold text-sm max-w-sm md:max-w-lg lg:max-w-full  text-justify'>
                        { `${ps.ps_id} - ${ps.title}`}
                    </div>

                </section>
            }
        </>
    )
}
