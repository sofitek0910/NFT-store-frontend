import React, { useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import CustomButton from "components/CustomButton";

import styles from "assets/jss/components/collectionDetailCardStyles";
import ListNftForSale from "views/ListNftForSale";

const useStyles = makeStyles(styles);

const AdminCollectionDetailCard = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { data } = props;

  // const markClasses = clsx(classes.mark, {
  //   [classes.art]: data.type === "Art",
  //   [classes.sport]: data.type === "Sport",
  //   [classes.forGood]: data.type === "For Good",
  //   [classes.music]: data.type === "Music",
  //   [classes.gaming]: data.type === "Gaming",
  //   [classes.utility]: data.type === "Utility",
  //   [classes.photography]: data.type === "Photography",
  //   [classes.virtualWorld]: data.type === "Virtual World",
  // });

  const listNftHandler = (nftId) => {
    if (nftId && nftId != 0) {
      var id = nftId;
      navigate(`listNftForSale/${id}`, { state: { id } });
      // console.log("nft listed", nftId);
    }
  };
  return (
    <Box className={classes.card} position="relative">
      <Box className={classes.cardMedia}>
        <img src={data.media} alt="" />
      </Box>
      <Box
        className={classes.userInfo}
        display="flex"
        alignItems="center"
        sx={{ marginTop: "30px" }}
      >
        <Avatar
          alt={data.name}
          src={data.data.artistImage ? data.data.artistImage : data.media}
          sx={{ width: "48px", height: "48px", marginRight: "15px" }}
        />
        <Box>
          <Typography variant="h6" color="#0F0E36">
            {data.name}
          </Typography>
          <Typography variant="body1" color="#777684">
            {`by ${data.data.artist ? data.data.artist : data.name}`}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.content}>
        <Typography
          variant="body1"
          color="#777684"
          sx={{ marginBottom: "20px" }}
        >
          {data.description}
        </Typography>
        <CustomButton
          onClick={() => {
            listNftHandler(data.nftId);
          }}
          dark
        >
          List For Sale
        </CustomButton>
      </Box>
      {/* <Typography variant="body1" className={markClasses}>
        {data.type}
      </Typography> */}
    </Box>
  );
};

export default AdminCollectionDetailCard;
