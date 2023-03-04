import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Carousel from "react-multi-carousel";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import CustomContainer from "components/CustomContainer";
import UnderlineButton from "components/UnderlineButton";
import CustomButton from "components/CustomButton";
import StyledBox from "components/StyledBox";
import TitleBox from "components/TitleBox";
import RecentCard from "components/RecentCard";

import CollapseDetail from "./components/CollapseDetail";

import "react-multi-carousel/lib/styles.css";
import styles from "assets/jss/views/collectionDetailStyles";
import { getUserNFTById } from "Flow";

const useStyles = makeStyles(styles);

const CollectionDetail = () => {
  const classes = useStyles();
  const carouselRef = useRef();
  const [nfts, setNfts] = useState();

  const path = window.location.pathname;
  const lastIndex = path.lastIndexOf("/");
  const nftId = path.slice(lastIndex + 1);
  // console.log("nftId", nftId);

  useEffect(() => {
    const getNFTs = async () => {
      const data = await getUserNFTById(
        process.env.REACT_APP_OWNERACCOUNT,
        nftId
      );
      if (data) {
        let dataArray = Object.values(data);
        setNfts(dataArray);
      }
    };
    getNFTs();
  }, []);

  var userNft;

  nfts?.map((nft) => {
    return (userNft = nft);
  });

  // console.log("userNft", userNft);

  const rows = [
    {
      id: 1,
      price: "13 WETH",
      usd: "$15,914.40",
      floor: "4% below",
      expiration: "1 day",
      from: "3D009",
    },
    {
      id: 2,
      price: "12.75 WETH",
      usd: "$15,608.30",
      floor: "6% below",
      expiration: "About 8 hours",
      from: "51A551",
    },
    {
      id: 3,
      price: "12.35 WETH",
      usd: "$15,118.62",
      floor: "9% below",
      expiration: "About 22 hours",
      from: "AidanTag",
    },
    {
      id: 4,
      price: "12.32 WETH",
      usd: "$15,081.90",
      floor: "9% below",
      expiration: "About 11 hours",
      from: "0z121",
    },
    {
      id: 5,
      price: "12.3 WETH",
      usd: "$15,057.41",
      floor: "9% below",
      expiration: "About 6 hours",
      from: "Sellingcheaper…",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const lists = [
    {
      title: "Doodle #6920",
      username: "@Doodles",
      type: "Art",
      image: "list-1.png",
      eth: 14,
      price: "$15,807.40",
    },
    {
      title: "Kong #2092",
      username: "@Rumble Kong League",
      type: "Sport",
      image: "list-2.png",
      eth: 20,
      price: "$22,582.00",
    },
    {
      title: "Day 84",
      username: "@Mark Rise",
      type: "Art",
      image: "list-3.png",
      eth: 2,
      price: "$2,327.57",
    },
    {
      title: "Invisible Friends #287",
      username: "@Invisible Friends",
      type: "Art",
      image: "list-4.png",
      eth: 4.25,
      price: "$4,798.68",
    },
  ];

  return (
    <Box>
      <CustomContainer>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <Box className={classes.avatarSection}>
            <Box display="flex">
              <img src={userNft?.media} alt="" width="100%" />
            </Box>
            <Divider
              sx={{
                borderColor: "#EBEAEF",
                borderWidth: "1px",
                margin: "30px 0 10px",
              }}
            />
            <CollapseDetail title="Properties" />
            <Divider
              sx={{
                borderColor: "#EBEAEF",
                borderWidth: "1px",
                margin: "10px 0 10px",
              }}
            />
            <CollapseDetail title="About Doodles" />
            <Divider
              sx={{
                borderColor: "#EBEAEF",
                borderWidth: "1px",
                margin: "10px 0 10px",
              }}
            />
            <CollapseDetail title="Details" />
            <Divider
              sx={{
                borderColor: "#EBEAEF",
                borderWidth: "1px",
                margin: "10px 0 10px",
              }}
            />
          </Box>

          <Box className={classes.detailSection}>
            <Box
              display="flex"
              alignItems="center"
              sx={{ marginBottom: "22px" }}
            >
              <CustomButton
                sx={{
                  minWidth: "unset !important",
                  padding: "0 !important",
                  width: "50px",
                  height: "50px",
                }}
              >
                <img
                  src="/images/icons/iconmonstr-synchronization.png"
                  alt=""
                  width="26.7px"
                  height="20px"
                />
              </CustomButton>
              <CustomButton sx={{ marginLeft: "10px" }}>
                <img
                  src="/images/icons/iconmonstr-share.png"
                  alt=""
                  width="20px"
                  height="20px"
                />
                &nbsp; Share
              </CustomButton>
              <Typography variant="body1" className={classes.mark}>
                Art
              </Typography>
            </Box>

            <Box>
              <TitleBox
                subTitle={userNft?.name}
                title={userNft?.name}
                color="info"
              />
              <Typography
                variant="body1"
                sx={{ marginTop: "16px", marginBottom: "8px" }}
                color="#777684"
              >
                {userNft?.description}
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
            </Box>

            <Divider
              sx={{
                borderColor: "#EBEAEF",
                borderWidth: "1px",
                margin: "30px 0",
              }}
            />

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <Box display="flex" alignItems="center" mb={1}>
                <Box className={classes.ethPrice}>
                  <Typography variant="body1" color="#fff">
                    14
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.currencyMark}
                    color="#fff"
                  >
                    ETH
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  color="#777684"
                  sx={{ lineHeight: "1", marginLeft: "20px" }}
                >
                  $15,807.40
                </Typography>
              </Box>

              <Box mb={1}>
                <CustomButton dark sx={{ marginRight: "10px" }}>
                  Buy Now
                </CustomButton>
                <CustomButton>Make Offer</CustomButton>
              </Box>
            </Box>

            <Box sx={{ marginTop: "30px" }}>
              <Typography
                variant="body1"
                color="#777684"
                sx={{ lineHeight: "1" }}
              >
                Sale ends July 29, 2022 at 3:57am GMT+1
              </Typography>
              <Box display="flex" sx={{ marginTop: "12px" }}>
                <Box className={classes.timeCell}>
                  <Typography variant="h6" color="#0F0E36">
                    20
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#777684"
                    sx={{ lineHeight: "1" }}
                  >
                    Days
                  </Typography>
                </Box>

                <Box className={classes.timeCell}>
                  <Typography variant="h6" color="#0F0E36">
                    11
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#777684"
                    sx={{ lineHeight: "1" }}
                  >
                    Hours
                  </Typography>
                </Box>

                <Box className={classes.timeCell}>
                  <Typography variant="h6" color="#0F0E36">
                    47
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#777684"
                    sx={{ lineHeight: "1" }}
                  >
                    Minutes
                  </Typography>
                </Box>
                <Box className={classes.timeCell}>
                  <Typography variant="h6" color="#0F0E36">
                    30
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#777684"
                    sx={{ lineHeight: "1" }}
                  >
                    Seconds
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider
              sx={{
                borderColor: "#EBEAEF",
                borderWidth: "1px",
                margin: "30px 0",
              }}
            />

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <Box display="flex" alignItems="center" mb={1}>
                <Avatar
                  alt="Remy Sharp"
                  src="/images/creators/owner-1.png"
                  sx={{ width: "50px", height: "50px" }}
                />
                <Box ml={2}>
                  <Typography
                    variant="body1"
                    color="#777684"
                    sx={{ lineHeight: "1", marginBottom: "4" }}
                  >
                    Owner
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#0F0E36"
                    sx={{ lineHeight: "1" }}
                  >
                    doodle-holder
                  </Typography>
                </Box>
              </Box>

              <Box mb={1}>
                <CustomButton sx={{ marginRight: "10px" }}>
                  <img
                    src="/images/icons/iconmonstr-eye-lined.png"
                    alt=""
                    width="20px"
                    height="14px"
                  />
                  &nbsp; 1.6k Views
                </CustomButton>
                <CustomButton>
                  <img
                    src="/images/icons/iconmonstr-favorite.png"
                    alt=""
                    width="20px"
                    height="18.3px"
                  />
                  &nbsp; 15 Favourites
                </CustomButton>
              </Box>
            </Box>

            <Divider
              sx={{
                borderColor: "#EBEAEF",
                borderWidth: "1px",
                margin: "20px 0",
              }}
            />

            <Box>
              <CustomButton
                sx={{ marginRight: "10px" }}
                className={classes.activeBtn}
              >
                Offers
              </CustomButton>
              <CustomButton>Activity</CustomButton>
            </Box>

            <Box className={classes.table} mt={1}>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Price</TableCell>
                      <TableCell>USD</TableCell>
                      <TableCell>Floor Diff.</TableCell>
                      <TableCell>Expiration</TableCell>
                      <TableCell>From</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.price}
                        </TableCell>
                        <TableCell>{row.usd}</TableCell>
                        <TableCell>{row.floor}</TableCell>
                        <TableCell>{row.expiration}</TableCell>
                        <TableCell>{row.from}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </CustomContainer>

      <StyledBox
        className={classes.browseCollection}
        mx="auto"
        sx={{ marginTop: "120px" }}
      >
        <CustomContainer>
          <Box
            display="flex"
            alignItems="end"
            flexWrap="wrap"
            justifyContent="space-between"
            sx={{ marginBottom: "50px" }}
          >
            <Box>
              <TitleBox
                subTitle="More from the collection"
                title="Browse Collection."
                color="info"
              />
            </Box>
            <Box className={classes.carouselControl}>
              <CustomButton onClick={() => carouselRef.current.previous()}>
                <img src="/images/prev.png" alt="" />
              </CustomButton>
              <CustomButton onClick={() => carouselRef.current.next()}>
                <img src="/images/next.png" alt="" />
              </CustomButton>
            </Box>
          </Box>
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            transitionDuration={500}
            containerClass={classes.recentlyListCarousel}
          >
            {lists.map((item) => (
              <Box key={item.title} sx={{ padding: "0 12.5px" }}>
                <RecentCard data={item} />
              </Box>
            ))}
          </Carousel>
          <Box sx={{ marginTop: "50px" }}>
            <UnderlineButton>Discover Artwork</UnderlineButton>
          </Box>
        </CustomContainer>
      </StyledBox>
    </Box>
  );
};

export default CollectionDetail;
