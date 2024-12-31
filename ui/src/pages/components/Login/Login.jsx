import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { userPostRequest } from "../exports";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userPostRequest("/login", {username: username, password: password});

      if (response.data.token !== undefined) {
        localStorage.setItem("token", response.data.token);
        toast.success("Successfully logged in");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to login. Please try again.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-[#f2f4fe] h-screen flex justify-center">
        <center className="flex flex-col items-center justify-center">
          <section className="login_forms">
            <div className="wrapper_login">
              <h3>
                <b className="text-[#465f82] font-bold">Welcome Back</b>
              </h3>
              <p className="text-[#465f82] font-medium">
                Please enter your credentials to access your account.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    // autoComplete="off"
                    name="username"
                    placeholder="Enter your Mail ID"
                    className={` font-normal border border-[] text-sm form-control`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    placeholder="Enter your Password"
                    className={`font-normal text-sm  form-control`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="login_btn font-bold"
                    value="Login"
                  />
                </div>
              </form>
            </div>
          </section>
          <p className="link font-medium">
            Don't have an account?{" "}
            <a href="/register" className="font-medium">
              Sign up now
            </a>
          </p>
        </center> 
      </div>
    </>
  );
}
