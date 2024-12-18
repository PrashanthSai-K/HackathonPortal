import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import React, { useRef, useState } from 'react'
import "../../css/style-login.css";


export default function Registration() {

    const [formData, setFormData] = useState({
        instituteName: "",
        instituteAddress: "",
        instituteType: "",
        pocName: "",
        pocEmail: "",
        pocPhone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., API call)
        console.log("Form Data Submitted:", formData);
    };

    return (
        <>
            {/* <center className='h-screen w-full bg-blue-50 gray-50 flex items-center justify-center'>
                <form ref={formRef} className='flex flex-col gap-5 transition-all duration-500 max-h-4/6 w-11/12 items-center justify-center border bg-white'>
                    <div className='text-start pl-5 text-2xl flex gap-3 items-center pt-5 h-20 text-blue-800'>
                        <span className='text-xl pi pi-user-plus text-blue-800 font-medium'></span>
                        Institute Registration
                    </div>
                        <div className='text-xsm font-medium flex gap-5 items-center w-full'>
                            <span className='w-2/12'>Project Name:</span>
                            <InputText className=' border p-2 w-10/12 pl-5 ' name='project_name' value={formData.project_name} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} />
                        </div>
                        <div className='text-xsm font-medium flex gap-5 items-center w-full'>
                            <span className='w-2/12'>Project Lead: </span>
                            
                        </div>

                        <div className='text-xsm font-medium flex gap-5 items-center  w-full'>
                            <span className='w-2/12'>Team Project : </span>
                            
                            <span className='text-gray-500 text-xsm'> (Note: Select if you project consists of more than one member)</span>
                        </div>
                        {
                            formData.multiple_users &&
                            <div className='text-xsm font-medium flex gap-5 items-center w-full'>
                                <span className='w-2/12'>Team Members: </span>
                                <MultiSelect value={formData.assigned_users} options={teamMembers} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} optionLabel="email"
                                    filter name='assigned_users' placeholder="Select Users" itemTemplate={countryTemplate} className="text-xsm  border w-10/12 rounded min-h-10 border-gray-100 flex items-center gap-2 pl-5 overflow-y-scroll scrollbar-hidden "
                                    display="chip" itemClassName='bg-gray-100 border-b text-xsm'
                                />
                            </div>
                        }

                        <div className='text-xsm font-medium flex gap-5 items-center w-full'>
                            <span className='w-2/12'>Status:</span>
                            <div className=' border w-10/12 rounded  border-gray-100 flex items-center gap-2 p-2 pl-5 '>
                                <span className="h-1.5 w-1.5 bg-orange-500 rounded-full"></span>
                                <span>{"Pending"}</span>
                            </div>
                        </div>

                        <div className='text-xsm font-medium flex gap-5 items-start justify-start w-full'>
                            <span className='w-2/12 '>Description </span>
                            <InputTextarea name='project_description' value={formData.project_description} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} className=' border p-2 w-10/12 pl-5' autoResize rows={5} cols={30} />
                        </div>
                        
                </form>
            </center> */}
            <body className=''>
                <center className='bg-[#f2f4fe]'>
                    <section className="signup_forms bg-[#f2f4fe] p-10">
                        <div className="wrapper_signup">
                            <legend className='text-[#465f82] text-xl'>Institute Registration</legend>
                            <p>Fill out the details below to register your institute.</p>
                            <form onSubmit={handleSubmit} className="w-full">
                                {/* Institute Details */}
                                <fieldset>
                                    <legend>Institute Details</legend>
                                    <div className="form-group_signup">
                                        <input
                                            type="text"
                                            name="instituteCode"
                                            placeholder="Institute Code"
                                            value={formData.instituteName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group_signup">
                                        <input
                                            type="text"
                                            name="instituteName"
                                            placeholder="Institute Name"
                                            value={formData.instituteName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group_signup">
                                        <input
                                            type="text"
                                            name="instituteAddress"
                                            placeholder="Institute Address"
                                            value={formData.instituteAddress}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group_signup">
                                        <input
                                            type="text"
                                            name="instituteAddress"
                                            placeholder="Institute City"
                                            value={formData.instituteAddress}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-wrap md:flex-nowrap md:w-7/10 justify-center' >
                                    <div className="form-group_signup" >
                                        <input
                                            type="text"
                                            name="instituteAddress"
                                            placeholder="Institute State"
                                            value={formData.instituteAddress}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group_signup md:pl-3">
                                        <input
                                            type="text"
                                            name="instituteAddress"
                                            placeholder="Pincode"
                                            value={formData.instituteAddress}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    </div>
                                    <div className="form-group_signup">
                                        <select
                                            name="instituteType"
                                            value={formData.instituteType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>
                                                Select Institute Type
                                            </option>
                                            <option value="University">University</option>
                                            <option value="College">College</option>
                                            <option value="School">School</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </fieldset>

                                {/* POC Details */}
                                <fieldset>
                                    <legend>Point of Contact (POC) Details</legend>
                                    <div className="form-group_signup">
                                        <input
                                            type="text"
                                            name="pocName"
                                            placeholder="POC Name"
                                            value={formData.pocName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group_signup">
                                        <input
                                            type="email"
                                            name="pocEmail"
                                            placeholder="POC Email"
                                            value={formData.pocEmail}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group_signup">
                                        <input
                                            type="tel"
                                            name="pocPhone"
                                            placeholder="POC Phone Number"
                                            value={formData.pocPhone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </fieldset>

                                {/* Submit Button */}
                                <div className="form-group_signup">
                                    <input type="submit" className="login_btn" value="Submit" />
                                </div>
                            </form>
                        </div>
                        <p class="link">Already have an account? <a href="login.php">Login here</a></p>
                    </section>
                </center>
            </body >
        </>
    )
}
