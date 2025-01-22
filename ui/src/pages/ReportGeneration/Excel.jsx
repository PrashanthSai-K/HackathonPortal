import * as XLSX from "xlsx";

export const ExportToExcel = (requiredData) => {
    const dataForExcel = [];
    const copy = requiredData;
    const keysAndValuesArray = [];
    if (copy.length > 0) {
        const firstObject = copy[0];
        const keys = Object.keys(firstObject);
        keysAndValuesArray.push([...keys]);
        keysAndValuesArray.push([...keys.map((key) => firstObject[key])]);
        dataForExcel.push(...keysAndValuesArray);
    }

    dataForExcel.push(
        ...requiredData.map((item) => {
            const rowData = [];
            for (const key in item) {
                rowData.push(item[key]);
            }
            return rowData;
        })
    );

    const ws = XLSX.utils.aoa_to_sheet(dataForExcel);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); // Change the sheet name as needed

    // Save the Excel file
    XLSX.writeFile(wb, "my_report.xlsx");
};





