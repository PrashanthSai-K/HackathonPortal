import React, { useState } from 'react'
import axios from 'axios';
export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const response = await axios.post("http://localhost:4000/api/login", { username, password });
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
        //   window.location.href = "/dashboard";
        } else {
          setLoginError(response.data.message);
        }
      }catch (error) { 
        setLoginError("Failed to login. Please try again.");
        console.log(error);
      }
    };
  return (
    <>
    <div className='bg-[#f2f4fe] h-screen flex justify-center'>
     <center className='flex flex-col items-center justify-center'>
      <section className="login_forms">
        <div className="wrapper_login">
          <h3>
            <b className='text-[#465f82] font-bold'>Welcome Back</b>
          </h3>
          <p className='text-[#465f82] font-medium'>Please enter your credentials to access your account.</p>
          {loginError && <div className="alert alert-danger">{loginError}</div>}
          <form  onSubmit={handleSubmit}>
            <div className="form-group" >
              <input
                type="text"
                autoComplete="off"
                name="username"
                placeholder="Enter your Mail ID"
                className={` font-normal border border-[] text-sm form-control ${usernameError ? "is-invalid" : ""}`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && (
                <span className="invalid-feedback">{usernameError}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                autoComplete="off"
                name="password"
                placeholder="Enter your Password"
                className={`font-normal text-sm  form-control ${passwordError ? "is-invalid" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <span className="invalid-feedback">{passwordError}</span>
              )}
            </div>
            <div className="form-group">
              <input type="submit" className="login_btn font-bold" value="Login" />
            </div>
          </form>
        </div>
      </section>
      <p className="link font-medium">
        Don't have an account? <a href="/register" className='font-medium'>Sign up now</a>
      </p>
    </center>
    </div>
    </>
  )
}
