import React, { useState, useEffect, useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import CustomContainer from "components/CustomContainer";
import Newsletter from "components/Newsletter";
import UnderlineButton from "components/UnderlineButton";
import CollectionDetailCard from "components/CollectionDetailCard";
import CustomButton from "components/CustomButton";
import { useNavigate } from "react-router-dom";
import { AppContext } from "context/AppContextProvider";
import styles from "assets/jss/views/collectionsStyles";
import AdminCollectionDetailCard from "components/AdminCollectionDetailCard";
import { getUserNFTs } from "Flow";

const useStyles = makeStyles(styles);

const AdminCollection = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { logged } = useContext(AppContext);
  const [category, setCategory] = useState("Top");
  const [nftsData, setNftsData] = useState();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
    const getNFTs = async () => {
      const result = await getUserNFTs(process.env.REACT_APP_OWNERACCOUNT);
      if (result) {
        let data = Object.values(result);
        setNftsData(data);
      }
    };

    getNFTs();
  }, [logged]);
  const categories = [
    "Trending",
    "Top",
    "Art",
    "For Good",
    "Gaming",
    "Music",
    "Photography",
    "Sport",
    "Utility",
    "Virtual Worlds",
  ];

  return (
    <Box>
      <Box className={clsx(classes.header)} mx="auto">
        <CustomContainer>
          <Typography variant="h6" color="rgba(15,14,54,0.25)">
            Browse all collections
          </Typography>
          <Typography variant="h3" color="#0F0E36">
            <span>Explore All</span>
            <br />
            Collections.
          </Typography>
        </CustomContainer>
      </Box>
      <Box className={classes.contents}>
        <CustomContainer>
          <Grid container spacing={3}>
            {nftsData?.map((obj) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={obj.nftId}>
                <AdminCollectionDetailCard data={obj} />
              </Grid>
            ))}
          </Grid>
        </CustomContainer>
      </Box>
    </Box>
  );
};

export default AdminCollection;
