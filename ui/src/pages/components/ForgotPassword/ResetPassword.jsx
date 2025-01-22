import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { userPostRequest } from "../exports";
import { toast } from "react-toastify";
import { useActionState } from "../../../CustomHooks";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get("resetToken");
  const navigate = useNavigate();
  console.log(resetToken);


  const handleSubmit = async () => {
    try {
      const response = await userPostRequest("/login/resetPassword", { resetToken, newPassword, confirmPassword });
      if (response.data.message) {
        toast.success(response.data.message);
        setTimeout(() => navigate("/login"), 3000);
      }
    } catch (error) {
      toast.error(
        error.response.data.error || error.response.data.errors[0].message
      );
    }
  };

  const [handleResetPassword, isLoading] = useActionState(handleSubmit);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">New Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Confirm Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
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
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
