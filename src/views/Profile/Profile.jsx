import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import { makeStyles } from "@mui/styles";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import CustomContainer from "components/CustomContainer";
import Newsletter from "components/Newsletter";
import UnderlineButton from "components/UnderlineButton";
import CustomButton from "components/CustomButton";
import StyledBox from "components/StyledBox";
import TitleBox from "components/TitleBox";
import FilterBox from "components/FilterBox";
import FilterBoxWallet from "components/FilterBox/FilterBoxWallet";
import RecentCard from "components/RecentCard";

import styles from "assets/jss/views/profileStyles";
import { AppContext } from "context/AppContextProvider";

const useStyles = makeStyles(styles);

const Profile = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userName, setUserName] = useState();

  const { logged } = useContext(AppContext);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    if (!logged) {
      navigate("/login");
    }
  }, [userName, logged]);
  const handleNavigate = (e, url) => {
    e.preventDefault();
    navigate(url);
  };
  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleOpenFilter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
  };

  const lists = [
    {
      title: "Doodle #6920",
      username: "@Doodles",
      image: "list-1.png",
      eth: 14,
      price: "$15,807.40",
    },
    {
      title: "Kong #2092",
      username: "@Rumble Kong League",
      image: "list-2.png",
      eth: 20,
      price: "$22,582.00",
    },
    {
      title: "Day 84",
      username: "@Mark Rise",
      image: "list-3.png",
      eth: 2,
      price: "$2,327.57",
    },
    {
      title: "Invisible Friends #287",
      username: "@Invisible Friends",
      image: "list-4.png",
      eth: 4.25,
      price: "$4,798.68",
    },
  ];

  return (
    <Box>
      <StyledBox className={classes.header} mx="auto"></StyledBox>
      <CustomContainer sx={{ marginBottom: "120px" }}>
        <Box className={classes.contents}>
          <Box sx={{ marginBottom: "22px" }}>
            <img
              src="/images/collection-avatar.png"
              alt=""
              className={classes.mainLogo}
            />
          </Box>

          <Grid container spacing={3} justifyContent="space-between">
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TitleBox subTitle={userName} title={userName} color="info" />
              <Typography
                variant="body1"
                sx={{ marginTop: "16px", marginBottom: "8px" }}
                color="#777684"
              >
                A community-driven collectibles project featuring art by Burnt
                Toast. Doodles come in a joyful range of colors, traits and
                sizes with a…
              </Typography>
              <Button
                variant="text"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  color: "#0F0E36",
                  textTransform: "none",
                  padding: "0",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                See more
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box className={classes.socialLinks} textAlign="right">
                <CustomButton
                  sx={{
                    minWidth: "unset !important",
                    padding: "0 !important",
                    width: "50px",
                    height: "50px",
                    marginLeft: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src="/images/icons/iconmonstr-globe.png"
                    alt=""
                    width="20px"
                    height="20px"
                  />
                </CustomButton>
                <CustomButton
                  sx={{
                    minWidth: "unset !important",
                    padding: "0 !important",
                    width: "50px",
                    height: "50px",
                    marginLeft: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src="/images/icons/iconmonstr-discord.png"
                    alt=""
                    width="20px"
                    height="14.3px"
                  />
                </CustomButton>
                <CustomButton
                  sx={{
                    minWidth: "unset !important",
                    padding: "0 !important",
                    width: "50px",
                    height: "50px",
                    marginLeft: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src="/images/icons/iconmonstr-twitter.png"
                    alt=""
                    width="20px"
                    height="16.25px"
                  />
                </CustomButton>
                <CustomButton
                  sx={{
                    minWidth: "unset !important",
                    padding: "0 !important",
                    width: "50px",
                    height: "50px",
                    marginLeft: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src="/images/icons/iconmonstr-instagram.png"
                    alt=""
                    width="20px"
                    height="20px"
                  />
                </CustomButton>
                <CustomButton sx={{ marginLeft: "10px", marginBottom: "8px" }}>
                  <img
                    src="/images/icons/iconmonstr-share.png"
                    alt=""
                    width="20px"
                    height="20px"
                  />
                  &nbsp; Share
                </CustomButton>
                <CustomButton
                  sx={{ marginLeft: "10px", marginBottom: "8px" }}
                  dark
                  onClick={() => navigate("/account")}
                >
                  Edit Profile
                </CustomButton>
              </Box>
            </Grid>
          </Grid>
          <Box
            className={classes.tabs}
            sx={{ marginTop: "50px", marginBottom: "40px" }}
          >
            <Tabs
              value={tab}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Featured 10" />
              <Tab label="Collected 61" />
              <Tab label="Favourited  22" />
              <Tab label="Created" />
              <Tab label="Activity" />
              <Tab label="More" />
            </Tabs>
          </Box>

          <Box
            display="flex"
            sx={{ marginTop: "50px", marginBottom: "50px" }}
            flexWrap="wrap"
          >
            <CustomButton
              sx={{
                minWidth: "unset !important",
                padding: "0 !important",
                width: "50px",
                height: "50px",
                marginBottom: "8px",
                marginRight: "10px",
              }}
            >
              <img
                src="/images/icons/filter.png"
                alt=""
                width="24px"
                height="17px"
              />
            </CustomButton>

            <Box className={classes.searchInput} flex={1}>
              <OutlinedInput
                startAdornment={<img src="/images/loupe.png" alt="" />}
                fullWidth
                placeholder="Search by name or attribute"
              />
            </Box>
            <Box className={classes.dropdownBtn}>
              <CustomButton
                fullWidth
                onClick={handleOpenFilter}
                sx={{
                  paddingLeft: "20px !important",
                  paddingRight: "20px !important",
                }}
              >
                Recently received
                <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
              </CustomButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseFilter}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleCloseFilter}>
                  Recently received
                </MenuItem>
                <MenuItem onClick={handleCloseFilter}>Option 2</MenuItem>
              </Menu>
            </Box>
          </Box>

          <Box display="flex" flexWrap="wrap">
            <Box className={classes.filterOptions}>
              <Divider
                sx={{
                  borderColor: "#EBEAEF",
                  borderWidth: "1px",
                  margin: "10px 0",
                }}
              />
              <FilterBox
                title="Status"
                options={["Buy Now", "On Auction", "New", "Has Offers"]}
              />
              <Divider
                sx={{
                  borderColor: "#EBEAEF",
                  borderWidth: "1px",
                  margin: "10px 0",
                }}
              />
              <FilterBox
                title="Price"
                options={["Buy Now", "On Auction", "New", "Has Offers"]}
              />
              <FilterBox
                title="Quantity"
                options={["Buy Now", "On Auction", "New", "Has Offers"]}
              />
              <FilterBox
                title="Collections"
                options={["Buy Now", "On Auction", "New", "Has Offers"]}
              />
              <FilterBox
                title="Chains"
                options={["Buy Now", "On Auction", "New", "Has Offers"]}
              />
              <FilterBox
                title="Category"
                options={["Buy Now", "On Auction", "New", "Has Offers"]}
              />
              <FilterBox
                title="Currency"
                options={["Buy Now", "On Auction", "New", "Has Offers"]}
              />
              <Divider
                sx={{
                  borderColor: "#EBEAEF",
                  borderWidth: "1px",
                  margin: "10px 0",
                }}
              />
            </Box>

            <Box className={classes.cardsWrapper} ml="auto">
              <Grid container spacing={2}>
                {lists.map((item, index) => (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={item.title}>
                    <RecentCard
                      data={item}
                      size="small"
                      handleButton={() =>
                        navigate(`/collections/CryptoPunks/${index}`)
                      }
                    />
                  </Grid>
                ))}
                <Grid item xs={12} sx={{ marginTop: "34px" }}>
                  <UnderlineButton>Load More</UnderlineButton>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </CustomContainer>
      <Newsletter />
    </Box>
  );
};

export default Profile;
