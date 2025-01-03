import { Dropdown } from 'primereact/dropdown';
import { Sidebar } from 'primereact/sidebar'
import React, { useState } from 'react'
import { adminPostRequest } from '../exports';
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';


export default function UploadPopup({ visible, setVisible, fetchPs }) {

    const [file, setFile] = useState(null);
    const [fileData, setFileData] = useState(null);
    const [fileSize, setFileSize] = useState(null);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const allowedExtensions = /(\.xls|\.xlsx)$/i;
        const maxSize = 10 * 1024 * 1024; // 10 MB limit

        if (selectedFile && allowedExtensions.test(selectedFile.name) && selectedFile.size < maxSize) {
            setFileSize(selectedFile.size);
            setFile(selectedFile);
            setError("");

            const reader = new FileReader();
            reader.onload = (event) => {
                const data = event.target.result;
                const workbook = XLSX.read(data, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                console.log(sheetData); // Display the parsed data
                setFileData(sheetData);
            };
            reader.readAsBinaryString(selectedFile);
        } else {
            setFile(null);
            setError("Please upload a valid Excel file (.xls or .xlsx).");
            toast.error("Please upload a valid Excel file (.xls or .xlsx).")
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Select proper file.")
        }
        try {
            const response = await adminPostRequest("/ps/upload", fileData);
            toast.success("Uploaded successfully!!");
            setVisible(false);
            fetchPs();
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.error || error.response.data.errors[0].message)
        }
    };

    const handleClear = () => {
        setFile(null);
        setError("");
    };

    const formatFileSize = (size) => {
        if (size < 1024) return `${size} bytes`;
        else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
        else if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
        else return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    };

    return (
        <>
            <Sidebar position='top' visible={visible} className={`w-11/12 md:w-6/12 ${file ? "h-3/5 md:h-4/6" : "h-3/6"} p-3 rounded-lg mt-5`} onHide={() => { setVisible(false) }}>
                <div className=' flex flex-col items-center justify-between'>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Upload Problems</h2>

                    <div className="w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
                        <input
                            type="file"
                            className="absolute inset-0 w-full h-full opacity-0 z-50"
                            onChange={handleFileChange}
                            accept=".xls,.xlsx"
                        />
                        <div className="text-center">
                            <img
                                className="mx-auto h-16 w-16"
                                src="https://www.svgrepo.com/show/354931/document-csv.svg"
                                alt="Upload"
                            />

                            <h3 className="mt-2 text-sm font-medium text-gray-900">
                                <label htmlFor="file-upload" className="relative cursor-pointer">
                                    <span>Drag and drop</span>
                                    <span className="text-indigo-600"> or browse</span>
                                    <span> to upload</span>
                                </label>
                            </h3>
                            <p className="mt-1 text-xs text-gray-500">Excel files (.xls, .xlsx) up to 10MB</p>
                        </div>

                    </div>

                    {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

                    {file && (
                        <div className="mt-4">
                            <div className="text-center">
                                <p className="text-sm text-gray-700">File selected: {file.name} ({formatFileSize(file.size)})</p>
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </div>
                    )}
                </div>

            </Sidebar>
        </>
    )
}
