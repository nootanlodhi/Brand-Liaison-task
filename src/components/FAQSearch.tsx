import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#FFFFFF",
  color: "gray",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
//   height: "100%",
  //   position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#2AB998",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  color: "gray",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const FAQSearch = () => {
  return (
    <div className="faq-search-container">
      <Typography variant="h1">FAQ</Typography>
      {/* <Search> */}
      {/* <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper> */}
      <Box display={"flex"} sx={{borderRadius:"8px"}}>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Box>

      {/* </Search> */}
    </div>
  );
};

export default FAQSearch;
