/* eslint-disable react/jsx-key */
import React, { lazy } from "react";
import AuthorizedRoute from "base-shell/lib/components/AuthorizedRoute/AuthorizedRoute";
import UnauthorizedRoute from "base-shell/lib/components/UnauthorizedRoute/UnauthorizedRoute";
import { Route } from "react-router-dom";

const SignIn = lazy(() => import("../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const PasswordReset = lazy(() =>
  import("../pages/PasswordReset/PasswordReset")
);
const About = lazy(() => import("../pages/About"));
const Home = lazy(() => import("../pages/Home/Home"));
const StockCast = lazy(() => import("../pages/StockCast/StockCast"));
const CsvCast = lazy(() => import("../pages/CsvCast/CsvCast"));
const ToastDemo = lazy(() => import("../pages/ToastDemo/ToastDemo"));
const FilterDemo = lazy(() => import("../pages/FilterDemo"));
const ListPageDemo = lazy(() => import("../pages/ListPageDemo"));
const Projects = lazy(() => import("../pages/Projects"));
const MyAccount = lazy(() => import("../pages/MyAccount/MyAccount"));

const routes = [
  <UnauthorizedRoute path='/signin' redirectTo='/' exact component={SignIn} />,
  <UnauthorizedRoute path='/signup' redirectTo='/' exact component={SignUp} />,
  <UnauthorizedRoute
    path='/password_reset'
    redirectTo='/'
    exact
    component={PasswordReset}
  />,
  <Route path='/about' exact component={About} />,
  <AuthorizedRoute path='/my_account' exact component={MyAccount} />,
  <AuthorizedRoute path='/home' exact component={Home} />,
  <AuthorizedRoute path='/stock_cast' exact component={StockCast} />,
  <AuthorizedRoute path='/csv_cast' exact component={CsvCast} />,
  <AuthorizedRoute path='/toast_demo' exact component={ToastDemo} />,
  <AuthorizedRoute path='/filter_demo' exact component={FilterDemo} />,
  <AuthorizedRoute path='/list_page_demo' exact component={ListPageDemo} />,
  <AuthorizedRoute path='/projects' exact component={Projects} />,
];

export default routes;
