import React, { useState } from 'react'

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add validation and login logic here
    };
  return (
    <>
     <center>
      <section className="login_forms">
        <div className="wrapper_login">
          <h3>
            <b>Welcome Back</b>
          </h3>
          <p>Please enter your credentials to access your account.</p>
          {loginError && <div className="alert alert-danger">{loginError}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                autoComplete="off"
                name="username"
                placeholder="Enter your Mail ID"
                className={`form-control ${usernameError ? "is-invalid" : ""}`}
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
                className={`form-control ${passwordError ? "is-invalid" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <span className="invalid-feedback">{passwordError}</span>
              )}
            </div>
            <div className="form-group">
              <input type="submit" className="login_btn" value="Login" />
            </div>
          </form>
        </div>
      </section>
      <p className="link">
        Don't have an account? <a href="register.php">Sign up now</a>
      </p>
    </center>
    </>
  )
}
