import React, { useEffect } from "react";

export function Login() {
  useEffect(() => {
    document.title = "Login Page";
  }, []);
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Username or Email Address</label>
        <br />
        <input placeholder="Username or Email Address" />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input placeholder="Password" />
      </form>
    </div>
  );
}
