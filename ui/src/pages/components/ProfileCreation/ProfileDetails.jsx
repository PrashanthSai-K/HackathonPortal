import axios from "axios";
import React, { useEffect, useState } from "react";
import { userGetRequest, userPostRequest } from "../exports";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ProfileDetails() {
  // const [user, setUser] = useState();
  const [instituteDetails, setInstituteDetails] = useState([]);
  const [checkUserLogin, setCheckUserLogin] = useState(
    localStorage.getItem("token") ? true : false
  );

  const getUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await userGetRequest("/getUser", token);
      // setUser(response.data);
      getUserDetails(response.data);
    } catch (e) {
      console.log("Failed to get user", e);
    }
  };

  // console.log(user.username);

  const getUserDetails = async (user) => {
    try {
      const response = await userPostRequest("/getInstituteDetails", {
        username: user.username,
      });
      setInstituteDetails(response.data);
    } catch (e) {
      console.log("Failed to get institute details", e);
    }
  };

  useEffect(() => {
    if (checkUserLogin === true) {
      getUser();
    }
  }, []);

  console.log("instituteDetails", instituteDetails);

  return (
    <>
      <div className="flex items-center lg:w-7/12 w-10/12 justify-center">
        <form className="w-full">
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
                    htmlFor="instituteCode"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-university text-gray-500"></i>{" "}
                    Institute Code
                  </label>
                  <input
                    id="instituteCode"
                    type="text"
                    value={instituteDetails.institution_code}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* Institute Name */}
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="instituteName"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-building text-gray-500"></i> Institute
                    Name
                  </label>
                  <input
                    id="instituteName"
                    type="text"
                    value={instituteDetails.institution_name}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* Institute Type */}
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="instituteType"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-tags text-gray-500"></i> Institute Type
                  </label>
                  <input
                    id="instituteType"
                    type="text"
                    value={instituteDetails.institution_type}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* Institute Address */}
                <div className="p-3 w-full">
                  <label
                    htmlFor="instituteAddress"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-map-marker-alt text-gray-500"></i>{" "}
                    Institute Address
                  </label>
                  <input
                    id="instituteAddress"
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
                    htmlFor="institutePincode"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-envelope text-gray-500"></i> Institute
                    Pincode
                  </label>
                  <input
                    id="institutePincode"
                    type="text"
                    value={instituteDetails.pincode}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* POC Name */}
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="pocName"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-user text-gray-500"></i> POC Name
                  </label>
                  <input
                    id="pocName"
                    type="text"
                    value={instituteDetails.poc_name}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* POC Email */}
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="pocEmail"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-envelope text-gray-500"></i> POC Email
                  </label>
                  <input
                    id="pocEmail"
                    type="email"
                    value={instituteDetails.poc_email}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>

                {/* POC Number */}
                <div className="p-3 w-full md:w-1/2">
                  <label
                    htmlFor="pocNumber"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <i className="fas fa-phone text-gray-500"></i> POC Number
                  </label>
                  <input
                    id="pocNumber"
                    type="text"
                    value={instituteDetails.poc_number}
                    readOnly
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
