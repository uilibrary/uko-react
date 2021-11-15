import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const Dashboard = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10,3H4A1,1,0,0,0,3,4V8A1,1,0,0,0,4,9h6a1,1,0,0,0,1-1V4A1,1,0,0,0,10,3ZM9,7H5V5H9Zm1,4H4a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V12A1,1,0,0,0,10,11ZM9,19H5V13H9Zm11-4H14a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V16A1,1,0,0,0,20,15Zm-1,4H15V17h4ZM20,3H14a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3Zm-1,8H15V5h4Z" />
    </SvgIcon>
  );
};

export default Dashboard;
