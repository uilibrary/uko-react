import { alpha, Box, Card, styled } from "@mui/material";
import { H3, H5 } from "components/Typography";
import { FC } from "react";

// root component interface
interface SaaSCardProps {
  card: any;
}

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "2rem 1.5rem",
  display: "flex",
  alignItems: "center",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem",
    flexDirection: "column",
    justifyContent: "center",
    "& .MuiBox-root": {
      marginRight: 0,
      textAlign: "center",
    },
  },
}));

const SaaSCard: FC<SaaSCardProps> = ({ card }) => {
  const { Icon, title, color, price } = card;

  return (
    <StyledCard>
      <Box
        sx={{
          width: 60,
          height: 60,
          marginRight: 2,
          display: "flex",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: alpha(color, 0.2),
        }}
      >
        <Icon sx={{ color }} />
      </Box>
      <Box mt={{ xs: "1rem", sm: 0 }}>
        <H5 color="text.disabled">{title}</H5>
        <H3>${price}</H3>
      </Box>
    </StyledCard>
  );
};

export default SaaSCard;
