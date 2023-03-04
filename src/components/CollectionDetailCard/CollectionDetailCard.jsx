import React from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { mintNFTs } from "Flow";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import CustomButton from "components/CustomButton";

import styles from "assets/jss/components/collectionDetailCardStyles";

const useStyles = makeStyles(styles);

const CollectionDetailCard = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { data } = props;

  // const markClasses = clsx(classes.mark, {
  //   [classes.art]: data?.data.category === "Art",
  //   [classes.sport]: data?.data.category === "Sport",
  //   [classes.forGood]: data?.data.category === "For Good",
  //   [classes.music]: data?.data.category === "Music",
  //   [classes.gaming]: data?.data.category === "Gaming",
  //   [classes.utility]: data?.data.category === "Utility",
  //   [classes.photography]: data?.data.category === "Photography",
  //   [classes.virtualWorld]: data?.data.category === "Virtual World",
  // });
  // console.log("data", data);
  return (
    <Box className={classes.card} position="relative">
      <Box className={classes.cardMedia}>
        <img
          src={
            data?.metadata.data.artistCollectionAvatar
              ? data?.metadata.data.artistCollectionAvatar
              : data?.metadata.thumbnail
          }
          alt="media"
        />
      </Box>
      <Box
        className={classes.userInfo}
        display="flex"
        alignItems="center"
        sx={{ marginTop: "30px" }}
      >
        <Avatar
          alt={data.name}
          src={
            data?.metadata.data.artistImage
              ? data?.metadata.data.artistImage
              : data?.metadata.thumbnail
          }
          sx={{ width: "48px", height: "48px", marginRight: "15px" }}
        />
        <Box>
          <Typography variant="h6" color="#0F0E36">
            {data?.metadata.name}
          </Typography>
          <Typography variant="body1" color="#777684">
            {`by ${data?.metadata.data.artist}`}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.content}>
        <Typography
          variant="body1"
          color="#777684"
          sx={{ marginBottom: "20px" }}
        >
          {data?.metadata.description}
        </Typography>
        <CustomButton
          onClick={() => navigate(`/collections/${data.metadata.name}`)}
          dark
        >
          View Collection
        </CustomButton>
      </Box>
      {/* <Typography variant="body1" className={markClasses}>
        {data?.data.category}
      </Typography> */}
    </Box>
  );
};

export default CollectionDetailCard;
