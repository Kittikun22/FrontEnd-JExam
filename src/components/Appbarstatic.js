import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../App";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo from "../asset/Jknowledge-Logo.png";

const ResponsiveAppBarStatic = () => {

  return (
    <>
      <AppBar position="sticky" sx={{ background: "#0e3746" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                mx: "2rem",
              }}
            >
              <Box component="img" src={logo} width="175px" duration={0} />
            </Typography>
          </Toolbar>
        </Container>
        <Box sx={{ height: "5px", bgcolor: "#a0d64b" }} />
      </AppBar>
    </>
  );
};
export default ResponsiveAppBarStatic;
