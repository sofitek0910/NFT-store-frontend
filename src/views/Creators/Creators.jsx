import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

import CustomContainer from 'components/CustomContainer'
import Newsletter from 'components/Newsletter'
import UnderlineButton from 'components/UnderlineButton'
import CustomButton from 'components/CustomButton';
import StyledBox from 'components/StyledBox'
import CreatorCard from 'components/CreatorCard'

import styles from 'assets/jss/views/creatorsStyles'

const useStyles = makeStyles(styles)

const Creators = () => {

  const classes = useStyles()

  const [category, setCategory] = useState('Trending')

  const categories = ['Trending', 'Top', 'Animator', 'Artist', 'Charity', 'Football Club', 'Illustrator', 'Musician', 'Photographer']

  const creators = [
    {
      id: 1,
      name: 'Mark Rise',
      job: 'Illustrator',
      avatar: 'avatar-1.png',
      price: '6.8k',
      more: 11,    
      images: [
        'creator-1.png', 'creator-1-1.png', 'creator-1-2.png', 'creator-1-3.png'
      ]
    },
    {
      id: 2,
      name: 'Nguyen Nhut',
      job: 'Animator',
      avatar: 'avatar-2.png',
      price: '75.8k',
      more: 82,
      images: [
        'creator-2.png', 'creator-2-1.png', 'creator-2-2.png', 'creator-2-3.png'
      ]
    },
    {
      id: 3,
      name: 'Alex Echo',
      job: 'Artist',
      avatar: 'avatar-3.png',
      price: '25.2k',
      more: 50,
      images: [
        'creator-3.png', 'creator-3-1.png', 'creator-3-2.png', 'creator-3-3.png'
      ]
    },
    {
      id: 4,
      name: 'FC Barcelona',
      job: 'Football Club',
      avatar: 'avatar-4.png',
      price: '125.5k',
      more: 66,
      images: [
        'creator-4.png', 'creator-4-1.png', 'creator-4-2.png', 'creator-4-3.png'
      ]
    }
  ]
  return (
    <Box>
      <StyledBox className={clsx(classes.header)} mx='auto'>
        <CustomContainer>
          <Typography variant='h6' color='rgba(15,14,54,0.25)'>
            Meet the creators
          </Typography>
          <Typography variant='h3' color="#0F0E36">
            <span>Explore All</span>&nbsp;Creators.
          </Typography>
        </CustomContainer>
      </StyledBox>

      <Box className={classes.contents}>
        <CustomContainer>
          <Grid container spacing={3}>

            <Grid item xs={12}>
              <Box mb={2}>
                {
                  categories.map((cell) => (
                    <CustomButton
                      sx={{ border: '0 !important', marginRight: '10px', marginBottom: '10px' }}
                      className={clsx({[classes.active]: category === cell})}
                      onClick={() => setCategory(cell)}
                      key={cell}
                    >
                      {cell}
                    </CustomButton>
                  ))
                }
              </Box>
            </Grid>
            {
              creators.filter((cell) => cell.job === category || category === 'Trending').map((item) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={item.id}>
                  <CreatorCard data={item} />
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

export default Creators
