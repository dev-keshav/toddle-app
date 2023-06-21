import React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../img/logo.png";
import Stack from "@mui/material/Stack";
import CustomizedDialogs from "./Dialog";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));



export default function MyboardNav() {


    
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ backgroundColor: "white" }}>
          <Stack>
            <img src={Logo} alt="Logo" />
          </Stack>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Search variant="outlined" sx={{ color: "black", px: "55px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Stack sx={{ px: 2 }}>
            {/* <Button variant="contained" sx={{ backgroundColor: "#EB4762" }}>
              
              <AddIcon /> Create new board
            </Button> */}
            <CustomizedDialogs />
          </Stack>
        </Toolbar>
    </Box>
  );
}
