import React from 'react'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

import CustomContainer from 'components/CustomContainer'
import Newsletter from 'components/Newsletter'
import UnderlineButton from 'components/UnderlineButton'
import CategoryCard from 'components/CategoryCard'

import styles from 'assets/jss/views/exploreStyles'

const useStyles = makeStyles(styles)

const Explore = () => {

  const classes = useStyles()

  const categories = [
    {
      title: 'Art Collectibles',
      image: 'art-collecibles.png',
      type: 'Art'
    },
    {
      title: 'Sport Collectibles ',
      image: 'sport-collectibles.png',
      type: 'Sport'
    },
    {
      title: 'For Good Collectibles ',
      image: 'art-good-collectibles.png',
      type: 'For Good'
    },
    {
      title: 'Music',
      image: 'music-category.png',
      type: 'Music'
    },
    {
      title: 'Gaming',
      image: 'gaming-category.png',
      type: 'Gaming'
    },
    {
      title: 'Utility',
      image: 'utility-category.png',
      type: 'Utility'
    },
    {
      title: 'Photography',
      image: 'photography-category.png',
      type: 'Photography'
    },
    {
      title: 'Virtual World',
      image: 'virtual-world-category.png',
      type: 'Virtual World'
    }
  ]

  return (
    <Box>
      <Box className={classes.header} mx='auto'>
        <CustomContainer>
          <Typography variant='h6' color='rgba(15,14,54,0.25)'>
            Explore by category
          </Typography>
          <Typography variant='h3' color="#0F0E36">
            <span>Browse All</span><br />Categories.
          </Typography>
        </CustomContainer>
      </Box>
      <Box className={classes.contents}>
        <CustomContainer>
          <Grid container spacing={3}>
            {
              categories.map((category) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={category.title}>
                  <CategoryCard category={category} />
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

export default Explore
