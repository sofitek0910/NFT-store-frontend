import React from 'react'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import TitleBox from 'components/TitleBox'
import CustomContainer from 'components/CustomContainer'
import CategoryCard from 'components/CategoryCard'
import UnderlineButton from 'components/UnderlineButton'

import styles from 'assets/jss/views/homeStyles'

const useStyles = makeStyles(styles)

const Categories = () => {

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
    }
  ]

  return (
    <Box className={classes.categories}>
      <Box display='flex' justifyContent='center' className={classes.commonTitle}>
        <TitleBox
          subTitle="Explore by category"
          title="Browse Categories."
          textAlign='center'
          color='yellow'
        />
      </Box>
      <CustomContainer>
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
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
                All Collectibles
              </UnderlineButton>
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  )
}

export default Categories
