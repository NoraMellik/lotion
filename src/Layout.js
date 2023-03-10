import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Notes from "./Notes";

function Layout() {
  const [currentHidden, setHidden] = useState(false);


  const hideSidebar = () =>{
    return;
  };
  
  return (
    <>
      <header><div><h1 class = "Title">Lotion</h1>
      <h2 class = "Subheader">Like Notion, but worse.</h2></div><button onClick = {() => setHidden(!currentHidden)} class = "nav">&#9776; {currentHidden ? "Show" : "Hide"}</button>
      <hideComp currentHidden={currentHidden} /></header>
      <div id="content">
        {}
        <Outlet />
      </div>
      <footer></footer>
    </>
  )
};

export default Layout;