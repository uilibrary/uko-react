import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, Grid, styled, Tab } from "@mui/material";
import FlexBox from "components/FlexBox";
import SearchInput from "components/SearchInput";
import { H3, Small } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import FollowerCard from "components/userProfile/FollowerCard";
import FriendCard from "components/userProfile/FriendCard";
import Gallery from "components/userProfile/Gallery";
import Profile from "components/userProfile/Profile";
import useAuth from "hooks/useAuth";
import useTitle from "hooks/useTitle";
import { FC, SyntheticEvent, useState } from "react";

// styled components
const StyledCard = styled(Card)(() => ({
  position: "relative",
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
}));

const ContentWrapper = styled(FlexBox)(() => ({
  top: -20,
  alignItems: "center",
  position: "relative",
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: 13,
  color: theme.palette.text.primary,
}));

const StyledTabList = styled(TabList)(({ theme }) => ({
  [theme.breakpoints.down(780)]: {
    width: "100%",
    "& .MuiTabs-flexContainer": {
      justifyContent: "space-between",
    },
    marginBottom: 20,
  },
  [theme.breakpoints.up("sm")]: {
    "& .MuiTabs-flexContainer": {
      minWidth: 400,
      justifyContent: "space-between",
    },
  },
}));

const StyledTabPanel = styled(TabPanel)(() => ({
  padding: 0,
}));

const UserProfile: FC = () => {
  // change navbar title
  useTitle("User Profile");
  const { user } = useAuth();

  const [value, setValue] = useState("1");

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box pt={2} pb={4}>
      <TabContext value={value}>
        <StyledCard>
          <Box sx={{ height: 200, width: "100%", overflow: "hidden" }}>
            <img
              src="/static/background/user-cover-pic.png"
              alt="User Cover"
              height="100%"
              width="100%"
              style={{ objectFit: "cover" }}
            />
          </Box>

          <FlexBox
            flexWrap="wrap"
            padding="0 2rem"
            alignItems="center"
            justifyContent="space-between"
          >
            <ContentWrapper>
              <UkoAvatar
                src={user?.avatar || "/static/avatar/001-man.svg"}
                sx={{
                  border: 4,
                  width: 100,
                  height: 100,
                  borderColor: "background.paper",
                }}
              />

              <Box marginLeft={3} marginTop={3}>
                <H3 lineHeight={1.2}>{user?.name}</H3>
                <Small color="text.disabled">UI Designer</Small>
              </Box>
            </ContentWrapper>

            <StyledTabList onChange={handleChange}>
              <StyledTab label="Profile" value="1" />
              <StyledTab label="Follower" value="2" />
              <StyledTab label="Friends" value="3" />
              <StyledTab label="Gallery" value="4" />
            </StyledTabList>
          </FlexBox>
        </StyledCard>

        <Box marginTop={3}>
          <StyledTabPanel value="1">
            <Profile />
          </StyledTabPanel>

          <StyledTabPanel value="2">
            <Grid container spacing={3}>
              {followers.map((item, index) => (
                <Grid item lg={4} sm={6} xs={12} key={index}>
                  <FollowerCard follower={item} />
                </Grid>
              ))}
            </Grid>
          </StyledTabPanel>

          <StyledTabPanel value="3">
            <H3>Friends</H3>
            <SearchInput placeholder="Search Friends..." sx={{ my: 2 }} />

            <Grid container spacing={3}>
              {friends.map((friend, index) => (
                <Grid item lg={4} sm={6} xs={12} key={index}>
                  <FriendCard friend={friend} />
                </Grid>
              ))}
            </Grid>
          </StyledTabPanel>

          <StyledTabPanel value="4">
            <Gallery />
          </StyledTabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

const followers = [
  {
    image: "/static/avatar/040-man-11.svg",
    name: "Mr. Breast",
    profession: "Product Designer",
    following: true,
  },
  {
    image: "/static/avatar/041-woman-11.svg",
    name: "Ethan Drake",
    profession: "UI Designer",
    following: true,
  },
  {
    image: "/static/avatar/042-vampire.svg",
    name: "Selena Gomez",
    profession: "Marketing Manager",
    following: false,
  },
  {
    image: "/static/avatar/043-chef.svg",
    name: "Sally Becker",
    profession: "UI Designer",
    following: true,
  },
  {
    image: "/static/avatar/044-farmer.svg",
    name: "Dua Lipa",
    profession: "Marketing Manager",
    following: false,
  },
  {
    image: "/static/avatar/045-man-12.svg",
    name: "Joe Murry",
    profession: "Product Designer",
    following: true,
  },
  {
    image: "/static/avatar/040-man-11.svg",
    name: "Mr. Breast",
    profession: "Product Designer",
    following: true,
  },
  {
    image: "/static/avatar/041-woman-11.svg",
    name: "Ethan Drake",
    profession: "UI Designer",
    following: true,
  },
  {
    image: "/static/avatar/042-vampire.svg",
    name: "Selena Gomez",
    profession: "Marketing Manager",
    following: false,
  },
  {
    image: "/static/avatar/043-chef.svg",
    name: "Sally Becker",
    profession: "UI Designer",
    following: true,
  },
  {
    image: "/static/avatar/044-farmer.svg",
    name: "Dua Lipa",
    profession: "Marketing Manager",
    following: false,
  },
  {
    image: "/static/avatar/045-man-12.svg",
    name: "Joe Murry",
    profession: "Product Designer",
    following: true,
  },
];

const friends = [
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
  {
    name: "Selena Gomez",
    image: "/static/avatar/012-woman-2.svg",
    profession: "Marketing Manager",
    facebookUrl: "",
    twitterUrl: "",
    instagramUrl: "",
    dribbleUrl: "",
  },
];

export default UserProfile;
