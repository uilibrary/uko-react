import { Box, styled } from "@mui/material";
import { FC, Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSideBar";

// styled components
const Wrapper = styled(Box)(({ theme }) => ({
  width: `calc(100% - 80px)`,
  maxWidth: 1200,
  margin: "auto",
  paddingLeft: 80,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: 0,
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
}));

const DashboardLayout: FC = ({ children }) => {
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  return (
    <Fragment>
      <DashboardSidebar
        showMobileSideBar={showMobileSideBar}
        closeMobileSideBar={() => setShowMobileSideBar(false)}
      />

      <Wrapper>
        <DashboardNavbar
          setShowMobileSideBar={() => setShowMobileSideBar((state) => !state)}
        />
        {children || <Outlet />}
      </Wrapper>
    </Fragment>
  );
};

export default DashboardLayout;
