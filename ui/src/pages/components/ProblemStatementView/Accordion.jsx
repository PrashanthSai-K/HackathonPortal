import React, { useEffect, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../components/components/ui/dropdown-menu"
import { Button } from "../../../components/components/ui/button"
import { MoreHorizontal, Edit, Trash, Eye } from "lucide-react"
import { ChevronDown } from "lucide-react"
import { Badge } from "../../../components/components/ui/badge"
import PopupModal from './PopupModal';
import { toast } from 'react-toastify';
import { adminPostRequest } from '../exports';


export default function AccordionData({ data, fetchPs }) {

    const stages = ["SUBMITTED", "PRESENTATION", "PARTICIPATION", "WINNER"]

    const [groupedData, setGroupedData] = useState({})

    useEffect(() => {
        const grouped = data.reduce(
            (acc, item) => {
                if (!acc[item.stage]) {
                    acc[item.stage] = []
                }
                acc[item.stage].push(item)
                return acc
            },
            {}
        )
        setGroupedData(grouped)
    }, [data])

    const statusBadge = (stage) => {
        const color = stage === "SUBMITTED" ? "bg-orange-400" : stage === "PRESENTATION" ? "bg-violet-950" : stage === "PARTICIPATION" ? "bg-violet-500" : stage === "WINNER" ? "bg-green-500" : "";
        return <Badge className={`${color} text-white cursor-default`}>{stage}</Badge>
    }

    const [visible, setVisible] = useState(false);
    const [modalData, setModalData] = useState({});

    const formatKey = (key) => {
        // Replace underscores with spaces and capitalize each word
        return key
            .replace(/_/g, ' ') // Replace underscores with spaces
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
    };

    const setModal = (rowData) => {
        const dataEntries = Object.entries(rowData)
            .slice(2, 15)
            .map(([key, value]) => ({
                key: formatKey(key),
                value: key === 'doc_link' // Replace 'specific_key' with the actual key you want to check
                    ? <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>
                    : value,
            }));
        setModalData(dataEntries);
        setVisible(true);
    }

    const selectTeam = (data) => {
        if (data.stage == "SUBMITTED") {
            toPresentation(data);
            return;
        }
        if (data.stage == "PRESENTATION") {
            toParticipation(data);
            return;
        }
        if (data.stage == "PARTICIPATION") {
            toWinner(data);
            return;
        }
    }

    const unselectTeam = (data) =>{
        if(data.stage == "WINNER"){
            backtoParticipation(data);
            return;
        }
        if(data.stage == "PARTICIPATION"){
            backtoPresentation(data);
            return
        }
        if(data.stage == "PRESENTATION"){
            backtoSubmitted(data);
            return;
        }
    }

    const toPresentation = async (data) => {
        try {
            if (!window.confirm("Do you want to move participant to Presentation Round ?")) {
                return
            }            
            const response = await adminPostRequest("/finalist/toPresentation", { ps_id: data.ps_id, team_id: data.team_id });
            toast.success("Selected Sucessfully");
            fetchPs();
        } catch (error) {
            console.log(error);
            toast.error("Some Error");
        }
    }

    const toParticipation = async (data) => {
        try {
            if (!window.confirm("Do you want to move participant to Participation Round ?")) {
                return
            }
            const response = await adminPostRequest("/finalist/toParticipation", { ps_id: data.ps_id, team_id: data.team_id });
            toast.success("Selected Sucessfully");
            fetchPs();
        } catch (error) {
            console.log(error);
            toast.error("Some Error");
        }
    }

    const toWinner = async (data) => {
        try {
            if (!window.confirm("Do you want to move participant to final ?")) {
                return
            }
            const response = await adminPostRequest("/finalist/toWinner", { ps_id: data.ps_id, team_id: data.team_id });
            toast.success("Selected Sucessfully");
            fetchPs();
        } catch (error) {
            console.log(error);
            toast.error("Some Error");
        }
    }


    const backtoParticipation = async(data)=> {
        try {
            if (!window.confirm("Do you want to remove participant from Winner ?")) {
                return
            }
            const response = await adminPostRequest("/finalist/backtoParticipation", { ps_id: data.ps_id, team_id: data.team_id });
            toast.success("Unselected Sucessfully");
            fetchPs();
        } catch (error) {
            console.log(error);
            toast.error("Some Error");
        }
    }

    const backtoPresentation = async(data)=> {
        try {
            if (!window.confirm("Do you want to remove participant from Participation Round ?")) {
                return
            }
            const response = await adminPostRequest("/finalist/backtoPresentation", { ps_id: data.ps_id, team_id: data.team_id });
            toast.success("Unselected Sucessfully");
            fetchPs();
        } catch (error) {
            console.log(error);
            toast.error("Some Error");
        }
    }

    const backtoSubmitted = async(data)=> {
        try {
            if (!window.confirm("Do you want to remove participant from Presentation Round ?")) {
                return
            }
            const response = await adminPostRequest("/finalist/backtoSubmitted", { ps_id: data.ps_id, team_id: data.team_id });
            toast.success("Unselected Sucessfully");
            fetchPs();
        } catch (error) {
            console.log(error);
            toast.error("Some Error");
        }
    }

    return (
        <>
            <div className='w-full -black flex justify-center mt-5'>
                <Accordion type="single" collapsible className="w-11/12">
                    {stages.map((stage, index) => (
                        <AccordionItem value={stage} key={index} className=' pb-2'>
                            <AccordionTrigger className='border rounded-lg'>{stage}</AccordionTrigger>
                            <AccordionContent key={index}>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Code</TableHead>
                                            <TableHead>Title</TableHead>
                                            <TableHead>Team Name</TableHead>
                                            <TableHead>Leader Name</TableHead>
                                            <TableHead>Participants</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {groupedData[stage]?.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{item.ps_id}</TableCell>
                                                <TableCell>{item.title}</TableCell>
                                                <TableCell>{item.team_name}</TableCell>
                                                <TableCell>{item.leader_name}</TableCell>
                                                <TableCell>{item.number_of_participants}</TableCell>
                                                <TableCell>{statusBadge(item.stage)}</TableCell>
                                                <TableCell>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                                <span className="sr-only">Open menu</span>
                                                                <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end" className="bg-white w-36 p-1">
                                                            <DropdownMenuItem onClick={() => setModal(item)}>
                                                                <Eye className="" />
                                                                <span>View</span>
                                                            </DropdownMenuItem>
                                                            {item.stage === "SUBMITTED" && (
                                                                <DropdownMenuItem onClick={() => selectTeam(item)}>
                                                                    <Edit className="" />
                                                                    <span>Select</span>
                                                                </DropdownMenuItem>
                                                            )}
                                                            {item.stage === "PRESENTATION" && (
                                                                <DropdownMenuItem onClick={() => selectTeam(item)}>
                                                                    <Edit className="" />
                                                                    <span>Select</span>
                                                                </DropdownMenuItem>
                                                            )}
                                                            {item.stage === "PRESENTATION" && (
                                                                <DropdownMenuItem onClick={() => unselectTeam(item)}>
                                                                    <Trash className="" />
                                                                    <span>Unselect</span>
                                                                </DropdownMenuItem>
                                                            )}
                                                            {item.stage === "PARTICIPATION" && (
                                                                <DropdownMenuItem onClick={() => selectTeam(item)}>
                                                                    <Edit className="" />
                                                                    <span>Select</span>
                                                                </DropdownMenuItem>
                                                            )}
                                                            {item.stage === "PARTICIPATION" && (
                                                                <DropdownMenuItem onClick={() => unselectTeam(item)}>
                                                                    <Trash className="" />
                                                                    <span>Unselect</span>
                                                                </DropdownMenuItem>
                                                            )}
                                                            {item.stage === "WINNER" && (
                                                                <DropdownMenuItem onClick={() => unselectTeam(item)}>
                                                                    <Trash className="" />
                                                                    <span>Unselect</span>
                                                                </DropdownMenuItem>
                                                            )}
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <PopupModal visible={visible} setVisible={setVisible} modalData={modalData} />
            </div>
        </>
    )
}
