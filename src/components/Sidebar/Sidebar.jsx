import React, { useContext } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import CloseIcon from "@mui/icons-material/Close";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

import { AppContext } from "context/AppContextProvider";

import styles from "assets/jss/components/sidebarStyles";

const useStyles = makeStyles(styles);

const Sidebar = (props) => {
  const { open, handleClose } = props;

  const { logged, userName } = useContext(AppContext);

  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigate = (e, url) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <Drawer anchor="left" open={open} onClose={handleClose}>
      <Box className={classes.wrapper}>
        <Box textAlign="right" p={2}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ color: "#0F0E36" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box display="block" p={2}>
          <Link
            href="/"
            className={classes.link}
            underline="none"
            onClick={(e) => handleNavigate(e, "/explore")}
          >
            Explore
          </Link>
          <Link
            href="/"
            className={classes.link}
            underline="none"
            onClick={(e) => handleNavigate(e, "/collections")}
          >
            Collections
          </Link>
          <Link
            href="/"
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
              variant="outlined"
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
      </Box>
    </Drawer>
  );
};

export default Sidebar;
