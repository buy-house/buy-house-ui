import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  DEFAULT_ROUTE,
  LOGIN_ROUTE,
  LOGOUT_ROUTE,
  MAIN_ROUTE,
  SIGN_UP_ROUTE,
} from "./Routes";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginRoute from "../routes/LoginRoute";
import SignUpRoute from "../routes/SignUpRoute";
import LogoutRoute from "../routes/LogoutRoute";
import MainRoute from "../routes/MainRoute";
import RightSideLayout from "../layouts/RightSideLayout";

const Router = () => {
  return (
    <Routes>
      <Route path={DEFAULT_ROUTE} element={<DefaultLayout />}>
        <Route path={MAIN_ROUTE} element={<MainRoute />}>
          <Route path={LOGOUT_ROUTE} element={<LogoutRoute />} />
        </Route>
      </Route>
      <Route path={DEFAULT_ROUTE} element={<RightSideLayout />}>
        <Route path={LOGIN_ROUTE} element={<LoginRoute />} />
        <Route path={SIGN_UP_ROUTE} element={<SignUpRoute />} />
      </Route>
    </Routes>
  );
};

export default Router;
