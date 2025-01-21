import React, { useRef, useState } from 'react';
import { Button } from "../../../components/components/ui/button";
import { Textarea } from "../../../components/components/ui/textarea";
import { Label } from "../../../components/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/components/ui/card";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { adminPostRequest } from '../exports';
import { useActionState } from '../../../CustomHooks';
import { toast } from 'react-toastify';


export default function Email() {

    const [finalistEmail, setFinalistEmail] = useState("");

    const quillRef1 = useRef();
    const quillRef2 = useState();

    const [resultsEmail, setResultsEmail] = useState("");

    const handleSendFinalistEmail = async () => {
        const content = quillRef1.current.getEditor().root.innerHTML;
        try {
            const response = await adminPostRequest("/events/finalemail", { finalistEmail: content });
            toast.success("Mail sent successfully");
            setFinalistEmail("");
        } catch (error) {
            console.log(error);
            toast.error("Some error ! try after sometime");
        }
    }

    const handleSendResultsEmail = async () => {
        const content = quillRef2.current.getEditor().root.innerHTML;
        try {
            const response = await adminPostRequest("/events/resultemail", { resultsEmail: content });
            toast.success("Mail sent successfully");
            setResultsEmail("");
        } catch (error) {
            console.log(error);
            toast.error("Some error ! try after sometime");
        }
    }

    const [finalistEmailCall, isFinalistLoading] = useActionState(handleSendFinalistEmail);
    const [resultsEmailCall, isResultsLoading] = useActionState(handleSendResultsEmail);

    return (
        <>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Finalist Email</CardTitle>
                    </CardHeader>
                    <form onSubmit={finalistEmailCall}>
                        <CardContent className='w-full' >
                            <div className="space-y-2 text-start">
                                <Label htmlFor="finalistEmail" className='text-justify'>Email Content</Label>
                                <ReactQuill
                                    ref={quillRef1}
                                    id="finalistEmail"
                                    theme="snow"
                                    value={finalistEmail}
                                    onChange={setFinalistEmail}
                                    rows={8}
                                    placeholder="Enter the email content for finalists..."
                                    modules={{
                                        toolbar: [
                                            [{ header: [1, 2, false] }],
                                            ["bold", "italic", "underline", "strike"],
                                            [{ list: "ordered" }, { list: "bullet" }],
                                            ["link"],
                                        ],
                                    }}
                                    formats={[
                                        "header",
                                        "bold",
                                        "italic",
                                        "underline",
                                        "strike",
                                        "list",
                                        "bullet",
                                        "link",
                                    ]}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className='flex justify-end w-full'>
                            <Button type='submit' disabled={isFinalistLoading} >
                                {
                                    isFinalistLoading
                                        ?
                                        <div className=" h-screen w-full flex items-center justify-center">
                                            <i className="pi pi-spin pi-spinner text-4xl"></i>
                                        </div>
                                        :
                                        "Send"
                                }
                            </Button>
                        </CardFooter>
                    </form>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Results Email</CardTitle>
                    </CardHeader>
                    <form onSubmit={resultsEmailCall}>
                        <CardContent className='w-full'>
                            <div className="space-y-2 text-start">
                                <Label htmlFor="resultsEmail">Email Content</Label>
                                <ReactQuill
                                    ref={quillRef2}
                                    id="finalistEmail"
                                    theme="snow"
                                    value={resultsEmail}
                                    onChange={setResultsEmail}
                                    rows={8}
                                    placeholder="Enter the email content for results..."
                                    modules={{
                                        toolbar: [
                                            [{ header: [1, 2, false] }],
                                            ["bold", "italic", "underline", "strike"],
                                            [{ list: "ordered" }, { list: "bullet" }],
                                            ["link"],
                                        ],
                                    }}
                                    formats={[
                                        "header",
                                        "bold",
                                        "italic",
                                        "underline",
                                        "strike",
                                        "list",
                                        "bullet",
                                        "link",
                                    ]}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className='flex justify-end w-full'>
                            <Button type='submit'>
                                {
                                    isResultsLoading
                                        ?
                                        <div className=" h-screen w-full flex items-center justify-center">
                                            <i className="pi pi-spin pi-spinner text-4xl"></i>
                                        </div>
                                        :
                                        "Send"
                                }
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </>
    )
}
