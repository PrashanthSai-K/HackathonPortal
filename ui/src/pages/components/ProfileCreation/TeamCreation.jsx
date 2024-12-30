import { Sidebar } from "primereact/sidebar";
import React, { useEffect, useState } from "react";
import { userGetRequest, userPostRequest } from "../exports";
import { Dropdown } from "primereact/dropdown";
import { ToastContainer, toast } from "react-toastify";

export default function TeamCreation({ visibleLeft, setVisibleLeft }) {
  const [userData, setUserData] = useState({});
  const [teamDetails, setTeamDetails] = useState({
    teamName: "",
    participants: "",
    leaderName: "",
    leaderEmail: "",
    psId: "",
    teamMembers: [],
  });

  const [ps, setPs] = useState([]);

  const getUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await userGetRequest("/getUser", token);
      setUserData(response.data);
    } catch (e) {
      console.log("Failed to get user", e);
    }
  };

  const getPsDetails = async () => {
    try {
      const response = await userGetRequest("/ps");
      setPs(response.data.data);
    } catch (e) {
      console.log("Failed to get Problem Statement Details", e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleMemberChange = (index, value) => {
    const updatedMembers = [...teamDetails.teamMembers];
    updatedMembers[index] = value;
    setTeamDetails((prevDetails) => ({
      ...prevDetails,
      teamMembers: updatedMembers,
    }));
  };

  const handleSubmit = async () => {
    const teamMembersString = teamDetails.teamMembers.join(", ");
    try {
      const response = await userPostRequest("/addTeamDetails", {
        ...teamDetails,
        teamMembers: teamMembersString,
        psId : teamDetails.psId.ps_id,
        institutionCode : userData.institutionCode
      }); 
      if(response.status === 201){
        toast.success("Team Added Successfully");
      }
    } catch (error) {
      console.log("Error adding team details");
    }
  };

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.ps_id}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center max-w-28 py-2 px-4">
        <div>
          {option.ps_id} - {option.title}
        </div>
      </div>
    );
  };

  // console.log(ps);

  useEffect(() => {
    getUser();
    getPsDetails();
  }, []);

  return (
    <div>
      <ToastContainer />
      <Sidebar
        visible={visibleLeft}
        position="right"
        className="w-1/3"
        onHide={() => setVisibleLeft(false)}
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-700">Team Creation</h2>
          <div className="w-full px-6">
            {/* Institute Code */}
            <div className="mb-4">
              <label
                htmlFor="instituteCode"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-university text-gray-500 mr-2"></i>
                Institute Id
              </label>
              <input
                id="instituteCode"
                type="text"
                value={userData.institutionCode || ""}
                disabled
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>

            {/* Team Name */}
            <div className="mb-4">
              <label
                htmlFor="teamName"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-building text-gray-500 mr-2"></i>Team Name
              </label>
              <input
                id="teamName"
                name="teamName"
                type="text"
                value={teamDetails.teamName}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>

            {/* Number of Participants */}
            <div className="mb-4">
              <label
                htmlFor="participants"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-users text-gray-500 mr-2"></i>Number Of
                Participants
              </label>
              <input
                id="participants"
                name="participants"
                type="number"
                value={teamDetails.participants}
                onChange={(e) => {
                  handleChange(e);
                  // Adjust the teamMembers array size
                  const participantsCount = parseInt(e.target.value, 10) || 0;
                  setTeamDetails((prevDetails) => ({
                    ...prevDetails,
                    teamMembers: Array(participantsCount).fill(""),
                  }));
                }}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>

            {/* Dynamic Team Members Fields */}
            {teamDetails.teamMembers.map((member, index) => (
              <div key={index} className="mb-4">
                <label
                  htmlFor={`teamMember${index}`}
                  className="block text-sm font-medium text-gray-600"
                >
                  <i className="fas fa-user text-gray-500 mr-2"></i>Team Member{" "}
                  {index + 1}
                </label>
                <input
                  id={`teamMember${index}`}
                  type="text"
                  value={member}
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                />
              </div>
            ))}

            {/* Leader Name */}
            <div className="mb-4">
              <label
                htmlFor="leaderName"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-user-tie text-gray-500 mr-2"></i>Leader
                Name
              </label>
              <input
                id="leaderName"
                name="leaderName"
                type="text"
                value={teamDetails.leaderName}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>

            {/* Leader Email */}
            <div className="mb-4">
              <label
                htmlFor="leaderEmail"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-envelope text-gray-500 mr-2"></i>Leader
                Email
              </label>
              <input
                id="leaderEmail"
                name="leaderEmail"
                type="email"
                value={teamDetails.leaderEmail}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>

            {/* Problem Statement Id */}
            {/* Problem Statement Id */}
            <div className="mb-4">
              <label
                htmlFor="problemId"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-lightbulb text-gray-500 mr-2"></i>Problem
                Statement Id
              </label>
              <Dropdown
                id="problemId"
                name="psId"
                value={teamDetails.psId}
                onChange={(e) =>
                  setTeamDetails({
                    ...teamDetails,
                    [e.target.name]: e.target.value,
                  })
                }
                options={ps}
                optionLabel="name" // Assuming `ps` array objects have a `name` field for the dropdown label
                filter
                valueTemplate={selectedCountryTemplate}
                itemTemplate={countryOptionTemplate}
                className="mt-1 w-full px-3 py-3 border border-gray-300 rounded-md text-gray-800"
              />
            </div>

            {/* Display Problem Statement Title in a Textarea */}
            {teamDetails.psId && (
              <div className="mb-4">
                <label
                  htmlFor="problemTitle"
                  className="block text-sm font-medium text-gray-600"
                >
                  <i className="fas fa-pencil-alt text-gray-500 mr-2"></i>
                  Problem Statement Title
                </label>
                <textarea
                  id="problemTitle"
                  value={
                    ps.find((item) => item.ps_id === teamDetails.psId.ps_id)
                      ?.title || ""
                  }
                  readOnly
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
