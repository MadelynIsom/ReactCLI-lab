import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <>
      <nav id="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instagram">Artwork</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
      <div id="content">
      <Outlet />
      
      <footer>
        <h2><a href="https://github.com/MadelynIsom/ReactCLI-lab" target="_blank">GitHub</a></h2>
      </footer>
      </div>
    </>
  )
};

export default Layout;