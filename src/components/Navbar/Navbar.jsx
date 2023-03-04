import React, { useContext, useState, useEffect } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";

import CustomContainer from "components/CustomContainer";

import { AppContext } from "context/AppContextProvider";

import styles from "assets/jss/components/navbarStyles";

const useStyles = makeStyles(styles);

const Navbar = (props) => {
  const classes = useStyles();

  const { openSidebar } = props;

  const navigate = useNavigate();

  const { logged, userName } = useContext(AppContext);

  const handleNavigate = (e, url) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appbar}>
        <CustomContainer>
          <Toolbar className={classes.toolbar}>
            <Link
              variant="button"
              className={classes.logo}
              onClick={(e) => handleNavigate(e, "/")}
              sx={{ cursor: "pointer" }}
            >
              <img src="/images/npm-logo.png" alt="Logo" />
            </Link>

            <Box
              className={clsx(classes.searchInput, classes.hiddenOnMobile)}
              ml="auto"
            >
              <OutlinedInput
                startAdornment={<img src="/images/loupe.png" alt="" />}
                placeholder="Search"
              />
            </Box>

            <Box className={classes.hiddenOnMobile}>
              <Link
                href="/explore"
                className={classes.link}
                underline="none"
                onClick={(e) => handleNavigate(e, "/explore")}
              >
                Explore
              </Link>
              <Link
                href="/collections"
                className={classes.link}
                underline="none"
                onClick={(e) => handleNavigate(e, "/collections")}
              >
                Collections
              </Link>
              <Link
                href="/creators"
                className={classes.link}
                underline="none"
                onClick={(e) => handleNavigate(e, "/creators")}
              >
                Creators
              </Link>
              <Link href="/" className={classes.link} underline="none">
                About
              </Link>
              {!logged && (
                <Button
                  variant="outlined."
                  className={classes.loginBtn}
                  onClick={(e) => handleNavigate(e, "/login")}
                >
                  Login/Register
                </Button>
              )}
              {logged && (
                <Button
                  variant="outlined"
                  className={clsx(classes.loginBtn, classes.profieBtn)}
                  onClick={(e) => handleNavigate(e, "/profile")}
                >
                  <img src="/images/profile-avatar.png" alt="" />
                  {userName}
                </Button>
              )}
            </Box>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: "none" }}
              className={classes.toggleBtn}
              onClick={openSidebar}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </CustomContainer>
      </AppBar>
    </Box>
  );
};

export default Navbar;
