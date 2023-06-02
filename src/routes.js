import React from "react";
import { defaultLayout } from "./layouts";
import Home from "./containers/Home";

// Route Views

export const rotues = [
  {
    path: "/",
    exact: true,
    layout: defaultLayout,
    component: () => <Home />,
  },
  
];
