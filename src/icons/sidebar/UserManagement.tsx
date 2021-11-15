import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const UserManagement = (props: SvgIconProps) => {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21,5.5v1a.5.5,0,0,1-.5.5H9.5A.5.5,0,0,1,9,6.5v-1A.5.5,0,0,1,9.5,5h11A.5.5,0,0,1,21,5.5ZM20.5,11H9.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,20.5,11Zm0,6H9.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,20.5,17ZM5,4A2,2,0,1,0,7,6,2,2,0,0,0,5,4Zm0,6a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm0,6a2,2,0,1,0,2,2A2,2,0,0,0,5,16Z" />
    </SvgIcon>
  );
};

export default UserManagement;
