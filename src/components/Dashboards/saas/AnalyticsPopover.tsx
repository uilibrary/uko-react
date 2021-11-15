import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, MenuItem, Popover } from "@mui/material";
import { H6, Small } from "components/Typography";
import { FC, useRef, useState } from "react";

// dummy options
const selectOptions = [
  "All Weeks",
  "2 Weeks Ago",
  "3 Weeks Ago",
  "1 Month Ago",
];

const AnalyticsPopover: FC = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(selectOptions[0]);

  const handleChange = (item: string) => {
    setSelected(item);
    setOpen(false);
  };

  return (
    <>
      <Button
        disableRipple
        onClick={() => setOpen(true)}
        ref={anchorRef}
        endIcon={<KeyboardArrowDown sx={{ color: "text.disabled" }} />}
        sx={{ p: 0, "&:hover": { backgroundColor: "transparent" } }}
      >
        <H6 color="text.disabled">{selected}</H6>
      </Button>
      <Popover
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        PaperProps={{ sx: { py: "0.5rem" } }}
      >
        {selectOptions.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleChange(item)}
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            <Small fontWeight={500} py={0.5}>
              {item}
            </Small>
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default AnalyticsPopover;
