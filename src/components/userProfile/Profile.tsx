import { BusinessCenter, Mail, Place } from "@mui/icons-material";
import { Box, Card, Divider, Grid, styled } from "@mui/material";
import FlexBox from "components/FlexBox";
import MoreOptions from "components/MoreOptions";
import { H3, H4, H6, Small } from "components/Typography";
import FollowerIcon from "icons/FollowerIcon";
import UserPlusIcon from "icons/UserPlusIcon";
import { FC, MouseEvent, useState } from "react";
import PostCard from "./PostCard";

// styled components
const IconWrapper = styled(Box)<{ color?: string }>(({ theme, color }) => ({
  width: 40,
  height: 40,
  color: "white",
  display: "flex",
  borderRadius: "4px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: color ? color : theme.palette.primary.main,
}));

const FollowWrapper = styled(Box)(() => ({
  maxWidth: 300,
  margin: "auto",
  paddingTop: 32,
  paddingBottom: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Profile: FC = () => {
  const [moreEl, setMoreEl] = useState<null | HTMLElement>(null);
  const handleMoreOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setMoreEl(event.currentTarget);
  };
  const handleMoreClose = () => setMoreEl(null);

  return (
    <Grid container spacing={3}>
      <Grid item md={5} xs={12}>
        <Card>
          <FollowWrapper>
            <FlexBox alignItems="center">
              <IconWrapper>
                <UserPlusIcon fontSize="small" />
              </IconWrapper>
              <Box marginLeft={1.5}>
                <H6 color="text.disabled" lineHeight={1}>
                  Following
                </H6>
                <H3 lineHeight={1} mt={0.6}>
                  93,675
                </H3>
              </Box>
            </FlexBox>
            <FlexBox alignItems="center">
              <IconWrapper color="#FF9777">
                <FollowerIcon fontSize="small" />
              </IconWrapper>
              <Box marginLeft={1.5}>
                <H6 color="text.disabled" lineHeight={1}>
                  Followers
                </H6>
                <H3 lineHeight={1} mt={0.6}>
                  82,469
                </H3>
              </Box>
            </FlexBox>
          </FollowWrapper>

          <Divider />

          <Box padding={3}>
            <H4 fontWeight={600}>About</H4>
            <Small mt={1} display="block" lineHeight={1.9}>
              Tart I love sugar plum I love oat cake. Sweet roll caramels I love
              jujubes. Topping cake wafer..
            </Small>

            <Box mt={3}>
              {details.map(({ Icon, smallText, boldText }, index) => (
                <FlexBox alignItems="center" mt={1.5} key={index}>
                  <Icon />
                  <H6 marginLeft={1}>
                    <Small>{smallText}</Small> {boldText}
                  </H6>
                </FlexBox>
              ))}
            </Box>
          </Box>
        </Card>
      </Grid>

      <Grid item md={7} xs={12}>
        {postList.map((post) => (
          <PostCard post={post} key={post.id} handleMore={handleMoreOpen} />
        ))}

        <MoreOptions anchorEl={moreEl} handleMoreClose={handleMoreClose} />
      </Grid>
    </Grid>
  );
};

const details = [
  {
    Icon: Place,
    boldText: "Kuwait",
    smallText: "Lives at",
  },
  {
    Icon: Mail,
    boldText: "",
    smallText: "Lenore_Rosenbaum@gmail.com",
  },
  {
    Icon: BusinessCenter,
    boldText: "UI_LIB",
    smallText: "Manager at",
  },
  {
    Icon: BusinessCenter,
    smallText: "Studied at",
    boldText: "Corwin - Blick",
  },
];

const postList = [
  {
    id: 1,
    postTitle: "Coffee and Afternoon",
    postImage: "/static/post-image/post-1.png",
  },
  {
    id: 2,
    postTitle: "Coffee and Afternoon",
    postImage: "",
  },
];

export default Profile;
