import { Sidebar } from "primereact/sidebar";
import React, { useEffect, useState } from "react";
import { userGetRequest, userPostRequest } from "../exports";
import { Dropdown } from "primereact/dropdown";
import { useAuth } from "../../../AuthContext";
import { useActionState } from "../../../CustomHooks";
import { toast } from "react-toastify";

export default function TeamCreation({
  visibleLeft,
  setVisibleLeft,
  getTeamDetails,
}) {
  const emptyData = {
    teamName: "",
    participants: "",
    leaderName: "",
    leaderEmail: "",
    psId: "",
    teamMembers: [],
    docLink: "",
  };

  const { user } = useAuth();

  const [teamDetails, setTeamDetails] = useState(emptyData);
  const [ps, setPs] = useState([]);

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
        psId: teamDetails.psId.ps_id,
        institutionId: user.institutionId,
      });
      if (response.status === 201) {
        toast.success(response.data.message);
        setTeamDetails(emptyData);
        getTeamDetails();
        setVisibleLeft(false);
      }
    } catch (error) {
      console.log("Error adding team details", error);
      toast.error(
        error.response.data.error || error.response.data.errors[0].message
      );
    }
  };

  const [formAction, isLoading] = useActionState(handleSubmit);

  const selectTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.ps_id}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };

  const optionTemplate = (option) => {
    return (
      <div className="flex align-items-center max-w-28 py-2 px-4">
        <div>
          {option.ps_id} - {option.title}
        </div>
      </div>
    );
  };

  useEffect(() => {
    getPsDetails();
  }, []);

  return (
    <div>
      <Sidebar
        visible={visibleLeft}
        position="right"
        className="w-11/12 md:w-1/3"
        onHide={() => setVisibleLeft(false)}
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-700">Team Creation</h2>
          <form onSubmit={formAction} className="w-full px-6">
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
                value={user.institutionCode}
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
                required
                value={teamDetails.teamName}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>

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
                required
                value={teamDetails.leaderName}
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
                <i className="fas fa-users text-gray-500 mr-2"></i> Number Of
                Participants <span className="text-xs"> (Exclude Leader) </span>
              </label>
              <input
                id="participants"
                name="participants"
                type="number"
                required
                value={teamDetails.participants}
                onChange={(e) => {
                  handleChange(e);
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
                  required
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                />
              </div>
            ))}

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
                required
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
                optionLabel="title"
                filter
                filterBy="title,ps_id"
                required
                valueTemplate={selectTemplate}
                itemTemplate={optionTemplate}
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
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                />
              </div>
            )}

            <div className="mb-1">
              <label
                htmlFor="docLink"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-link  text-gray-500 mr-2"></i>Document Link
                <span className="text-xs"> (only drive Link) </span>
              </label>
              <input
                id="docLink"
                name="docLink"
                type="text"
                required
                value={teamDetails.docLink}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>
            <div className="text-xs text-red-500">
              Note: Team details cannot be edited once submitted.
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
                disabled={isLoading}
              >
                {!isLoading ? (
                  "Create Team"
                ) : (
                  <i
                    style={{ color: "white", fontSize: "1rem" }}
                    className="pi pi-spin pi-spinner"
                  ></i>
                )}
              </button>
            </div>
          </form>
        </div>
      </Sidebar>
    </div>
  );
}
