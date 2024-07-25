import React, { useState } from "react";
import { BiFolder } from "react-icons/bi";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);

    if (username === "admin" && password === "admin") {
      window.location.href = "/view-folders";
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="p-20">
      <div className="text-center p-20 border-2 border-gray-200 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <BiFolder size={50} className="text-blue-500" />
        </div>
        <h1 className="text-xl mb-10">Welcome Back to the File Manager</h1>
        <p className="text-gray-500 mb-5">Please login to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3" style={{ textAlign: "left" }}>
            <label htmlFor="username" className="form-label mb-3">
              Username
            </label>
            <input
              type="text"
              className="form-control mb-3 w-full border-2 border-gray-200 rounded-lg p-3 mt-3"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3" style={{ textAlign: "left" }}>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-3 w-full border-2 border-gray-200 rounded-lg p-3 mt-3"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full rounded-lg mt-5 bg-blue-500 text-white p-3"
          >
            Submit
          </button>
        </form>
      </div>
      <p className="text-center mt-5 text-gray-500">
        If you don't have an account, please contact the administrator
      </p>
      <p className="text-center">or</p>
      <p className="text-center text-gray-500">
        <a href="/register" className="text-blue-500 underline">
          Register
        </a>
      </p>
    </div>
  );
};

export default Login;
