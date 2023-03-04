import React, { useRef } from 'react'
import { makeStyles } from "@mui/styles";
import Carousel from "react-multi-carousel";

import Box from '@mui/material/Box';

import CustomContainer from 'components/CustomContainer'
import UnderlineButton from 'components/UnderlineButton'
import TitleBox from 'components/TitleBox'
import RecentCard from 'components/RecentCard'
import CustomButton from 'components/CustomButton'

import "react-multi-carousel/lib/styles.css";
import styles from 'assets/jss/views/homeStyles'

const useStyles = makeStyles(styles)

const RecentlyListed = () => {

  const classes = useStyles()

  const carouselRef = useRef()

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  const lists = [
    {
      title: 'Doodle #6920',
      username: '@Doodles',
      type: 'Art',
      image: 'list-1.png',
      eth: 14,
      price: '$15,807.40'
    },
    {
      title: 'Kong #2092',
      username: '@Rumble Kong League',
      type: 'Sport',
      image: 'list-2.png',
      eth: 20,
      price: '$22,582.00'
    },
    {
      title: 'Day 84',
      username: '@Mark Rise',
      type: 'Art',
      image: 'list-3.png',
      eth: 2,
      price: '$2,327.57'
    },
    {
      title: 'Invisible Friends #287',
      username: '@Invisible Friends',
      type: 'Art',
      image: 'list-4.png',
      eth: 4.25,
      price: '$4,798.68'
    }
  ]

  return (
    <Box className={classes.notableDrops} mx='auto'>
      <CustomContainer>
        <Box display='flex' alignItems='end' flexWrap='wrap' justifyContent='space-between' sx={{ marginBottom: '50px' }}>
          <Box>
            <TitleBox
              subTitle='Digital art for sale'
              title='Recently Listed.'
              color='info'
            />
          </Box>
          <Box className={classes.carouselControl}>
            <CustomButton onClick={() => carouselRef.current.previous()}>
              <img src="/images/prev.png" alt="" />
            </CustomButton>
            <CustomButton onClick={() => carouselRef.current.next()}>
              <img src="/images/next.png" alt="" />
            </CustomButton>
          </Box>
        </Box>
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          arrows={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          containerClass={classes.recentlyListCarousel}
        >
          {
            lists.map((item) => (
              <Box key={item.title} sx={{ padding: '0 12.5px' }}>
                <RecentCard data={item} />
              </Box>
            ))
          }
        </Carousel>
        <Box sx={{ marginTop: '50px' }}>
          <UnderlineButton>
            Discover Artwork
          </UnderlineButton>
        </Box>
      </CustomContainer>
    </Box>
  )
}

export default RecentlyListed
