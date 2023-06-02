/* eslint-disable react/jsx-no-duplicate-props */
import { rotues } from "./routes";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Svg Sprite
import "./i18nextConf";

function App() {
  return (
    <>
      <Router
        basename={process.env.REACT_APP_BASENAME || ""}
        // forceRefresh
      >
        {rotues.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props) => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              }}
            />
          );
        })}
      </Router>
    </>
  );
}

export default App;
