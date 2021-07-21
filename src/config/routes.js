/* eslint-disable react/jsx-key */
import React, { lazy } from "react";
import { Route } from "react-router-dom";

const About = lazy(() => import("../pages/About"));
const StockCast = lazy(() => import("../pages/StockCast/StockCast"));
const CsvCast = lazy(() => import("../pages/CsvCast/CsvCast"));
const Projects = lazy(() => import("../pages/Projects"));

const routes = [
  <Route path='/4cast' exact component={About} />,
  <Route path='/4cast/stock_cast' exact component={StockCast} />,
  <Route path='/4cast/csv_cast' exact component={CsvCast} />,
  <Route path='/4cast/projects' exact component={Projects} />,
];

export default routes;
