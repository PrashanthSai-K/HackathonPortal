import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";

export default function TeamView({ visible, setVisible, modalData }) {
    
  return (
    <Dialog
      header="Team Details"
      headerClassName="p-2 w-full"
      visible={visible}
      draggable={false}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
      className="p-3 md:p-0 w-7/12 flex items-center justify-center relative -z-50"
      breakpoints={{ "960px": "75vw", "641px": "100vw" }}
    >
      <center className="pb-4">
        <DataTable
          value={modalData}
          stripedRows
          className="border rounded-lg overflow-hidden w-11/12 max-h-full"
        >
          <Column
            field="key"
            headerStyle={{ display: "none" }}
            align={"left"}
            style={{ height: "3rem" }}
            bodyStyle={{ width: "20%" }}
            headerClassName="border-b p-1 bg-[#7f58f3] text-sm"
            className="border-b p-1 text-start pl-3 text-sm"
          ></Column>
          <Column
            field="value"
            align={"left"}
            body={(rowData) =>
              rowData.key == "Doc Link" ? (
                <a
                  href={rowData.value}
                  className="text-blue-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rowData.value}
                </a>
              ) : (
                rowData.value
              )
            }
            bodyStyle={{ height: "3rem", width: "80%" }}
            headerClassName="border-b text-end font-medium bg-[#7f58f3] text-sm"
            className="border text-justify pl-3 text-sm "
          ></Column>
        </DataTable>
      </center>
    </Dialog>
  );
}
