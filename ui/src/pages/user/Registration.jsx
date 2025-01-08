import React, { useState } from "react";
import "../../css/style-login.css";
import { deBounce, userGetRequest, userPostRequest } from "../components/exports";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useActionState, useInstitutionFetcher } from "../../CustomHooks";
import { AutoComplete } from "primereact/autocomplete";

export default function Registration() {


  const data = {
    instituteCode: "",
    instituteName: "",
    instituteAddress: "",
    instituteCity: "",
    instituteState: "",
    institutePincode: "",
    instituteType: "",
    pocName: "",
    pocEmail: "",
    pocPhone: "",
    password: "",
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [formData, setFormData] = useState(data);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("Form Data Submitted:", formData);
      const response = await userPostRequest("/register", formData);
      toast.success(response.data.message);
      setFormData(data);
      setTimeout(navigate("/login"), 3000);
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.error || error.response.data.errors[0].message
      );
    }
  };

  const [registration, isLoading] = useActionState(handleSubmit)

  const [instituteCode, setInstituteCode] = useState([]);
  const [instituteName, setInstituteName] = useState([]);

  const searchCodeSuggestions = deBounce(async (event) => {
    const query = event.query;
    if (!query) {
      setInstituteCode([]);
      return
    }
    try {
      const response = await userGetRequest(`/suggestions/code?query=${query}`);
      const codes = response.data.data.map((d) => d.InstitutionCode);
      setInstituteCode(codes);
    } catch (error) {
      console.log(error);
    }
  })

  const searchNameSuggestions = deBounce(async (event) => {
    const query = event.query;
    if (!query) {
      setInstituteName([]);
      return
    }
    try {
      const response = await userGetRequest(`/suggestions/name?query=${query}`);
      const names = response.data.data.map((d) => d.InstitutionName);
      setInstituteName(names);
    } catch (error) {
      console.log(error);
    }
  })

  const fetchInstitutionName  = useInstitutionFetcher(setFormData);

  const onInstitutionCodeChange = async (e) => {
    const { name, value } = e.target;
    if(!value){
      setFormData((prevData) => ({
        ...prevData,
        instituteName: "",
        instituteType: "",
        instituteAddress: ""
      }));
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    fetchInstitutionName(value);

  }

  return (
    <>
      <center className="bg-[#f2f4fe]">
        <section className="signup_forms bg-[#f2f4fe] p-5">
          <div className="wrapper_signup">
            <legend className="text-[#465f82] text-xl">
              Institute Registration
            </legend>
            <p>Fill out the details below to register your institute</p>
            <form onSubmit={registration} className="w-full">
              {/* Institute Details */}
              <fieldset>
                <legend>Institute Details</legend>
                <div className="form-group_signup">
                  <AutoComplete className="w-full" required name="instituteCode" placeholder="Institute Code" value={formData.instituteCode} completeMethod={searchCodeSuggestions} suggestions={instituteCode} onChange={onInstitutionCodeChange} />
                </div>
                <div className="form-group_signup">
                  <AutoComplete className="w-full" required name="instituteName" placeholder="Institute Name" value={formData.instituteName} completeMethod={searchNameSuggestions} suggestions={instituteName} onChange={handleChange} />
                </div>

                <div className="form-group_signup">
                  <input type="text" name="instituteAddress" placeholder="Institute Address" value={formData.instituteAddress} onChange={handleChange} required />
                </div>
                <div className="form-group_signup">
                  <input type="text" name="instituteCity" placeholder="Institute City" value={formData.instituteCity} onChange={handleChange} required />
                </div>
                <div className="flex flex-wrap md:flex-nowrap md:w-7/10 justify-center">
                  <div className="form-group_signup">
                    <input type="text" name="instituteState" placeholder="Institute State" value={formData.instituteState} onChange={handleChange} required />
                  </div>
                  <div className="form-group_signup md:pl-3">
                    <input type="text" name="institutePincode" placeholder="Pincode" pattern="\d{6}" value={formData.institutePincode} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group_signup">
                  <select name="instituteType" value={formData.instituteType} onChange={handleChange} required >
                    <option value="" disabled>
                      Select Institute Type
                    </option>
                    <option value="Engineering">Engineering</option>
                    <option value="Arts">Arts</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </fieldset>

              {/* POC Details */}
              <fieldset>
                <legend>Point of Contact (POC) Details</legend>
                <div className="form-group_signup">
                  <input type="text" name="pocName" placeholder="POC Name" value={formData.pocName} onChange={handleChange} required />
                </div>
                <div className="form-group_signup">
                  <input type="email" name="pocEmail" placeholder="POC Email" value={formData.pocEmail} onChange={handleChange} required />
                </div>
                <div className="form-group_signup">
                  <input type="number" name="pocPhone" placeholder="POC Phone Number" value={formData.pocPhone} onChange={handleChange} pattern="\d{10}"
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Required 10 digits")
                    }
                    required
                  />
                </div>
                <div className="form-group_signup">
                  <input type="password" name="password" placeholder="Login Password" value={formData.password} onChange={handleChange} required />
                </div>
              </fieldset>

              {/* Submit Button */}
              <div className="form-group_signup">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {!isLoading ? (
                    "Register"
                  ) : (
                    <i
                      style={{ color: "white", fontSize: "1rem" }}
                      className="gap-2 px-3 py-1 pi pi-spin pi-spinner"
                    ></i>
                  )}
                </button>
              </div>
            </form>
          </div>
          <p className="link">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </section>
      </center>

    </>
  );
}
