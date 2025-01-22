import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { userPutRequest } from "../exports";
import { toast } from "react-toastify";
import { useActionState } from "../../../CustomHooks";

export default function VideoLinkPopup({ visible, setVisible, teamDetails,getTeamDetails }) {
  const [videoLink, setVideoLink] = useState("");

  const handleSubmit = async () => {
    if(videoLink.trim() == ""){
      alert("Please Upload the Link")
      return;
    }
    try {
      const response = await userPutRequest("/videoLink", { team_id: teamDetails.team_id, institution_id: teamDetails.team_institution, video_link: videoLink });
      if (response.status === 201) {
        toast.success(response.data.message || "Video Link Uploaded successfully.");
        setVideoLink("")
        getTeamDetails();
        setVisible(false)
      } else {
        toast.error(response.data.message || "Failed to Upload Video Link.");
        setVideoLink("")
        setVisible(false);
      }
    } catch (error) {
      console.error("Error Uploading Video Link :", error);
      toast.error("An unexpected error occurred.");
    }
  };

  const [uploadVideoLink, isLoading] = useActionState(handleSubmit, true);

  return (
    <Sidebar
      position="top"
      header="Video Link Upload"
      headerClassName="w-full"
      visible={visible}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      className="p-3 md:p-2 lg:w-4/12 md:w-8/12 rounded-md w-11/12 h-auto bg-white flex items-center justify-between relative top-5 -z-50"
      breakpoints={{ "960px": "75vw", "641px": "100vw" }}
    >
      <div className="w-full bg-white p-4">
        <label htmlFor="videoLink" className="block text-gray-700 mb-2">
          Enter Video Link:
        </label>
        <input
          type="text"
          id="videoLink"
          autoComplete="off"
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          placeholder="https://example.com/video"
          className="w-full text-sm p-2 border rounded"
        />
        <p className="mt-2 text-xs text-red-600">
          Note: Once submitted, the video link cannot be changed.
        </p>
        <button
          onClick={uploadVideoLink}
          className="mt-4 p-2 w-full text-white rounded bg-blue-500"
        disabled={isLoading}
        >
          {!isLoading ? (
            "Submit"
          ) : (
            <i
              style={{ color: "white", fontSize: "1rem" }}
              className="pi pi-spin pi-spinner"
            ></i>
          )}
        </button>
      </div>
    </Sidebar>
  );
}
