import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Routes } from "react-router";
import LoginPage from "./LoginPage/LoginPage";
import MainPage from "./MainPage/MainPage";

const AppRoutes = () => {
  const { isLogin } = useSelector((store) => store.user);

  return (
    <Routes>
      {isLogin 
      ? 
      <Route path="/main" element={<MainPage />} />
      : 
      <Route path="/login" element={<LoginPage />} />}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
