import { Box, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FAQSearch from "../components/FAQSearch";

const Home = () => {
  return (
    <div>
      <Box sx={{ padding: "2rem 5rem" }}>
        <Stack direction="row" alignItems={"center"}>
          <ArrowBackIosIcon />
          <span className="back-txt">Back</span>
        </Stack>
        <Stack direction="row" alignItems={"center"}>
          <Typography variant="h3" className="heading-txt">
            <em style={{ fontStyle: "normal", fontWeight: "" }}>MyGov</em> - FAQ
          </Typography>
        </Stack>
      </Box>
      <FAQSearch/>
    </div>
  );
};

export default Home;
