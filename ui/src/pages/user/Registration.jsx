import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { MultiSelect } from "primereact/multiselect";
import React, { useRef, useState } from "react";
import "../../css/style-login.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    instituteName: "",
    instituteAddress: "",
    instituteType: "",
    pocName: "",
    pocEmail: "",
    pocPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <body className="">
        <center className="bg-[#f2f4fe]">
          <section className="signup_forms bg-[#f2f4fe] p-10">
            <div className="wrapper_signup">
              <legend className="text-[#465f82] text-xl">
                Institute Registration
              </legend>
              <p>Fill out the details below to register your institute.</p>
              <form onSubmit={handleSubmit} className="w-full">
                {/* Institute Details */}
                <fieldset>
                  <legend>Institute Details</legend>
                  <div className="form-group_signup">
                    <input
                      type="text"
                      name="instituteCode"
                      placeholder="Institute Code"
                      value={formData.instituteName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group_signup">
                    <input
                      type="text"
                      name="instituteName"
                      placeholder="Institute Name"
                      value={formData.instituteName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group_signup">
                    <input
                      type="text"
                      name="instituteAddress"
                      placeholder="Institute Address"
                      value={formData.instituteAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group_signup">
                    <input
                      type="text"
                      name="instituteAddress"
                      placeholder="Institute City"
                      value={formData.instituteAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-wrap md:flex-nowrap md:w-7/10 justify-center">
                    <div className="form-group_signup">
                      <input
                        type="text"
                        name="instituteAddress"
                        placeholder="Institute State"
                        value={formData.instituteAddress}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group_signup md:pl-3">
                      <input
                        type="text"
                        name="instituteAddress"
                        placeholder="Pincode"
                        value={formData.instituteAddress}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group_signup">
                    <select
                      name="instituteType"
                      value={formData.instituteType}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Institute Type
                      </option>
                      <option value="University">University</option>
                      <option value="College">College</option>
                      <option value="School">School</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </fieldset>

                {/* POC Details */}
                <fieldset>
                  <legend>Point of Contact (POC) Details</legend>
                  <div className="form-group_signup">
                    <input
                      type="text"
                      name="pocName"
                      placeholder="POC Name"
                      value={formData.pocName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group_signup">
                    <input
                      type="email"
                      name="pocEmail"
                      placeholder="POC Email"
                      value={formData.pocEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group_signup">
                    <input
                      type="tel"
                      name="pocPhone"
                      placeholder="POC Phone Number"
                      value={formData.pocPhone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </fieldset>

                {/* Submit Button */}
                <div className="form-group_signup">
                  <input type="submit" className="login_btn" value="Submit" />
                </div>
              </form>
            </div>
            <p className="link">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </section>
        </center>
      </body>
    </>
  );
}
