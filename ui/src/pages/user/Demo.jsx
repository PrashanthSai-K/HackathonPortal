import React, { useState } from 'react'
import { Button } from "../../components/components/ui/button"
import { Input } from "../../components/components/ui/input"
import { Label } from "../../components/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/components/ui/form"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router'
import { deBounce, userGetRequest } from '../components/exports'

export default function Demo() {

    const data = {
        instituteCode: "",
        instituteName: "",
        instituteAddress: "",
        instituteCity: "",
        instituteState: "",
        institutePincode: "",
        instituteType: "",
        pocName: "",
        pocEmail: "",
        pocPhone: "",
        password: "",
    };

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [formData, setFormData] = useState(data);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log("Form Data Submitted:", formData);
            const response = await userPostRequest("/register", formData);
            toast.success(response.data.message);
            setFormData(data);
            setTimeout(navigate("/login"), 3000);
        } catch (error) {
            console.log(error);
            toast.error(
                error.response.data.error || error.response.data.errors[0].message
            );
        }
    };

    const [instituteCode, setInstituteCode] = useState([]);
    const [instituteName, setInstituteName] = useState([]);

    const searchSuggestions = deBounce(async (event) => {
        const query = event.query;
        if (!query) {
            setInstituteCode([]);
            setInstituteName([]);
            return
        }
        try {
            const response = await userGetRequest(`/suggestions?query=${query}`);
            const codes = response.data.data.map((d) => d.InstitutionCode);
            const names = response.data.data.map((d) => d.InstitutionName);
            setInstituteCode(codes);
            setInstituteName(names);
        } catch (error) {
            console.log(error);
        }
    })


    return (
        <div className='w-full flex items-center justify-center p-10 px-40'>
            <form onSubmit={handleSubmit} className="space-y-8 p-10 border rounded-lg">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Institute Registration</h2>
                    <p className="text-gray-500">Please fill out the details below to register your institute.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2 min-w-80">
                        <Label htmlFor="instituteName">Institute Name</Label>
                        <Input
                            id="instituteName"
                            name="instituteName"
                            value={formData.instituteName}
                            onChange={handleChange}
                            placeholder="Enter institute name"
                        />
                        {/* {errors.instituteName && <p className="text-red-500 text-sm">{errors.instituteName}</p>} */}
                    </div>

                    <div className="space-y-2 min-w-80">
                        <Label htmlFor="instituteEmail">Institute Email</Label>
                        <Input
                            id="instituteEmail"
                            name="instituteEmail"
                            type="email"
                            value={formData.instituteEmail}
                            onChange={handleChange}
                            placeholder="Enter institute email"
                        />
                        {/* {errors.instituteEmail && <p className="text-red-500 text-sm">{errors.instituteEmail}</p>} */}
                    </div>

                    <div className="space-y-2 min-w-80">
                        <Label htmlFor="instituteAddress">Institute Address</Label>
                        <Input
                            id="instituteAddress"
                            name="instituteAddress"
                            value={formData.instituteAddress}
                            onChange={handleChange}
                            placeholder="Enter institute address"
                        />
                        {/* {errors.instituteAddress && <p className="text-red-500 text-sm">{errors.instituteAddress}</p>} */}
                    </div>

                    <div className="space-y-2 min-w-80">
                        <Label htmlFor="instituteCity">City</Label>
                        <Input
                            id="instituteCity"
                            name="instituteCity"
                            value={formData.instituteCity}
                            onChange={handleChange}
                            placeholder="Enter city"
                        />
                        {/* {errors.instituteCity && <p className="text-red-500 text-sm">{errors.instituteCity}</p>} */}
                    </div>

                    <div className="space-y-2 min-w-80">
                        <Label htmlFor="instituteState">State</Label>
                        <Input
                            id="instituteState"
                            name="instituteState"
                            value={formData.instituteState}
                            onChange={handleChange}
                            placeholder="Enter state"
                        />
                        {/* {errors.instituteState && <p className="text-red-500 text-sm">{errors.instituteState}</p>} */}
                    </div>

                    <div className="space-y-2 min-w-80">
                        <Label htmlFor="institutePincode">Pincode</Label>
                        <Input
                            id="institutePincode"
                            name="institutePincode"
                            value={formData.institutePincode}
                            onChange={handleChange}
                            placeholder="Enter 6-digit pincode"
                        />
                        {/* {errors.institutePincode && <p className="text-red-500 text-sm">{errors.institutePincode}</p>} */}
                    </div>

                    <div className="space-y-2 min-w-80">
                        <Label htmlFor="instituteType">Institute Type</Label>
                        <Select value={formData.instituteType}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select institute type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Engineering">Engineering</SelectItem>
                                <SelectItem value="Arts">Arts</SelectItem>
                                <SelectItem value="Others">Others</SelectItem>
                            </SelectContent>
                        </Select>
                        {/* {errors.instituteType && <p className="text-red-500 text-sm">{errors.instituteType}</p>} */}
                    </div>
                </div>

                <div className="space-y-4 ">
                    <h3 className="text-xl font-semibold">Point of Contact (POC) Details</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2 min-w-80">
                        <Label htmlFor="pocName">POC Name</Label>
                        <Input
                            id="pocName"
                            name="pocName"
                            value={formData.pocName}
                            onChange={handleChange}
                            placeholder="Enter POC name"
                        />
                        {/* {errors.pocName && <p className="text-red-500 text-sm">{errors.pocName}</p>} */}
                    </div>

                    <div className="space-y-2 min-w-80">
                        <Label htmlFor="pocEmail">POC Email</Label>
                        <Input
                            id="pocEmail"
                            name="pocEmail"
                            type="email"
                            value={formData.pocEmail}
                            onChange={handleChange}
                            placeholder="Enter POC email"
                        />
                        {/* {errors.pocEmail && <p className="text-red-500 text-sm">{errors.pocEmail}</p>} */}
                    </div>

                    <div className="space-y-2 min-w-80">
                        <Label htmlFor="pocPhone">POC Phone Number</Label>
                        <Input
                            id="pocPhone"
                            name="pocPhone"
                            value={formData.pocPhone}
                            onChange={handleChange}
                            placeholder="Enter 10-digit phone number"
                        />
                        {/* {errors.pocPhone && <p className="text-red-500 text-sm">{errors.pocPhone}</p>} */}
                    </div>
                </div>

                <div className="space-y-2 min-w-80">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                    />
                    {/* {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} */}
                    <p className="text-sm text-gray-500">Password must be at least 8 characters long.</p>
                </div>

                <Button type="submit">Register Institute</Button>
            </form>
        </div>

    )
}
