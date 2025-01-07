import React, { useEffect, useState } from 'react'
import { TeamCard } from '../components/ProfileCreation/TeamCard';
import { Button } from "../../components/components/ui/button"
import { Input } from "../../components/components/ui/input"
import { PlusCircle, Search } from 'lucide-react'
import Navbar from '../components/LandingPage/Navbar';
import { userGetRequest } from '../components/exports';
import TeamView from '../components/ProfileCreation/TeamView';
import TeamCreation from '../components/ProfileCreation/TeamCreation';

export default function Team() {

    const [visibleLeft, setVisibleLeft] = useState(false);
    const [teamDetails, setTeamDetails] = useState([]);
    const [modalData, setModalData] = useState();
    const [visible, setVisible] = useState(false);

    const formatKey = (key) => {
        // Replace underscores with spaces and capitalize each word
        return key
            .replace(/_/g, " ") // Replace underscores with spaces
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
    };

    const setModal = (rowData) => {
        const data = Object.entries(rowData)
            .slice(2)
            .map(([key, value]) => ({
                key: formatKey(key),
                value:
                    key === "specific_key" ? ( // Replace 'specific_key' with the actual key you want to check
                        <a href={value} target="_blank" rel="noopener noreferrer">
                            {value}
                        </a>
                    ) : (
                        value
                    ),
            }));
        setModalData(data);
        setVisible(true);
    };

    const getTeamDetails = async () => {
        try {
            const response = await userGetRequest("/getTeamDetails");
            setTeamDetails(response.data);
        } catch (e) {
            console.log("Failed to get team details", e);
        }
    };

    useEffect(() => {
        getTeamDetails();
    }, [])

    return (
        <>
            <Navbar />
            <div className="pt-24">
                <div className="">
                    <div className="flex justify-between items-center mb-10">
                        <h1 className="text-xl md:text-3xl font-bold text-violet-900">TEAM DETAILS</h1>
                        <Button onClick={() => setVisibleLeft(true)} className="bg-violet-600 hover:bg-violet-700 ">
                            <PlusCircle className="" color='white' size={20} />
                            Add Team
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 justify-center">
                        {teamDetails.map((team) => (
                            <TeamCard
                                key={team.ps_id}
                                team={team}
                                onClick={() => setModal(team)}
                            />
                        ))}
                    </div>

                    {teamDetails.length === 0 && (
                        <div className="text-center text-gray-500 mt-8">
                            No teams found. Add a new team to get started!
                        </div>
                    )}

                    {/* <AddTeamModal
                    isOpen={isAddModalOpen}
                    onClose={() => setIsAddModalOpen(false)}
                    onAddTeam={handleAddTeam}
                /> */}

                    {/* <TeamDetailsModal
                    isOpen={!!selectedTeam}
                    onClose={() => setSelectedTeam(null)}
                    team={selectedTeam}
                /> */}
                </div>
            </div>
            <TeamView
                visible={visible}
                setVisible={setVisible}
                modalData={modalData}
            />
            <TeamCreation
                visibleLeft={visibleLeft}
                setVisibleLeft={setVisibleLeft}
                getTeamDetails={getTeamDetails}
            />
        </>
    )
}
