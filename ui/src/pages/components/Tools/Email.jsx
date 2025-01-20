import React, { useState } from 'react'
import { Button } from "../../../components/components/ui/button"
import { Textarea } from "../../../components/components/ui/textarea"
import { Label } from "../../../components/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/components/ui/card"


export default function Email() {

    const [finalistEmail, setFinalistEmail] = useState();
    const [resultsEmail, setResultsEmail] = useState();
    const handleSendFinalistEmail = () => {

    }
    const handleSendResultsEmail = () => {

    }

    return (
        <>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Finalist Email</CardTitle>
                    </CardHeader>
                    <CardContent className='w-full' >
                        <div className="space-y-2 text-start">
                            <Label htmlFor="finalistEmail" className='text-justify'>Email Content</Label>
                            <Textarea
                                id="finalistEmail"
                                value={finalistEmail}
                                onChange={(e) => setFinalistEmail(e.target.value)}
                                rows={8}
                                placeholder="Enter the email content for finalists..."
                            />
                        </div>
                    </CardContent>
                    <CardFooter className='flex justify-end w-full'>
                        <Button onClick={handleSendFinalistEmail} >
                            {/* {isSendingFinalist ? 'Sending...' : 'Send Finalist Email?s'} */}
                            Send
                        </Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Results Email</CardTitle>
                    </CardHeader>
                    <CardContent className='w-full'>
                        <div className="space-y-2 text-start">
                            <Label htmlFor="resultsEmail">Email Content</Label>
                            <Textarea
                                id="resultsEmail"
                                value={resultsEmail}
                                onChange={(e) => setResultsEmail(e.target.value)}
                                rows={6}
                                placeholder="Enter the email content for results..."
                            />
                        </div>
                    </CardContent>
                    <CardFooter className='flex justify-end w-full'>
                        <Button onClick={handleSendResultsEmail}>
                            Send
                            {/* {isSendingResults ? 'Sending...' : 'Send Results Emails'} */}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}
