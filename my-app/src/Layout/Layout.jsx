import React from "react";
import Navbar from "../Partials/Navbar";
function Layout({ className = "container", children }) {
  return (<>
          <Navbar/>
    <div className={className}>

      {children}
    </div>
  </>
  );
}

export default Layout;
