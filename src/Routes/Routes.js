import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BannerBoxDetail from "../PageComponents/BannerBoxDetail/BannerBoxDetail";
import Home from "../PageComponents/Home";

const AppRoutes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banner-box-detail" element={<BannerBoxDetail />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default AppRoutes;
