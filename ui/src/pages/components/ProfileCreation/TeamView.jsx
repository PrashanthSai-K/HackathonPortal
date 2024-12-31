import { Sidebar } from "primereact/sidebar";
import React, { useEffect, useRef } from "react";
function TextareaAutoResize({ value, readOnly }) {
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust to content
    }
  };

  useEffect(() => {
    adjustHeight(); // Adjust height for initial value
  }, [value]); // Run effect when `value` changes

  return (
    <textarea
      ref={textareaRef}
      value={value}
      readOnly={readOnly}
      className="mt-1 w-full px-3 border border-gray-300 rounded-md text-gray-800 resize-none overflow-hidden"
      onInput={adjustHeight} 
    />
  );
}

export default function TeamView({ setVisibleView, visibleView, viewData }) {
  return (
    <div>
      <Sidebar
        visible={visibleView}
        position="right"
        className="w-1/3"
        onHide={() => setVisibleView(false)}
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-700">Team Creation</h2>
          <form className="w-full px-6">
            <div className="mb-4">
              <label
                htmlFor="ps_id"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-building text-gray-500 mr-2"></i>Ps ID
              </label>
              <input
                id="ps_id"
                name="ps_id"
                type="text"
                required
                value={viewData.ps_id}
                readOnly
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="team_name"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-user-tie text-gray-500 mr-2"></i> Team Name
              </label>
              <input
                id="team_name"
                name="team_name"
                type="text"
                required
                readOnly
                value={viewData.team_name}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>

            {/* Leader Email */}
            <div className="mb-4">
              <label
                htmlFor="leader_email"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-envelope text-gray-500 mr-2"></i>Leader
                Email
              </label>
              <input
                id="leader_email"
                name="leader_email"
                type="email"
                readOnly
                required
                value={viewData.leader_email}
                // onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>

            {/* <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-envelope text-gray-500 mr-2"></i>Leader
                Email
              </label>
              <textarea
                id="description"
                name="description"
                type="email"
                readOnly
                required
                value={viewData.description}
                // onChange={handleChange}
                className="mt-1 h-auto w-full px-3 border border-gray-300 rounded-md text-gray-800"
              />
            </div> */}

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                <i className="fas fa-envelope text-gray-500 mr-2"></i>Leader
                Email
              </label>
              <TextareaAutoResize value={viewData.description} readOnly />
            </div>

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
                readOnly
                value={viewData.doc_link}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
              />
            </div>
          </form>
        </div>
      </Sidebar>
    </div>
  );
}
