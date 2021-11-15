import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

const FlexBox: FC<BoxProps> = ({ children, ...props }) => (
  <Box display="flex" {...props}>
    {children}
  </Box>
);

export default FlexBox;
