import { Box, Grid, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FAQSearch from "../components/FAQSearch";
import FAQAccordion from "../components/FAQAccordian";
import LeftImg from "../assets/images/left-img.png"

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
      <Grid container spacing={4} pl={{xs:1, md:12}} pr={{xs:1, md:12}}>
        <Grid item xs={12} md={8} mt={4}>
          <FAQAccordion/>
        </Grid>
        <Grid item display={{xs:"none", md:"flex"}} xs={0} md={4}>
          <img src={LeftImg} style={{maxWidth:"100%", maxHeight:"80%", objectFit:"contain"}}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
