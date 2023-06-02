import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <React.Fragment>
      <main>
        {children}
      </main>

    </React.Fragment>
  )
};


export default DefaultLayout;