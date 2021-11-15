import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Badge, Box, IconButton, styled, Tab, useTheme } from "@mui/material";
import FlexBox from "components/FlexBox";
import { H6, Paragraph, Tiny } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import NotificationsIcon from "icons/NotificationsIcon";
import { FC, Fragment, SyntheticEvent, useRef, useState } from "react";
import PopoverLayout from "./PopoverLayout";

// dummy  data
const messages = [
  {
    id: "5e8883f1b51cc1956a5a1ec0",
    createdAt: Date.now(),
    title: "Your order is placed",
    type: "new_message",
    name: "Brain Warner",
    message: "Changed an issue from in this project",
    image: "/static/avatar/001-man.svg",
  },
  {
    id: "5e8883f7ed1486d665d8be1e",
    createdAt: Date.now(),
    description: "You have 32 unread messages",
    title: "New message received",
    type: "new_message",
    name: "Kiara Hamptoon",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    image: "/static/avatar/002-girl.svg",
  },
  {
    id: "5e8883fca0e8612044248ecf",
    createdAt: Date.now(),
    description: "Dummy text",
    title: "Your item is shipped",
    type: "item_shipped",
    name: "Ruby Walton",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    image: "/static/avatar/004-woman.svg",
  },
];

const archives = [
  {
    id: "5e8883f1b51cc1956a5a1ec0",
    createdAt: Date.now(),
    title: "Your order is placed",
    type: "",
    name: "Brain Warner",
    message: "Changed an issue from in this project",
    image: "/static/avatar/001-man.svg",
  },
  {
    id: "5e8883f7ed1486d665d8be1e",
    createdAt: Date.now(),
    description: "You have 32 unread messages",
    title: "New message received",
    type: "",
    name: "Kiara Hamptoon",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    image: "/static/avatar/002-girl.svg",
  },
  {
    id: "5e8883fca0e8612044248ecf",
    createdAt: Date.now(),
    description: "Dummy text",
    title: "Your item is shipped",
    type: "item_shipped",
    name: "Ruby Walton",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    image: "/static/avatar/004-woman.svg",
  },
];

// styled components
const StyledTab = styled(Tab)(() => ({
  width: "50%",
  marginLeft: 0,
  marginRight: 0,
}));

const NotificationsPopover: FC = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (_: SyntheticEvent, value: string) => {
    setTabValue(value);
  };

  // unread messages
  const unreadMsg = messages.filter((item) => item.type === "new_message");

  return (
    <Fragment>
      <IconButton ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge color="error" badgeContent={0}>
          <NotificationsIcon fontSize="small" sx={{ color: "text.disabled" }} />
        </Badge>
      </IconButton>

      <PopoverLayout
        title="Notifications"
        popoverOpen={open}
        anchorRef={anchorRef}
        popoverClose={() => setOpen(false)}
      >
        <TabContext value={tabValue}>
          <TabList onChange={handleTabChange}>
            <StyledTab value="1" label={`Messages (${unreadMsg.length})`} />
            <StyledTab value="2" label="Archived" />
          </TabList>

          {messages.length === 0 ? (
            <Paragraph fontWeight="500" textAlign="center" p={2}>
              There are no notifications
            </Paragraph>
          ) : (
            <TabPanel value="1">
              {messages.map((msg) => (
                <ListItem msg={msg} key={msg.id} />
              ))}
            </TabPanel>
          )}

          {archives.length === 0 ? (
            <Paragraph fontWeight="500" textAlign="center" p={2}>
              There are no archives
            </Paragraph>
          ) : (
            <TabPanel value="2">
              {archives.map((msg) => (
                <ListItem msg={msg} key={msg.id} />
              ))}
            </TabPanel>
          )}
        </TabContext>
      </PopoverLayout>
    </Fragment>
  );
};

// ListItem component props
type ListItemProps = {
  msg: {
    type: string;
    image: string;
    name: string;
    message: string;
  };
};
function ListItem({ msg }: ListItemProps) {
  const theme = useTheme();
  const colorbg =
    theme.palette.mode === "light" ? "secondary.light" : "divider";

  return (
    <FlexBox
      p={2}
      alignItems="center"
      sx={{
        borderBottom: 1,
        cursor: "pointer",
        borderColor: "divider",
        backgroundColor: msg.type === "new_message" ? colorbg : "transparent",
        "&:hover": { backgroundColor: colorbg },
      }}
    >
      <FlexBox alignItems="center">
        <Box
          sx={{
            width: 8,
            height: 8,
            marginRight: 2,
            borderRadius: "50%",
            backgroundColor:
              msg.type === "new_message" ? "primary.main" : "text.disabled",
          }}
        />
        <UkoAvatar src={msg.image} sx={{ width: 35, height: 35 }} />
      </FlexBox>

      <Box ml={2}>
        <H6>{msg.name}</H6>
        <Tiny display="block" fontWeight={500} color="text.disabled">
          {msg.message}
        </Tiny>
      </Box>
    </FlexBox>
  );
}

export default NotificationsPopover;
