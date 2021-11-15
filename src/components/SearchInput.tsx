import { InputBase, InputBaseProps, styled } from "@mui/material";
import SearchIcon from "icons/SearchIcon";
import { FC } from "react";

// styled component
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  height: 45,
  fontSize: 13,
  width: "100%",
  maxWidth: 270,
  fontWeight: 500,
  padding: "0 1rem",
  borderRadius: "8px",
  border: "1px solid ",
  borderColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary[300]
      : theme.palette.divider,

  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down(500)]: { maxWidth: "100%" },
}));

const SearchInput: FC<InputBaseProps> = (props) => {
  return (
    <StyledInputBase
      {...props}
      startAdornment={
        <SearchIcon
          sx={{
            fontSize: 16,
            marginRight: 1,
            color: "text.disabled",
          }}
        />
      }
    />
  );
};

export default SearchInput;
