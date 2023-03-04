import React, { useRef } from 'react'
import { makeStyles } from "@mui/styles";
import Carousel from "react-multi-carousel";

import Box from '@mui/material/Box';

import CustomContainer from 'components/CustomContainer'
import UnderlineButton from 'components/UnderlineButton'
import TitleBox from 'components/TitleBox'
import CreatorCard from 'components/CreatorCard'
import CustomButton from 'components/CustomButton'

import "react-multi-carousel/lib/styles.css";
import styles from 'assets/jss/views/homeStyles'

const useStyles = makeStyles(styles)

const Creators = () => {

  const classes = useStyles()

  const carouselRef = useRef()

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

  return (
    <Box className={classes.collections}>
      <CustomContainer>
        <Box display='flex' alignItems='end' justifyContent='space-between' sx={{marginBottom: '50px'}}>
          <Box>
            <TitleBox
              subTitle="Meet the"
              title="Creators"
              color='primary'
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
          containerClass={classes.creatorCarousel}        
        >
          {
            creators.map((creator) => (
              <Box key={creator.id} sx={{ padding: '0 15px' }}>
                <CreatorCard data={creator} />
              </Box>
            ))
          }
        </Carousel>
        <Box sx={{ marginTop: '50px' }}>
          <UnderlineButton>
            All Creators
          </UnderlineButton>
        </Box>
      </CustomContainer>
    </Box>
  )
}

export default Creators
