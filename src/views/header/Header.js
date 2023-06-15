import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import "./header.css";

export const Header = ({ fetchingData }) => {
  return (
    <div className="header">
      <div className="header-title">
        <Link to={"/"} underline="none">
          Podcaster
        </Link>
      </div>
      {fetchingData && <CircularProgress />}
    </div>
  );
};
