import React, { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import CustomContainer from "components/CustomContainer";
import Newsletter from "components/Newsletter";
import UnderlineButton from "components/UnderlineButton";
import CustomButton from "components/CustomButton";
import { useNavigate } from "react-router-dom";
import { AppContext } from "context/AppContextProvider";
import styles from "assets/jss/views/collectionsStyles";
import SaleCollectionDetailCard from "components/SaleCollectionDetailCard";
import { getAllListedNFT } from "Flow";

const useStyles = makeStyles(styles);

const SaleCollection = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { logged } = useContext(AppContext);
  const [category, setCategory] = useState("Top");
  const [nftsSaleData, setNftsSaleData] = useState();
  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
    const getSaleNFTs = async () => {
      const result = await getAllListedNFT();
      if (result) {
        let data = Object.values(result);
        setNftsSaleData(data);
      }
    };

    getSaleNFTs();
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

  const collectibles = [
    {
      id: 1,
      name: "Doodles",
      username: "Doodles_LLC",
      text: "A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range…",
      type: "Art",
      image: "collectibles-1.png",
      avatar: "avatar-1.png",
    },
    {
      id: 2,
      name: "CryptoPunks",
      username: "CryptoPunks",
      text: "CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations…",
      type: "Sport",
      image: "collectibles-2.png",
      avatar: "avatar-2.png",
    },
    {
      id: 3,
      name: "Bored Ape Yacht Club",
      username: "YugaLabs",
      text: "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs - unique digital collectible…",
      type: "Art",
      image: "collectibles-3.png",
      avatar: "avatar-3.png",
    },
    {
      id: 4,
      name: "Azuki",
      username: "Team Azuki",
      text: "Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner…",
      type: "Art",
      image: "collectibles-4.png",
      avatar: "avatar-4.png",
    },
    {
      id: 5,
      name: "Dooplicator",
      username: "Doodles_LLC",
      text: "May 12th: Claiming starts June 21st: Claiming ends June 22nd: Trailer premiering @ NFT NYC…",
      type: "For Good",
      image: "collectibles-5.png",
      avatar: "avatar-5.png",
    },
    {
      id: 6,
      name: "God Hates NFTees",
      username: "SrPetersETH",
      text: "Because the best way to hate a collective is to join it. If you’ve not 4channer spirit, don’t buy this shit…",
      type: "Art",
      image: "collectibles-6.png",
      avatar: "avatar-6.png",
    },
    {
      id: 7,
      name: "Mutant Ape Yacht Club",
      username: "YugaLabs",
      text: "The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by… ",
      type: "Art",
      image: "collectibles-7.png",
      avatar: "avatar-7.png",
    },
    {
      id: 8,
      name: "Moonbirds",
      username: "PROOF_XYZ",
      text: "A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered…",
      type: "Art",
      image: "collectibles-8.png",
      avatar: "avatar-8.png",
    },
    {
      id: 9,
      name: "Art Blocks Curated",
      username: "ArtBlocks_Admin",
      text: "Art Blocks Curated is the most strictly curated offering in the Art Blocks product suite. Submissions are…",
      type: "Sport",
      image: "collectibles-9.png",
      avatar: "avatar-9.png",
    },
    {
      id: 10,
      name: "Clementines Nightmare",
      username: "Clementines-Nightmare",
      text: "Welcome to Clementine’s Nightmare! Clementine’s universe takes a one-of-a-kind turn for the worse…",
      type: "Gaming",
      image: "collectibles-10.png",
      avatar: "avatar-10.png",
    },
    {
      id: 11,
      name: "Mavia Land",
      username: "SkriceStudios",
      text: "Heroes of Mavia is a play-to-earn MMO Strategy game developed by Skrice Studios. The game takes place…",
      type: "Utility",
      image: "collectibles-11.png",
      avatar: "avatar-11.png",
    },
    {
      id: 12,
      name: "Dreamloops",
      username: "BitlectroLabs-Dreamloops",
      text: "As the first release from Bitlectro Labs, Dreamloops feature programmatically generated 8-bit musical loops...",
      type: "Music",
      image: "collectibles-12.png",
      avatar: "avatar-12.png",
    },
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
            Sale Collections.
          </Typography>
        </CustomContainer>
      </Box>
      <Box className={classes.contents}>
        <CustomContainer>
          <Grid container spacing={3}>
            {nftsSaleData?.map((data) =>
              Object.keys(data).map((keyName, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  key={data[keyName].tokenID}
                >
                  <SaleCollectionDetailCard data={data[keyName]} />
                </Grid>
              ))
            )}
          </Grid>
        </CustomContainer>
      </Box>
    </Box>
  );
};

export default SaleCollection;
