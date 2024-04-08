import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "../Pages/Homepage/Home";
import WhitePaper from "../Pages/WhitePaper";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SharedLayout />} path="/">
          <Route index element={<Home />} />
          <Route element={<WhitePaper />} path="whitepaper" />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
