import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Logo from "../assets/images/header-logo.png";
import { Drawer, Stack } from "@mui/material";
import { useState } from "react";
import LogoIcon from "../svg/LogoIcon";
import SearchBar from "../svg/SearchBar";
import LightIcon from "../svg/LightIcon";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState: boolean) => !prevState);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={Logo} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Dropdown text="Activities" />
            <Dropdown text="MyGov States" />
            <Dropdown text="Microsites" />
            <Dropdown text="Get To Know" />
            <Dropdown text="Help/Feedback" />
            <LightIcon />
            <SearchBar />
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
              sx={{ backgroundColor: "#F3D2C1" }}
            >
              <LogoIcon />
            </IconButton>
          </Stack>
        </Toolbar>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          bbbbbbbbbbbbb
        </IconButton>

        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "black",
              color: "white",
              padding: "20px 10px",
            },
          }}
        >
          aaaaaaaaaaaaaa
        </Drawer>
      </AppBar>
    </Box>
  );
}
