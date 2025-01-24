import React, { useState } from "react"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { userPostRequest } from "../exports"
import { useActionState } from "../../../CustomHooks"

export default function ForgotPassword() {

  const [email, setEmail] = useState("");
  
  const handleForgotPassword = async () => {
    try {
      const response = await userPostRequest("/login/forgotPassword", { email });
      if (response.status === 201) {
        toast.success("Reset link sent to your email!");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error sending reset link."
      );
    }
  };

  const [forgotPasswordFunction, isLoading] = useActionState(handleForgotPassword)

  return (
    <div className="bg-[#f2f4fe] h-screen flex justify-center">
      <center className="flex flex-col items-center justify-center">
        <section className="login_forms">
          <div className="wrapper_login pt-5">
            <h3>
              <b className="text-[#465f82] font-bold">Forgot Password</b>
            </h3>
            <p className="text-[#465f82] font-medium">
              Enter your email address to receive password reset instructions.
            </p>
            <form onSubmit={forgotPasswordFunction}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="font-normal border border-[] text-sm form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full gap-2 px-3 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {!isLoading ? (
                    "Reset Password"
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
          Remember your password?{" "}
          <Link to="/login" className="font-medium">
            Login here
          </Link>
        </p>
      </center>
    </div>
  )
}

