import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { userPostRequest } from "../exports";
import { useActionState } from "../../../CustomHooks";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      const response = await userPostRequest("/login", {
        username: username,
        password: password,
      });
      if (response.data.token !== undefined) {
        localStorage.setItem("token", response.data.token);
        toast.success("Successfully logged in");
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      toast.error(
        error.response.data.error || error.response.data.errors[0].message
      );
      console.log(error);
    }
  };

  const [loginFunction, isLoading] = useActionState(handleSubmit);

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
              <form onSubmit={loginFunction}>
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
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {!isLoading ? (
                      "Login"
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
