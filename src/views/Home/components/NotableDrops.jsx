import React from 'react'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'

import CustomContainer from 'components/CustomContainer'
import UnderlineButton from 'components/UnderlineButton'
import TitleBox from 'components/TitleBox'

import DropCard from 'components/DropCard'

import styles from 'assets/jss/views/homeStyles'

const useStyles = makeStyles(styles)

const NotableDrops = () => {

  const classes = useStyles()

  const drops = [
    {
      title: 'Bball Buddies',
      username: '@Trailblazers',
      time: '20h 30m 08s',
      date: '22 Jun 2022',
      image: 'drop-1.png',
      type: 'Art'
    },
    {
      title: 'Gooners',
      username: '@ArsenalFC',
      time: '5d 20h 40m',
      date: '26 Jun 2022',
      image: 'drop-2.png',
      type: 'Sport'
    },
    {
      title: 'Nifty Cats',
      username: '@Alex Echo',
      time: '10d 20h 40m',
      date: '01 Aug 2022',
      image: 'drop-3.png',
      type: 'Art'
    },
  ]

  return (
    <Box className={classes.notableDrops} mx='auto'>
      <Box display='flex' justifyContent='center' sx={{ marginBottom: '50px' }}>
        <TitleBox
          subTitle='Coming soon…'
          title='Notable Drops.'
          textAlign='center'
          color='info'
        />
      </Box>
      <CustomContainer>
        <Grid container spacing={3} sx={{justifyContent: 'center'}}>
          {
            drops.map((drop) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={drop.title}>
                <DropCard data={drop} />
              </Grid>
            ))
          }
          <Grid item xs={12}>
            <Box mt={3} justifyContent='center' display='flex'>
              <UnderlineButton>
                Coming Soon
              </UnderlineButton>
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </Box>
  )
}

export default NotableDrops
