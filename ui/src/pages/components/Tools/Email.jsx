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

    const quillRef1 = useRef();

    const [mailSubject, setMailSubject] = useState("");
    const [mailContent, setMailContent] = useState("");
    const [testMail, setTestMail] = useState("");

    const handleSendFinalistEmail = async () => {
        const content = quillRef1.current.getEditor().root.innerHTML;
        try {
            if (!mailSubject) {
                window.alert("No email subject");
                return;
            }
            if (!content || content == "<p><br></p>") {
                window.alert("No email content");
                return;
            }
            const response = await adminPostRequest("/events/finalemail", { mailContent: content, mailSubject: mailSubject });
            toast.success("Finalist Mail sent successfully");
            setMailContent("");
            setMailSubject("");
        } catch (error) {
            console.log(error);
            toast.error("Some error ! try after sometime");
        }
    }

    const handleSendResultsEmail = async () => {
        const content = quillRef1.current.getEditor().root.innerHTML;
        try {
            if (!mailSubject) {
                window.alert("No email subject");
                return;
            }
            if (!content || content == "<p><br></p>") {
                window.alert("No email content");
                return;
            }
            const response = await adminPostRequest("/events/resultemail", { mailContent: content, mailSubject: mailSubject });
            toast.success("Results Mail sent successfully");
            setMailContent("");
            setMailSubject("");
        } catch (error) {
            console.log(error);
            toast.error("Some error ! try after sometime");
        }
    }

    const handleSendTestEmail = async () => {
        const content = quillRef1.current.getEditor().root.innerHTML;
        try {
            if (!mailSubject) {
                window.alert("No email subject");
                return;
            }
            if (!content || content == "<p><br></p>") {
                window.alert("No email content");
                return;
            }
            if (!testMail) {
                window.alert("Enter email correctly");
                return;
            }
            const response = await adminPostRequest("/events/testemail", { mailContent: content, mailSubject: mailSubject, mail: testMail });
            toast.success("Test Mail sent successfully");
            setMailContent("");
            setTestMail("");
            setMailSubject("");
        } catch (error) {
            console.log(error);
            toast.error("Some error ! try after sometime");
        }
    }

    const [finalistEmailCall, isFinalistLoading] = useActionState(handleSendFinalistEmail, true);
    const [resultsEmailCall, isResultsLoading] = useActionState(handleSendResultsEmail, true);
    const [testEmailCall, isTestLoading] = useActionState(handleSendTestEmail, true);

    return (
        <>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Send Email</CardTitle>
                    </CardHeader>
                    {/* <form onSubmit={finalistEmailCall}> */}
                    <CardContent className='w-full' >
                        <div className="space-y-2 text-start flex flex-col">
                            <Label htmlFor="mailSubject" className='text-justify'>Email Subject</Label>
                            <input value={mailSubject} onChange={(e) => setMailSubject(e.target.value)} type="text" placeholder='Enter email subject' className='border border-gray-300 h-10 indent-2 focus:border-0 focus:outline-none focus:ring-1 focus:ring-gray-300' />
                        </div>
                        <div className="space-y-2 text-start">
                            <Label htmlFor="mailContent" className='text-justify'>Email Content</Label>
                            <ReactQuill
                                ref={quillRef1}
                                id="mailContent"
                                theme="snow"
                                value={mailContent}
                                onChange={setMailContent}
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
                    <CardFooter className='flex justify-end items-center w-full gap-2 pt-3 flex-col md:flex-row'>
                        <div className='flex gap-2 flex-col md:flex-row w'>
                            <input value={testMail} onChange={(e) => setTestMail(e.target.value)} type="email" className='w-auto border rounded-lg p-1 indent-2 focus:border-0 focus:outline-none focus:ring-1 focus:ring-gray-300' placeholder='Test email address' />
                            <Button onClick={testEmailCall} disabled={isTestLoading} >
                                {
                                    isTestLoading
                                        ?
                                        <i
                                            style={{ color: "white", fontSize: "1rem" }}
                                            className="gap-2 px-3 py-1 pi pi-spin pi-spinner"
                                        ></i>
                                        :
                                        "Test"
                                }
                            </Button>
                        </div>
                        <div className='flex gap-2'>
                            <Button onClick={finalistEmailCall} disabled={isFinalistLoading} >
                                {
                                    isFinalistLoading
                                        ?
                                        <i
                                            style={{ color: "white", fontSize: "1rem" }}
                                            className="gap-2 px-3 py-1 pi pi-spin pi-spinner"
                                        ></i>
                                        :
                                        "Finalist"
                                }
                            </Button>
                            <Button onClick={resultsEmailCall} disabled={isResultsLoading} >
                                {
                                    isResultsLoading
                                        ?
                                        <i
                                            style={{ color: "white", fontSize: "1rem" }}
                                            className="gap-2 px-3 py-1 pi pi-spin pi-spinner"
                                        ></i>
                                        :
                                        "Results"
                                }
                            </Button>
                        </div>
                    </CardFooter>
                    {/* </form> */}
                </Card>

                {/* <Card>
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
                </Card> */}
            </div>
        </>
    )
}
