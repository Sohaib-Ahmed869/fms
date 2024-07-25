import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/page";
import ViewFiles from "./ViewFiles/page";
import ViewFolders from "./ViewFolders/page";
import Login from "./Login/page";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view-files" element={<ViewFiles />} />
      <Route path="/view-folders" element={<ViewFolders />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Layout;
