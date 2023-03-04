import React from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import CustomContainer from "components/CustomContainer";
import StyledBox from "components/StyledBox";

import styles from "assets/jss/views/authStyles";

const useStyles = makeStyles(styles);

const Terms = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <Box>
      <StyledBox
        className={clsx(classes.header, classes.signUpHeader)}
        mx="auto"
      >
        <CustomContainer>
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            alignItems="center"
          >
            <Box>
              <Typography variant="h3" color="#0F0E36">
                Terms & Conditions.
              </Typography>
            </Box>
          </Box>
        </CustomContainer>
      </StyledBox>
      <Box className={classes.contents}>
        <CustomContainer>
          <Box className={classes.form} mx="auto">
            <Box
              my={4}
              display="flex"
              justifyContent="center"
              position="relative"
              className={classes.orText}
            >
              <Typography variant="body1" color="rgba(119, 118, 132, 0.5)">
                Terms & conditions
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" className="terms">
              <Typography variant="body1" color="#777684">
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </li>
                  <li>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                  </li>
                  <li>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </li>
                  <li>
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet. It uses a dictionary of over
                    200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </li>
                </ul>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                color="#777684"
                align="center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Link
                  href="/"
                  sx={{
                    color: "#0F0E36",
                    display: "flex",
                    alignItems: "center",
                  }}
                  underline="none"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/signup");
                  }}
                >
                  Create an account &nbsp;&nbsp;
                  <img
                    src="/images/icons/iconmonstr-arrow-right-lined.png"
                    alt=""
                  />
                </Link>
              </Typography>
            </Box>
          </Box>
        </CustomContainer>
      </Box>
    </Box>
  );
};

export default Terms;
