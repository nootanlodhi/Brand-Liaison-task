import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import BgImg1 from "../assets/images/bg-img-1.png"
import BgImg2 from "../assets/images/bg-img-2.png"

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#2AB998",
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px"
}));

const StyledInputBase = styled(InputBase)(() => ({
  backgroundColor: "#FFFFFF",
  color: "gray",
  width: window.innerWidth > 800 ? "40rem" : "20rem",
  padding: "1rem 1.8rem",
  borderTopLeftRadius: "8px",
  borderBottomLeftRadius: "8px",
  
}));

const FAQSearch = () => {
  return (
    <div className="faq-search-container">
      <img className="image-size" src={BgImg1}/>
      <img className="image-size-2" src={BgImg2}/>
      <div className="inner-faqdiv">
        <Typography variant="h1">FAQ</Typography>
        <Box display={"flex"} sx={{ width:"100%" }}>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            fullWidth
            
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Box>
      </div>
    </div>
  );
};

export default FAQSearch;
