import React from "react";
import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { userGetRequest } from "../exports";
import TeamCreation from "./TeamCreation";
import TeamView from "./TeamView";
export default function TeamDetails() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleView, setVisibleView] = useState(false);
  const [teamDetails, setTeamDetails] = useState([]);
  const [viewData, setViewData] = useState([]);

  const getTeamDetails = async () => {
    try {
      console.log("called");
      
      const response = await userGetRequest("/getTeamDetails");
      setTeamDetails(response.data);
    } catch (e) {
      console.log("Failed to get team details", e);
    }
  };

  const customSortIcon = (options) => {
    const iconStyle = { color: "white" };
    const updownstyle = { color: "white", fontSize: "0.9rem" }; // Style for the icons

    let icon = options.sorted ? (
      options.sortOrder < 0 ? (
        <i className="pi pi-arrow-down" style={updownstyle}></i> // Down arrow
      ) : (
        <i className="pi pi-arrow-up" style={updownstyle}></i> // Up arrow
      )
    ) : (
      <i
        className="pi pi-arrow-right-arrow-left rotate-90 flex items-center justify-center"
        style={iconStyle}
      ></i> // Default sort icon
    );

    return icon;
  };

  console.log({"teamDetails" : teamDetails});
  

  useEffect(() => {
    getTeamDetails();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center mb-10 mt-10">
      <div className="flex items-center justify-around w-8/12 py-2">
        {/* Name aligned to the left */}
        <div className="pb-2 font-semibold text-2xl text-[#7f58f3] text-center">
          TEAM DETAILS
        </div>

        {/* Search bar and button aligned to the right */}
        <div className="flex items-center">
          <div className="hidden border rounded-lg pr-2 bg-gray-50 md:flex items-center overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="border-t-0 border-b-0 indent-2 border-e-0 h-10 w-72 focus:outline-none focus:border-0 bg-gray-50"
            />
            <i className="pi pi-search text-gray-300"></i>
          </div>
          <button
            onClick={() => setVisibleLeft(true)}
            className="bg-violet-950 text-white ml-4 px-3 py-2 rounded-lg"
          >
            Add Team
          </button>
        </div>
      </div>

      <div className="card w-full pt-3 flex items-center justify-center px-4 md:px-8  ">
        <DataTable
          sortIcon={customSortIcon}
          value={teamDetails}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          globalFilter={globalFilter}
          paginatorClassName="text-black"
          stripedRows
          className="border rounded-lg overflow-hidden w-11/12 max-w-screen-lg"
        >
          <Column
            field="ps_id"
            header="PS Id"
            sortable
            align={"left"}
            style={{ height: "3rem" }}
            bodyStyle={{ width: "6rem" }}
            headerClassName="border-b p-1 bg-violet-950 text-sm"
            className="border-b p-1 text-center text-sm"
          ></Column>
          <Column
            field="team_name"
            sortable
            header="Team Name"
            align={"left"}
            bodyStyle={{ height: "3rem", width: "8rem" }}
            headerClassName="border-b text-end font-medium bg-violet-950 text-sm"
            className="border text-sm text-center "
          ></Column>
          <Column
            field="number_of_participants"
            header="No of Participants"
            align={"left"}
            headerClassName="text-white border-b text-end font-medium bg-violet-950 text-sm"
            className="border p-1 text-sm "
          ></Column>
          <Column
            field="leader_name"
            header="Leader Name"
            align={"center"}
            bodyStyle={{ height: "5rem" }}
            headerClassName="border-b text-end font-medium bg-violet-950 text-sm"
            className="border p-1 text-justify text-sm"
          ></Column>
          <Column
            field="leader_email"
            header="Leader Email"
            align={"center"}
            bodyStyle={{ height: "5rem" }}
            headerClassName="border-b text-end font-medium bg-violet-950 text-sm"
            className="border p-1 text-justify text-sm"
          ></Column>
          <Column
            field=" "
            header="Team Members"
            align={"center"}
            bodyStyle={{ height: "5rem" }}
            headerClassName="border-b text-end font-medium bg-violet-950 text-sm"
            className="border p-1 text-justify text-sm"
          ></Column>
          <Column
            field=""
            header="Action"
            align={"center"}
            bodyStyle={{ width: "7rem" }}
            headerClassName=" border-b text-end font-medium bg-violet-950 text-sm"
            className="border p-1 text-center text-sm"
            body={(rowData) => (
              <div className="flex  gap-1">
                <button
                  onClick={() => {
                    setVisibleView(true);
                    setViewData(rowData);
                  }}
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                  View
                </button>
              </div>
            )}
          ></Column>
        </DataTable>
        <TeamCreation
          visibleLeft={visibleLeft}
          setVisibleLeft={setVisibleLeft}
          getTeamDetails={getTeamDetails}
        />
        <TeamView viewData={viewData} setVisibleView={setVisibleView} visibleView={visibleView} />
      </div>
    </div>
  );
}
