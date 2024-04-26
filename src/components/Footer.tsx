import { Box, Grid, Stack, Typography } from "@mui/material";
import FooterList from "./FooterList";
import { list1, list2, list3 } from "../data/data";
import Twitter from "../svg/Twitter";
import Facebook from "../svg/Facebook";
import Youtube from "../svg/Youtube";
import Instagram from "../svg/Instagram";
import WhatsApp from "../svg/WhatsApp";
import LinkedIn from "../svg/LinkedIn";
import Messager from "../svg/Messager";
import DigitalIndiaLogo from "../assets/images/digital-india-logo.png.png";
import IndiaGovLogo from "../assets/images/india-gov-logo.png.png";
import MeityLogo from "../assets/images/Meity_logo.png.png";
import NicLogo from "../assets/images/nic_logo.png.png";
import Link1 from "../assets/images/link-img-1.png";
import Link2 from "../assets/images/link-img-2.png";
import Link3 from "../assets/images/link-img-3.png";
import Link4 from "../assets/images/link-img-4.png";
import Link5 from "../assets/images/link-img-5.png";
import Link6 from "../assets/images/link-img-6.png";
import Link7 from "../assets/images/link-img-7.png";
import Link8 from "../assets/images/link-img-8.png";
import Scanner from "../assets/images/scanner.png";

const Footer = () => {
  return (
    <div>
      <Stack
        alignItems={"center"}
        p={10}
        sx={{ backgroundColor: "#2E2E2E", color: "#FFFFFF" }}
      >
        <Grid container spacing={8}>
          <Grid item md={7}>
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="h6" ml={2}>
                  Activities
                </Typography>
                <FooterList list={list1} />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" ml={2}>
                  Get to Know
                </Typography>
                <FooterList list={list2} />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" ml={2}>
                  Help & Support
                </Typography>
                <FooterList list={list3} />
              </Grid>
            </Grid>
            <Box
              sx={{
                height: "1px",
                backgroundColor: "#D9D9D9",
                margin: "1.5rem 0",
              }}
            ></Box>
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <Typography>Follow</Typography>
              <Twitter />
              <Facebook />
              <Youtube />
              <Instagram />
              <WhatsApp />
              <LinkedIn />
              <Messager />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={2} mt={4}>
              <img className="image-size" src={DigitalIndiaLogo} />
              <img className="image-size" src={IndiaGovLogo} />
              <img className="image-size" src={MeityLogo} />
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={2} mt={4}>
              <img className="image-size" src={NicLogo} />
              <Typography>
                © Content owned, updated and maintained by the MyGov Cell. MyGov
                platform is designed, developed and hosted by National
                Informatics Centre and this website belongs to MyGov, Ministry
                of Electronics & Information Technology, Government of India.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={5}>
            <Typography variant="h6" ml={2}>
              Useful Links
            </Typography>
            <Grid container spacing={2} mb={2}>
              <Grid item md={6}>
                <img className="image-size" src={Link1} />
              </Grid>
              <Grid item md={6}>
                <img className="image-size" src={Link2} />
              </Grid>
              <Grid item md={6}>
                <img className="image-size" src={Link3} />
              </Grid>
              <Grid item md={6}>
                <img className="image-size" src={Link4} />
              </Grid>
              <Grid item md={6}>
                <img className="image-size" src={Link5} />
              </Grid>
              <Grid item md={6}>
                <img className="image-size" src={Link6} />
              </Grid>
              <Grid item md={6}>
                <img className="image-size" src={Link7} />
              </Grid>
              <Grid item md={6}>
                <img className="image-size" src={Link8} />
              </Grid>
            </Grid>
            <img className="image-size" src={Scanner} />
          </Grid>
        </Grid>
      </Stack>
      <Stack
        alignItems={"center"}
        p={2}
        sx={{ backgroundColor: "#1D1D1D", color: "#FFFFFF" }}
      >
        Copyright © MyGov 2014 mygov-27.mygov.in - Last Updated: 15/05/23
      </Stack>
    </div>
  );
};

export default Footer;
