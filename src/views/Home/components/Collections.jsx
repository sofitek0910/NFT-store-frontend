import React from 'react'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

import CustomContainer from 'components/CustomContainer'
import UnderlineButton from 'components/UnderlineButton'
import TitleBox from 'components/TitleBox'
import CollectionCard from 'components/CollectionCard'

import styles from 'assets/jss/views/homeStyles'

const useStyles = makeStyles(styles)

const Collections = () => {

  const classes = useStyles()

  const collections = [
    {
      title: 'Doodles',
      price: '13.37 ETH',
      profit: -18.72,
      image: 'collection-card-1.png',
      type: 'Art'
    },
    {
      title: 'Rumble Kong League',
      price: '0.8 ETH',
      profit: 25.2,
      image: 'collection-card-2.png',
      type: 'Sport'
    },
    {
      title: 'CryptoPunks',
      price: '—',
      profit: -52.10,
      image: 'collection-card-3.png',
      type: 'Art'
    },
    {
      title: 'Bored Ape Yacht Club',
      price: '89.49 ETH',
      profit: 25.44,
      image: 'collection-card-4.png',
      type: 'Art'
    },
    {
      title: 'Azuki',
      price: '11.99 ETH',
      profit: 156.83,
      image: 'collection-card-5.png',
      type: 'Art'
    },
    {
      title: 'Dooplicator',
      price: '3.84 ETH',
      profit: 40.26,
      image: 'collection-card-6.png',
      type: 'Art'
    },
    {
      title: 'Art Blocks Curated',
      price: '—',
      profit: 65.39,
      image: 'collection-card-7.png',
      type: 'Art'
    },
    {
      title: 'Mutant Ape Yacht Club',
      price: '18.37 ETH',
      profit: -10.29,
      image: 'collection-card-8.png',
      type: 'Art'
    },
    {
      title: 'McLaren MSO LAB Ge…',
      price: '2.99 ETH',
      profit: 22.39,
      image: 'collection-card-9.png',
      type: 'Sport'
    }
  ]

  return (
    <Box className={classes.collections}>
      <CustomContainer>
        <Box display='flex' alignItems='end' justifyContent='space-between' className={classes.collectionsTitle}>
          <Box>
            <TitleBox
              subTitle="Top trending"
              title="Collections."
            />
            <Typography variant='body1' color='#777684' sx={{ marginTop: '16px' }}>
              Enjoy! the latest hot collections.
            </Typography>
          </Box>
          <UnderlineButton>
            View Collections
          </UnderlineButton>
        </Box>
        <Grid container spacing={4}>
          {
            collections.map((collection) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={collection.title}>
                <CollectionCard collection={collection} />
              </Grid>
            ))
          }
        </Grid>
      </CustomContainer>
    </Box>
  )
}

export default Collections
