import React from 'react'
import clsx from 'clsx'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

import CustomContainer from 'components/CustomContainer'
import Newsletter from 'components/Newsletter'
import UnderlineButton from 'components/UnderlineButton'
import CollectionDetailCard from 'components/CollectionDetailCard'

import styles from 'assets/jss/views/exploreStyles'

const useStyles = makeStyles(styles)

const Collectibles = () => {

  const classes = useStyles()

  const collectibles = [
    {
      id: 1,
      name: 'Doodles',
      username: 'Doodles_LLC',
      text: 'A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range…',
      type: 'Art',
      image: 'collectibles-1.png',
      avatar: 'avatar-1.png'
    },
    {
      id: 2,
      name: 'CryptoPunks',
      username: 'CryptoPunks',
      text: 'CryptoPunks launched as a fixed set of 10,000 items in mid-2017 and became one of the inspirations…',
      type: 'Art',
      image: 'collectibles-2.png',
      avatar: 'avatar-2.png'
    },
    {
      id: 3,
      name: 'Bored Ape Yacht Club',
      username: 'YugaLabs',
      text: 'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs - unique digital collectible…',
      type: 'Art',
      image: 'collectibles-3.png',
      avatar: 'avatar-3.png'
    },
    {
      id: 4,
      name: 'Azuki',
      username: 'Team Azuki',
      text: 'Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner…',
      type: 'Art',
      image: 'collectibles-4.png',
      avatar: 'avatar-4.png'
    },
    {
      id: 5,
      name: 'Dooplicator',
      username: 'Doodles_LLC',
      text: 'May 12th: Claiming starts June 21st: Claiming ends June 22nd: Trailer premiering @ NFT NYC…',
      type: 'Art',
      image: 'collectibles-5.png',
      avatar: 'avatar-5.png'
    },
    {
      id: 6,
      name: 'God Hates NFTees',
      username: 'SrPetersETH',
      text: 'Because the best way to hate a collective is to join it. If you’ve not 4channer spirit, don’t buy this shit…',
      type: 'Art',
      image: 'collectibles-6.png',
      avatar: 'avatar-6.png'
    },
    {
      id: 7,
      name: 'Mutant Ape Yacht Club',
      username: 'YugaLabs',
      text: 'The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by… ',
      type: 'Art',
      image: 'collectibles-7.png',
      avatar: 'avatar-7.png'
    },
    {
      id: 8,
      name: 'Moonbirds',
      username: 'PROOF_XYZ',
      text: 'A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered…',
      type: 'Art',
      image: 'collectibles-8.png',
      avatar: 'avatar-8.png'
    },
    {
      id: 9,
      name: 'Art Blocks Curated',
      username: 'ArtBlocks_Admin',
      text: 'Art Blocks Curated is the most strictly curated offering in the Art Blocks product suite. Submissions are…',
      type: 'Art',
      image: 'collectibles-9.png',
      avatar: 'avatar-9.png'
    },
  ]

  return (
    <Box>
      <Box className={clsx(classes.header, classes.collectibles)} mx='auto'>
        <CustomContainer>
          <Typography variant='h6' color='rgba(15,14,54,0.25)'>
            Explore by category
          </Typography>
          <Typography variant='h3' color="#0F0E36">
            <span>Browse Art</span><br />Collectibles.
          </Typography>
        </CustomContainer>
      </Box>
      <Box className={classes.contents}>
        <CustomContainer>
          <Grid container spacing={3}>
            {
              collectibles.map((item) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={item.id}>
                  <CollectionDetailCard data={item} />
                </Grid>
              ))
            }
            <Grid item xs={12}>
              <Box mt={3}>
                <UnderlineButton>
                  Load More
                </UnderlineButton>
              </Box>
            </Grid>
          </Grid>
        </CustomContainer>
      </Box>
      <Newsletter />
    </Box>
  )
}

export default Collectibles
