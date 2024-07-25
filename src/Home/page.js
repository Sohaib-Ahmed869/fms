import React from "react";

const Home = () => {
  return (
    <div className="text-center">
      <h1>Home</h1>
      <button
        className="p-3 m-3 bg-blue-500 text-white rounded-lg"
        onClick={() => (window.location.href = "/view-folders")}
      >
        View Folders
      </button>
    </div>
  );
};

export default Home;
