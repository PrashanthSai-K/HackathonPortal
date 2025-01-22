import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";
import { adminPostRequest } from "../exports";
import { useActionState } from "../../../CustomHooks";
import { toast } from "react-toastify";

export default function AddInstitution({ visible, setVisible, fetchInstitutionCall, setPasswordVisible, setPassword }) {

    const instituteDetail = {
        instituteCode: "",
        instituteName: "",
        instituteType: "",
        instituteAddress: "",
        instituteCity: "",
        instituteState: "",
        institutePincode: "",
        pocName: "",
        pocEmail: "",
        pocPhone: "",
    };

    const [formData, setFormData] = useState(instituteDetail);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async () => {
        try {
            const response = await adminPostRequest("/addInstitute", formData);
            if (response.status === 201) {
                if (response.data.password) {
                    toast.success(response.data.message || "Institute details updated successfully.");
                    setPassword(response.data.password);
                    fetchInstitutionCall();
                    setVisible(false);
                    setPasswordVisible(true);
                    return;
                }
                toast.success(response.data.message || "Institute details updated successfully.");
                setVisible(false);
                fetchInstitutionCall();
            } else {
                toast.error(response.data.message || "Failed to update institute details.");
                setVisible(false);
                return;
            }
        } catch (error) {
            console.error("Error updating institute details:", error);
            toast.error(error.response.data.error || error.response.data.errors[0].message);
        }
    };


    const [addInstitute, isLoading] = useActionState(handleSubmit);


    return (
        <>
            <Sidebar
                visible={visible}
                position="right"
                className="w-10/12 md:w-1/3 text-lg pt-2"
                header={"Add Institute Details"}
                onHide={() => setVisible(false)}
            >
                <form onSubmit={addInstitute} className="w-full px-6 mt-5">
                    {/* Institute Code */}
                    <div className="mb-4">
                        <label
                            htmlFor="institution_code"
                            className="block text-sm font-medium text-gray-600"
                        >
                            <i className="fas fa-university text-gray-500 mr-2"></i>
                            Institute Code
                        </label>
                        <input
                            id="instituteCode"
                            type="text"
                            name="instituteCode"
                            value={formData.instituteCode}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>

                    {/* Institute Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="institution_name"
                            className="block text-sm font-medium text-gray-600"
                        >
                            <i className="fas fa-building text-gray-500 mr-2"></i>
                            Institute Name
                        </label>
                        <input
                            id="instituteName"
                            type="text"
                            name="instituteName"
                            value={formData.instituteName}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>

                    {/* Institute Address */}
                    <div className="mb-4">
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-600"
                        >
                            <i className="fas fa-map-marker-alt text-gray-500 mr-2"></i>
                            Institute Address
                        </label>
                        <textarea
                            id="instituteAddress"
                            type="text"
                            name="instituteAddress"
                            value={formData.instituteAddress}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>

                    {/* City */}
                    <div className="mb-4">
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-600"
                        >
                            <i className="fas fa-city text-gray-500 mr-2"></i>Institute City
                        </label>
                        <input
                            id="instituteCity"
                            type="text"
                            name="instituteCity"
                            value={formData.instituteCity}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>

                    {/* State and Pincode */}
                    {/* <div className="flex mb-4"> */}
                    <div className="mb-4">
                        <label
                            htmlFor="state"
                            className="block text-sm font-medium text-gray-600"
                        >
                            <i className="fas fa-map text-gray-500 mr-2"></i>Institute State
                        </label>
                        <input
                            id="instituteState"
                            type="text"
                            name="instituteState"
                            value={formData.instituteState}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="pincode"
                            className="block text-sm font-medium text-gray-600"
                        >
                            <i className="fas fa-envelope text-gray-500 mr-2"></i>
                            Pincode
                        </label>
                        <input
                            id="institutePincode"
                            type="number"
                            name="institutePincode"
                            value={formData.institutePincode}
                            onChange={handleChange}
                            // pattern="\d{6}"
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>
                    {/* </div> */}

                    {/* Institute Type */}
                    <div className="mb-4">
                        <label
                            htmlFor="institution_type"
                            className="block text-sm font-medium text-gray-600"
                        >
                            <i className="fas fa-list text-gray-500 mr-2"></i>Institute Type
                        </label>
                        <select
                            id="instituteType"
                            name="instituteType"
                            value={formData.instituteType}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                        >
                            <option value="" disabled>
                                Select Institute Type
                            </option>
                            <option value="Engineering">Engineering</option>
                            <option value="Arts">Arts</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="institution_type"
                            className="block text-sm font-medium text-gray-600"
                        >
                            <i className="fas fa-list text-gray-500 mr-2"></i>POC Name
                        </label>
                        <input
                            id="pocName"
                            type="text"
                            name="pocName"
                            value={formData.pocName}
                            onChange={handleChange}
                            // pattern="\d{6}"
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="institution_type"
                            className="block text-sm font-medium text-gray-600"
                        >
                            <i className="fas fa-list text-gray-500 mr-2"></i>POC Name
                        </label>
                        <input
                            id="pocEmail"
                            type="text"
                            name="pocEmail"
                            value={formData.pocEmail}
                            onChange={handleChange}
                            // pattern="\d{6}"
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="institution_type"
                            className="block text-sm font-medium text-gray-600"
                        >
                            <i className="fas fa-list text-gray-500 mr-2"></i>POC Name
                        </label>
                        <input
                            id="pocPhone"
                            type="text"
                            name="pocPhone"
                            value={formData.pocPhone}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-4 mb-3">
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
                            disabled={isLoading}
                        >
                            {!isLoading ? (
                                "Create"
                            ) : (
                                <i
                                    style={{ color: "white", fontSize: "1rem" }}
                                    className="pi pi-spin pi-spinner"
                                ></i>
                            )}
                        </button>
                    </div>
                </form>
            </Sidebar>
        </>
    );
}
