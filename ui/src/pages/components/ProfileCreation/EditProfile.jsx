import { Sidebar } from "primereact/sidebar";
import React, { useEffect, useState } from "react";
import { userPutRequest } from "../exports";
import { useActionState } from "../../../CustomHooks";
import { toast } from "react-toastify";

export default function EditProfile({ visible, setVisible, instituteDetail, getInstituteDetails }) {
  const [formData, setFormData] = useState(instituteDetail);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await userPutRequest("/updateInstituteDetails", formData); // Remove extra object wrapping
      if (response.status === 201) {
        toast.success(response.data.message || "Institute details updated successfully.");
        setVisible(false);
        getInstituteDetails();
      } else {
        toast.error(response.data.message || "Failed to update institute details.");
        setVisible(false);
        return;
      }
    } catch (error) {
      console.error("Error updating institute details:", error);
      toast.error("An unexpected error occurred.");
    }
  };
  

  const [updateInstituteDetails, isLoading] = useActionState(handleSubmit);

  useEffect(() => {
    setFormData(instituteDetail);
  }, [instituteDetail]);

  return (
    <>
      <Sidebar
        visible={visible}
        position="right"
        className="w-1/3"
        onHide={() => setVisible(false)}
      >
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Edit Institute Details
        </h2>
        <form onSubmit={updateInstituteDetails} className="w-full px-6">
          {/* Institute Code */}
          <div className="mb-4">
            <label
              htmlFor="institution_code"
              className="block text-sm font-medium text-gray-600"
            >
              <i className="fas fa-university text-gray-500 mr-2"></i>
              Institute Code
            </label>
            <input
              id="institution_code"
              type="text"
              name="institution_code"
              value={formData.institution_code}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
            />
          </div>

          {/* Institute Name */}
          <div className="mb-4">
            <label
              htmlFor="institution_name"
              className="block text-sm font-medium text-gray-600"
            >
              <i className="fas fa-building text-gray-500 mr-2"></i>
              Institute Name
            </label>
            <input
              id="institution_name"
              type="text"
              name="institution_name"
              value={formData.institution_name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
            />
          </div>

          {/* Institute Address */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              <i className="fas fa-map-marker-alt text-gray-500 mr-2"></i>
              Institute Address
            </label>
            <textarea
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              <i className="fas fa-city text-gray-500 mr-2"></i>Institute City
            </label>
            <input
              id="city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
            />
          </div>

          {/* State and Pincode */}
          {/* <div className="flex mb-4"> */}
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              <i className="fas fa-map text-gray-500 mr-2"></i>Institute State
            </label>
            <input
              id="state"
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pincode"
              className="block text-sm font-medium text-gray-600"
            >
              <i className="fas fa-envelope text-gray-500 mr-2"></i>
              Pincode
            </label>
            <input
              id="pincode"
              type="number"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              // pattern="\d{6}"
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
            />
          </div>
          {/* </div> */}

          {/* Institute Type */}
          <div className="mb-4">
            <label
              htmlFor="institution_type"
              className="block text-sm font-medium text-gray-600"
            >
              <i className="fas fa-list text-gray-500 mr-2"></i>Institute Type
            </label>
            <select
              id="institution_type"
              name="institution_type"
              value={formData.institution_type}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
            >
              <option value="" disabled>
                Select Institute Type
              </option>
              <option value="Engineering">Engineering</option>
              <option value="Arts">Arts</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
              disabled={isLoading}
            >
              {!isLoading ? (
                "Create Team"
              ) : (
                <i
                  style={{ color: "white", fontSize: "1rem" }}
                  className="pi pi-spin pi-spinner"
                ></i>
              )}
            </button>
          </div>
        </form>
      </Sidebar>
    </>
  );
}
