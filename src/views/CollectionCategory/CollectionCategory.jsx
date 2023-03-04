import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Divider from "@mui/material/Divider";

import CustomContainer from "components/CustomContainer";
import Newsletter from "components/Newsletter";
import UnderlineButton from "components/UnderlineButton";
import CustomButton from "components/CustomButton";
import StyledBox from "components/StyledBox";
import TitleBox from "components/TitleBox";
import FilterBox from "components/FilterBox";
import RecentCard from "components/RecentCard";

import styles from "assets/jss/views/collectionCategoryStyles";
import { getUserNFTs } from "Flow";

const useStyles = makeStyles(styles);

const CollectionCategory = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { category } = useParams();

  const [anchorEl, setAnchorEl] = useState(null);
  const [userNfts, setUserNfts] = useState([]);
  const open = Boolean(anchorEl);

  const handleOpenFilter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const getNFTs = async () => {
      const data = await getUserNFTs(process.env.REACT_APP_OWNERACCOUNT);
      if (data) {
        let dataArray = Object.values(data);
        setUserNfts(dataArray);
      }
    };
    getNFTs();
  }, []);

  const path = window.location.pathname;
  const lastIndex = path.lastIndexOf("/");
  const collectionName = path.slice(lastIndex + 1);
  // console.log(collectionName);

  const nftsForSpecifiCollection = userNfts.filter((nft) => {
    return nft?.name === collectionName;
  });

  // console.log("nftsForSpecifiCollection", nftsForSpecifiCollection);

  let singleNft;
  nftsForSpecifiCollection.map((nft) => {
    singleNft = nft;
    return singleNft;
  });

  // const lists = [
  //   {
  //     title: "Doodle #6920",
  //     username: "@Doodles",
  //     image: "list-1.png",
  //     eth: 14,
  //     price: "$15,807.40",
  //   },
  //   {
  //     title: "Kong #2092",
  //     username: "@Rumble Kong League",
  //     image: "list-2.png",
  //     eth: 20,
  //     price: "$22,582.00",
  //   },
  //   {
  //     title: "Day 84",
  //     username: "@Mark Rise",
  //     image: "list-3.png",
  //     eth: 2,
  //     price: "$2,327.57",
  //   },
  //   {
  //     title: "Invisible Friends #287",
  //     username: "@Invisible Friends",
  //     image: "list-4.png",
  //     eth: 4.25,
  //     price: "$4,798.68",
  //   },
  // ];

  return (
    <Box>
      <StyledBox className={classes.header} mx="auto"></StyledBox>
      <CustomContainer sx={{ marginBottom: "120px" }}>
        <Box className={classes.contents}>
          <Box sx={{ marginBottom: "22px" }}>
            <img
              src={singleNft?.data.artistImage}
              alt=""
              className={classes.mainLogo}
            />
          </Box>
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TitleBox
                subTitle={`By ${singleNft?.name}`}
                title={singleNft?.name}
                color="info"
              />
              <Typography
                variant="body1"
                sx={{ marginTop: "16px", marginBottom: "8px" }}
                color="#777684"
              >
                {singleNft?.description}
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
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src="/images/icons/etherscan-logo-circle.png"
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
              </Box>

              <Box
                className={classes.infos}
                display="flex"
                sx={{ marginTop: "50px", width: "fit-content" }}
                ml="auto"
              >
                <Box sx={{ marginRight: "50px" }}>
                  <Typography
                    variant="h6"
                    align="center"
                    color="#0F0E36"
                    sx={{ fontSize: "24px", lineHeight: "1" }}
                  >
                    10.0k
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    color="#777684"
                    sx={{ lineHeight: "1", marginTop: "5px" }}
                  >
                    items
                  </Typography>
                </Box>

                <Box sx={{ marginRight: "50px" }}>
                  <Typography
                    variant="h6"
                    align="center"
                    color="#0F0E36"
                    sx={{ fontSize: "24px", lineHeight: "1" }}
                  >
                    5.2k
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    color="#777684"
                    sx={{ lineHeight: "1", marginTop: "5px" }}
                  >
                    Owners
                  </Typography>
                </Box>

                <Box sx={{ marginRight: "50px" }}>
                  <Typography
                    variant="h6"
                    align="center"
                    color="#0F0E36"
                    sx={{ fontSize: "24px", lineHeight: "1" }}
                  >
                    13.55
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    color="#777684"
                    sx={{ lineHeight: "1", marginTop: "5px" }}
                  >
                    Floor Price
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    align="center"
                    color="#0F0E36"
                    sx={{ fontSize: "24px", lineHeight: "1" }}
                  >
                    141.2k
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    color="#777684"
                    sx={{ lineHeight: "1", marginTop: "5px" }}
                  >
                    Total Volume
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            display="flex"
            sx={{ marginTop: "50px", marginBottom: "50px" }}
            flexWrap="wrap"
          >
            <Box className={classes.filterBox}>
              <CustomButton
                sx={{
                  minWidth: "unset !important",
                  padding: "0 !important",
                  width: "50px",
                  height: "50px",
                  marginBottom: "8px",
                }}
              >
                <img
                  src="/images/icons/filter.png"
                  alt=""
                  width="24px"
                  height="17px"
                />
              </CustomButton>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
                sx={{
                  height: "50px",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <CustomButton
                  sx={{
                    paddingLeft: "20px !important",
                    paddingRight: "20px !important",
                  }}
                >
                  Items
                </CustomButton>
                <CustomButton
                  sx={{
                    paddingLeft: "20px !important",
                    paddingRight: "20px !important",
                  }}
                >
                  Activity
                </CustomButton>
              </ButtonGroup>
            </Box>

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
                Price Low to High
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
                  Price Low to High
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
                options={["Buy Now", "On Auction", "Buy with Card"]}
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
                options={["Buy Now", "On Auction", "Buy with Card"]}
              />
              <FilterBox
                title="Quantity"
                options={["Buy Now", "On Auction", "Buy with Card"]}
              />
              <FilterBox
                title="Currency"
                options={["Buy Now", "On Auction", "Buy with Card"]}
              />
              <Divider
                sx={{
                  borderColor: "#EBEAEF",
                  borderWidth: "1px",
                  margin: "10px 0",
                }}
              />
              <FilterBox
                title="Background"
                options={["Buy Now", "On Auction", "Buy with Card"]}
                count={33}
              />
              <FilterBox
                title="Body"
                options={["Buy Now", "On Auction", "Buy with Card"]}
                count={55}
              />
              <FilterBox
                title="Face"
                options={["Buy Now", "On Auction", "Buy with Card"]}
                count={56}
              />
              <FilterBox
                title="Hair"
                options={["Buy Now", "On Auction", "Buy with Card"]}
                count={73}
              />
              <FilterBox
                title="Head"
                options={["Buy Now", "On Auction", "Buy with Card"]}
                count={45}
              />
              <FilterBox
                title="Piercing"
                options={["Buy Now", "On Auction", "Buy with Card"]}
                count={3}
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
                {nftsForSpecifiCollection?.map((item, index) => (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={item.title}>
                    <RecentCard
                      data={item}
                      size="small"
                      handleButton={() =>
                        navigate(`/collections/${category}/${item.nftId}`)
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

export default CollectionCategory;
