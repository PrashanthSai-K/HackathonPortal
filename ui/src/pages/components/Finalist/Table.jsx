import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import { adminGetRequest, adminPostRequest } from "../exports";
import { toast } from "react-toastify";
import PopupModal from "./PopupModal";

export default function Table() {
  const [finalist, setFinalist] = useState([]);
  const [globalFilter, setGlobalFilter] = useState();
  const [modalData, setModalData] = useState();
  const [visible, setVisible] = useState(false);

  const formatKey = (key) => {
    // Replace underscores with spaces and capitalize each word
    return key
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
  };

  const setModal = (rowData) => {
    const data = Object.entries(rowData)
      .slice()
      .map(([key, value]) => ({
        key: formatKey(key),
        value:
          key === "specific_key" ? ( // Replace 'specific_key' with the actual key you want to check
            <a href={value} target="_blank" rel="noopener noreferrer">
              {value}
            </a>
          ) : (
            value
          ),
      }));
    setModalData(data);
    setVisible(true);
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

  const tableLoader = () => (
    <div className="flex items-center justify-center min-h-96 h-full w-full ">
      <i
        className="pi pi-spin pi-spinner"
        style={{ color: "gray", fontSize: "2rem" }}
      ></i>
    </div>
  );

  const statusTemplate = (rowData) =>
    rowData.status === "SUBMITTED" ? (
      <div className="bg-orange-500 p-1 h-8 w-24 rounded-lg flex items-center justify-center">
        <p className="text-white text-sm">{rowData.status}</p>
      </div>
    ) : (
      <div className="bg-green-500 p-1 h-8 w-24 rounded-lg flex items-center justify-center">
        <p className="text-white text-sm">{rowData.status}</p>
      </div>
    );

  const fetchFinalist = async () => {
    try {
      const response = await adminGetRequest("/finalist");
      setFinalist(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFinalist();
  }, []);

  const selectTeam = async (data) => {
    try {
      if (!window.confirm("Du you want to move participant to final ?")) {
        return;
      }
      const response = await adminPostRequest("/finalist/select", {
        ps_id: data.ps_id,
        team_id: data.team_id,
      });
      toast.success("Selected Sucessfully");
      fetchFinalist();
    } catch (error) {
      console.log(error);
      toast.error("Some Error");
    }
  };

  const unselectTeam = async (data) => {
    try {
      if (!window.confirm("Du you want to remove participant from final ?")) {
        return;
      }
      const response = await adminPostRequest("/finalist/unselect", {
        ps_id: data.ps_id,
        team_id: data.team_id,
      });
      toast.success("Removed Sucessfully");
      fetchFinalist();
    } catch (error) {
      console.log(error);
      toast.error("Some Error");
    }
  };

  return (
    <>
      <div className="card w-full pt-3 flex items-center relative -z-50 justify-center px-4 md:px-8  ">
        <DataTable sortIcon={customSortIcon} value={finalist} emptyMessage={tableLoader} paginator={finalist.length > 5} rows={5} rowsPerPageOptions={[5, 10, 25, 50]} globalFilter={globalFilter} paginatorClassName="text-black" stripedRows className="border rounded-lg overflow-hidden w-11/12 min-h-96 max-w-screen-lg" >
          <Column field="ps_id" header="Code" align={"left"} style={{ height: "3rem" }} bodyStyle={{ width: "6rem" }} headerClassName="border-b p-1 bg-violet-900 text-sm " className="border-b-2 border-r-2 p-1 text-center text-sm" ></Column>
          <Column field="title" sortable header="Title" align={"left"} bodyStyle={{ height: "3rem", width: "18rem" }} headerClassName="border-b text-end font-medium bg-violet-900 text-sm" className="border-b-2 p-1 border-r-2 text-sm text-justify " ></Column>
          <Column field="team_name" sortable header="Team Name" align={"left"} bodyStyle={{ height: "3rem", width: "8rem" }} headerClassName="border-b text-end font-medium bg-violet-900 text-sm" className="p-1 border-b-2 border-r-2 text-sm text-center"  ></Column>
          <Column field="leader_name" header="Leader Name" sortable align={"center"} bodyStyle={{ height: "3rem", width: "10rem" }} headerClassName="text-white border-b text-end font-medium bg-violet-900 text-sm" className="border-b-2 border-r-2 p-1 text-sm"  ></Column>
          <Column field="number_of_participants" sortable header="Participants" align={"center"} bodyStyle={{ height: "5rem" }} headerClassName="border-b text-end font-medium bg-violet-900 text-sm" className="border-b-2 border-r-2 p-1 text-sm" ></Column>
          <Column field="status" header="Status" body={statusTemplate} align={"center"} bodyStyle={{ height: "5rem" }} headerClassName="border-b text-end font-medium bg-violet-900 text-sm" className="border-b-2 border-r-2 p-1 text-sm" ></Column>

          <Column field="" header="Action" align={"center"} bodyStyle={{ width: "7rem" }} headerClassName=" border-b text-end font-medium bg-violet-900 text-sm" className="border-b-2  p-1 text-center text-sm"
            body={(rowData) => (
              <div className="flex  gap-1">
                <button
                  onClick={() => setModal(rowData)}
                  className="px-2 py-1 bg-violet-500 text-white rounded"
                >
                  View
                </button>
                {rowData.status === "SUBMITTED" && (
                  <button
                    onClick={() => selectTeam(rowData)}
                    className="px-2 py-1 bg-violet-950 text-white rounded"
                  >
                    Select
                  </button>
                )}
                {rowData.status === "APPROVED" && (
                  <button
                    onClick={() => unselectTeam(rowData)}
                    className="px-2 py-1 bg-violet-950 text-white rounded"
                  >
                    Unselect
                  </button>
                )}
              </div>
            )}
          ></Column>
        </DataTable>
        <PopupModal visible={visible} setVisible={setVisible} modalData={modalData} />
      </div>
    </>
  );
}
