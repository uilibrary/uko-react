import { Avatar, AvatarProps, styled } from "@mui/material";
import { FC } from "react";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  borderColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary[300]
      : theme.palette.divider,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary[300]
      : theme.palette.primary[200],
}));

const UkoAvatar: FC<AvatarProps> = (props) => {
  return <StyledAvatar {...props} />;
};

export default UkoAvatar;
