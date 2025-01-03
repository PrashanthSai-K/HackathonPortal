import axios from "axios";
import React, { useEffect, useState } from "react";
import { userGetRequest } from "../exports";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useAuth } from "../../../AuthContext";
import { useNavigate } from "react-router";
import EditProfile from "./EditProfile";

export default function ProfileDetails() {
  const emptyData = {
    institution_code: "",
    institution_name: "",
    institution_type: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    poc_name: "",
    poc_email: "",
    poc_number: "",
  };
  const [instituteDetails, setInstituteDetails] = useState(emptyData);
  const [visible, setVisible] = useState(false);
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  const getInstituteDetails = async () => {
    try {
      const response = await userGetRequest("/getInstituteDetails");
      setInstituteDetails(response.data);
    } catch (e) {
      console.log("Failed to get institute details", e);
    }
  };

  useEffect(() => {
    if (loggedIn) getInstituteDetails();
    else navigate("/login");
  }, []);

  return (
    <>
      <div className="flex items-center lg:w-8/12 w-10/12 justify-center">
        <form className="w-full relative">
          {/* Institute Details */}
          <fieldset className="p-4 border-2 rounded-lg flex flex-col shadow-lg">
            <legend className="text-lg font-semibold text-gray-700 mb-2">
              Institute Details
            </legend>
            <div className="flex md:flex-row w-full flex-col">
              {/* Institute Code */}
              <div className="w-full">
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="institution_code"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-university text-gray-500"></i>{" "}
                    Institute Code
                  </label>
                  <input
                    id="institution_code"
                    type="text"
                    value={instituteDetails.institution_code}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* Institute Name */}
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="institution_name"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-building text-gray-500"></i> Institute
                    Name
                  </label>
                  <input
                    id="institution_name"
                    type="text"
                    value={instituteDetails.institution_name}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* Institute Type */}
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="institution_type"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-tags text-gray-500"></i> Institute Type
                  </label>
                  <input
                    id="institution_type"
                    type="text"
                    value={instituteDetails.institution_type}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* Institute Address */}
                <div className="p-3 w-full">
                  <label
                    htmlFor="address"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-map-marker-alt text-gray-500"></i>{" "}
                    Institute Address
                  </label>
                  <input
                    id="address"
                    value={`${instituteDetails.address}, ${instituteDetails.city}, ${instituteDetails.state}`}
                    readOnly
                    rows="2"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 resize-none"
                  />
                </div>
              </div>

              {/* Institute Pincode */}
              <div className="w-full">
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="pincode"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-envelope text-gray-500"></i> Institute
                    Pincode
                  </label>
                  <input
                    id="pincode"
                    type="text"
                    value={instituteDetails.pincode}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* POC Name */}
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="poc_name"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-user text-gray-500"></i> POC Name
                  </label>
                  <input
                    id="poc_name"
                    type="text"
                    value={instituteDetails.poc_name}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* POC Email */}
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="poc_email"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-envelope text-gray-500"></i> POC Email
                  </label>
                  <input
                    id="poc_email"
                    type="email"
                    value={instituteDetails.poc_email}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* POC Number */}
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="poc_number"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-phone text-gray-500"></i> POC Number
                  </label>
                  <input
                    id="poc_number"
                    type="text"
                    value={instituteDetails.poc_number}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <div
            onClick={() => setVisible(true)}
            className="absolute z-50 top-8 right-5"
          >
            <i className="fas fa-edit text-gray-600 cursor-pointer"></i>
          </div>
        </form>
        <EditProfile
          visible={visible}
          setVisible={setVisible}
          instituteDetail={instituteDetails}
          getInstituteDetails = {getInstituteDetails}
        />
      </div>
    </>
  );
}
