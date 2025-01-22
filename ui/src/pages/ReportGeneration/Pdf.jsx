import jsPDF from "jspdf";
import "jspdf-autotable";

export function ExportToPdf(requiredData) {
    const columnNames = Object.keys(requiredData[0]);
    const maxColumnsPerPage = 5; // Set the maximum number of columns per page
    const totalColumns = columnNames.length;
    const totalPages = Math.ceil(totalColumns / maxColumnsPerPage);

    const doc = new jsPDF();

    // Iterate through each page
    for (let page = 0; page < totalPages; page++) {
      // Calculate the start and end indices for the current page's columns
      const startIndex = page * maxColumnsPerPage;
      const endIndex = Math.min(startIndex + maxColumnsPerPage, totalColumns);
      const pageColumnNames = columnNames.slice(startIndex, endIndex);
      const pageTableData = requiredData.map((row) =>
        pageColumnNames.map((col) => row[col])
      );

      // Add a new page for each page, except the first one
      if (page > 0) {
        doc.addPage();
      }

      // Generate the table for the current page
      doc.autoTable({
        head: [pageColumnNames],
        body: pageTableData,
        startY: 10, // Adjust the startY position as needed
      });
    }

    doc.save("Master Table.pdf"); // Download the PDF with a specified filename
  }