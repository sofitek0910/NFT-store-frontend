import React from "react";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CustomContainer from "components/CustomContainer";
import UnderlineButton from "components/UnderlineButton";

import styles from "assets/jss/views/homeStyles";

const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header} mx="auto">
      <CustomContainer>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box className={classes.headerTextBox}>
            <Typography variant="h6" color="rgba(15,14,54,0.25)">
              Where desires are transactional
            </Typography>
            <Typography variant="h3" color="#0F0E36">
              <span>Discover</span>&nbsp;Rare Collections <span>Of</span>{" "}
              Digital Art.
            </Typography>
            <Typography variant="body1" color="#777684">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              condimentum magna justo, in sagittis eros tempor vitae.
            </Typography>

            <UnderlineButton>Discover Artwork</UnderlineButton>
          </Box>
          <Box className={classes.headerImgBox}>
            <img src="/images/landing-banner.png" alt="" />
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Header;
