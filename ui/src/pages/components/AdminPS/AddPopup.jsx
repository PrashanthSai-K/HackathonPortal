import { Dropdown } from 'primereact/dropdown';
import { Sidebar } from 'primereact/sidebar'
import React, { useState } from 'react'
import { adminPostRequest } from '../exports';
import { toast } from 'react-toastify';

export default function AddPopup({ visible, setVisible }) {

   cc
    return (
        <>
            <Sidebar position='right' visible={visible} className='w-11/12 md:w-6/12 ' onHide={() => setVisible(false)}>
                <div className=' flex items-center justify-between'>
                    <h2 className="text-xl font-semibold text-gray-700">PS Creation</h2>

                </div>
                <div className="flex flex-col items-center gap-4">
                    <form onSubmit={handleSubmit} className="w-full px-6">

                        <div className="mb-4">
                            <label
                                htmlFor="psId"
                                className="block text-sm font-medium text-gray-600"
                            >
                                <i className="fas fa-hashtag text-gray-500 mr-2"></i>
                                Problem Statement Id
                            </label>
                            <input
                                id="psId"
                                name='psId'
                                type="text"
                                value={ps.psId}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-600"
                            >
                                <i className="fas fa-tags text-gray-500 mr-2"></i>Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                type="text"
                                required
                                value={ps.category}
                                onChange={handleChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                            >
                                <option value="" disabled selected hidden>Select category</option>
                                <option value="software">Software</option>
                                <option value="hardware">Hardware</option>

                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-600"
                            >
                                <i className="fas fa-pencil-alt text-gray-500 mr-2"></i>Title
                            </label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                required
                                value={ps.title}
                                onChange={handleChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                            />
                        </div>

                        {/* Leader Email */}
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-600"
                            >
                                <i className="fas fa-align-left text-gray-500 mr-2"></i>Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                type="text"
                                required
                                value={ps.description}
                                onChange={handleChange}
                                className="mt-1 w-full h-24 px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="organization"
                                className="block text-sm font-medium text-gray-600"
                            >
                                <i className="fas fa-building  text-gray-500 mr-2"></i>Organization
                            </label>
                            <input
                                id="organization"
                                name="organization"
                                type="text"
                                required
                                value={ps.organization}
                                onChange={handleChange}
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
                            />
                        </div>

                        <div className="flex justify-center mt-3 gap-3">
                            {!isLoading ?
                                <button
                                    type="submit"
                                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
                                >
                                    Create
                                </button>
                                :
                                <div className='flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700'>
                                    <i className="pi pi-spin pi-spinner" style={{ color: "white", fontSize: '2rem' }}></i>
                                </div>
                            }
                            {/* <div className=' flex  items-center justify-center gap-2 px-2 py-1 rounded-lg text-white bg-green-500 cursor-pointer hover:bg-green-600'>
                                <p className=' text-white'>Upload</p>
                                <i className='pi pi-upload text-white'></i>
                            </div> */}
                        </div>
                    </form>
                </div>
            </Sidebar>
        </>
    )
}
