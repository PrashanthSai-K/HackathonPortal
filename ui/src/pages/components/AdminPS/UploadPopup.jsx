import { Dropdown } from 'primereact/dropdown';
import { Sidebar } from 'primereact/sidebar'
import React, { useState } from 'react'
import { adminPostRequest } from '../exports';
import { toast } from 'react-toastify';

export default function UploadPopup({ visible, setVisible }) {

    const data = {
        psId: "",
        category: "",
        title: "",
        description: "",
        organization: ""
    }

    const [file, setFile] = useState(null);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const allowedExtensions = /(\.xls|\.xlsx)$/i;

        if (selectedFile && allowedExtensions.test(selectedFile.name)) {
            setFile(selectedFile);
            setError("");
        } else {
            setFile(null);
            setError("Please upload a valid Excel file (.xls or .xlsx).");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            alert(`Submitting file: ${file.name}`);
            // Add logic to upload the file to the server here
        }
    };

    const handleClear = () => {
        setFile(null);
        setError("");
    };

    return (
        <>
            <Sidebar position='top' visible={visible} className={`w-11/12 md:w-6/12 ${file ? "h-4/6" : "h-3/6"} p-3 rounded-lg mt-5`} onHide={() => {setVisible(false) }}>
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
                                src="https://www.svgrepo.com/show/510931/cloud-upload.svg"
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
                                <p className="text-sm text-gray-700">File selected: {file.name}</p>
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
