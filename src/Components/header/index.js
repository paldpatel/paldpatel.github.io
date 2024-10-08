import * as React from "react";
import "./header.css";
import { useMediaQuery } from "@mui/material";
import CropIcon from "@mui/icons-material/Crop";
import TemporaryDrawer from "./drawer";

function Header() {
  const matches = useMediaQuery("(min-width:720px)");

  return (
    <div className="header">
      <div className="logos">
        <CropIcon style={{ fontSize: "2rem", color: "white" }} />
        <div className="logoName">Portfolio.</div>
      </div>

      {matches ? (
        <div className="groupicons">
          <div className="clickicons"><a href="#Education">Education</a></div>
          <div className="clickicons"><a href="#Project">Projects</a></div>
          <div className="clickicons"><a href="#About">About</a></div>
          <div className="clickicons"><a href="#skills">Skills</a></div>
          <div className="clickicons"><a href="#Contact">Contact</a></div>
        </div>
      ) : (
        <TemporaryDrawer /> // Show drawer icon for smaller screens
      )}
    </div>
  );
}

export default Header;
