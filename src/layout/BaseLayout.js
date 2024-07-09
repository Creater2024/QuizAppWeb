import React from "react";
import NavbarTop from "../components/navbar/NavbarTop";
import NavbarSide from "../components/navbar/NavbarSide";
import { Outlet } from "react-router-dom";
import "./Layout.css";
const drawerWidth = 240;

export default function BaseLayout() {
  return (
    <div>
      <div style={{ marginBottom: "5px" }}>
        <NavbarTop />
      </div>
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <div style={{}} className="navbar_side-container">
          <NavbarSide />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
