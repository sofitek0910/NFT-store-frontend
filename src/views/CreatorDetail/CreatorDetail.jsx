import React, { useState, useRef } from 'react'
import { makeStyles } from "@mui/styles";
import Carousel from "react-multi-carousel";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import CustomContainer from 'components/CustomContainer'
import Newsletter from 'components/Newsletter'
import UnderlineButton from 'components/UnderlineButton'
import CustomButton from 'components/CustomButton';
import StyledBox from 'components/StyledBox'
import TitleBox from 'components/TitleBox';
import CollectionDetailCard from 'components/CollectionDetailCard'
import RecentCard from 'components/RecentCard'

import ComingSoon from './compoenents/ComingSoon'
import About from './compoenents/About'

import "react-multi-carousel/lib/styles.css";
import styles from 'assets/jss/views/creatorDetailStyles'

const useStyles = makeStyles(styles)

const CreatorDetail = () => {

  const classes = useStyles()

  const collectionRef = useRef()
  const listRef = useRef()

  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

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

  const collections = [
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
    }
  ]

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
    <Box>
      <StyledBox className={classes.header} mx='auto'>
      </StyledBox>
      <CustomContainer sx={{ marginBottom: '120px' }}>
        <Box className={classes.contents}>
          <Box sx={{ marginBottom: '22px' }}>
            <img src="/images/creator-avatar.png" alt="" className={classes.mainLogo} />
          </Box>
          <Grid container spacing={3} justifyContent='space-between'>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TitleBox
                subTitle='Artist'
                title='Alex Echo.'
                color='primary'
              />
              <Typography variant='body1' sx={{ marginTop: '16px', marginBottom: '8px' }} color='#777684'>
                Alex Echo has created artwork professionally for forty years,
                and has placed his works in the collections of some of the world’s top…
              </Typography>
              <Button
                variant='text'
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ color: '#0F0E36', textTransform: 'none', padding: '0', fontSize: '16px', fontWeight: '400' }}
              >
                See more
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box className={classes.socialLinks} textAlign='right'>
                <CustomButton sx={{ minWidth: 'unset !important', padding: '0 !important', width: '50px', height: '50px', marginLeft: '10px', marginBottom: '8px' }}>
                  <img src="/images/icons/iconmonstr-globe.png" alt="" width='20px' height='20px' />
                </CustomButton>
                <CustomButton sx={{ minWidth: 'unset !important', padding: '0 !important', width: '50px', height: '50px', marginLeft: '10px', marginBottom: '8px' }}>
                  <img src="/images/icons/iconmonstr-discord.png" alt="" width='20px' height='14.3px' />
                </CustomButton>
                <CustomButton sx={{ minWidth: 'unset !important', padding: '0 !important', width: '50px', height: '50px', marginLeft: '10px', marginBottom: '8px' }}>
                  <img src="/images/icons/iconmonstr-twitter.png" alt="" width='20px' height='16.25px' />
                </CustomButton>
                <CustomButton sx={{ minWidth: 'unset !important', padding: '0 !important', width: '50px', height: '50px', marginLeft: '10px', marginBottom: '8px' }}>
                  <img src="/images/icons/iconmonstr-instagram.png" alt="" width='20px' height='20px' />
                </CustomButton>
                <CustomButton sx={{ marginLeft: '10px', marginBottom: '8px', paddingLeft: '20px !important', paddingRight: '20px !important' }}>
                  <img src="/images/icons/iconmonstr-share.png" alt="" width='20px' height='20px' />&nbsp;
                  Share
                </CustomButton>
                <CustomButton sx={{ marginLeft: '10px', marginBottom: '8px', paddingLeft: '20px !important', paddingRight: '20px !important' }}>
                  <img src="/images/icons/iconmonstr-favorite.png" alt="" width='20px' height='20px' />&nbsp;
                  362 Favourites
                </CustomButton>
              </Box>

              <Box className={classes.infos} display='flex' sx={{ marginTop: '50px', width: 'fit-content' }} ml='auto'>
                <Box sx={{ marginRight: '50px' }}>
                  <Typography variant='h6' align='center' color='#0F0E36' sx={{ fontSize: "24px", lineHeight: '1' }}>
                    10.0k
                  </Typography>
                  <Typography variant='body1' align='center' color='#777684' sx={{ lineHeight: '1', marginTop: '5px' }}>
                    items
                  </Typography>
                </Box>

                <Box sx={{ marginRight: '50px' }}>
                  <Typography variant='h6' align='center' color='#0F0E36' sx={{ fontSize: "24px", lineHeight: '1' }}>
                    25.2k
                  </Typography>
                  <Typography variant='body1' align='center' color='#777684' sx={{ lineHeight: '1', marginTop: '5px' }}>
                    Total Sales
                  </Typography>
                </Box>

                <Box sx={{ marginRight: '50px' }}>
                  <Typography variant='h6' align='center' color='#0F0E36' sx={{ fontSize: "24px", lineHeight: '1' }}>
                    21.4k
                  </Typography>
                  <Typography variant='body1' align='center' color='#777684' sx={{ lineHeight: '1', marginTop: '5px' }}>
                    Total Volume
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box className={classes.tabs} sx={{ marginTop: '50px', marginBottom: '40px' }}>
            <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Collection 4" />
              <Tab label="Comming Soon" />
              <Tab label="About" />
              <Tab label="Created" />
            </Tabs>
          </Box>

          <Box>
            <Box display='flex' alignItems='end' justifyContent='space-between' sx={{ marginBottom: '50px' }}>
              <Box>
                <TitleBox
                  subTitle="Alex Echo"
                  title="Collections."
                />
              </Box>
              <Box className={classes.carouselControl}>
                <CustomButton onClick={() => collectionRef.current.previous()}>
                  <img src="/images/prev.png" alt="" />
                </CustomButton>
                <CustomButton onClick={() => collectionRef.current.next()}>
                  <img src="/images/next.png" alt="" />
                </CustomButton>
              </Box>
            </Box>
            <Carousel
              ref={collectionRef}
              responsive={responsive}
              arrows={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              transitionDuration={500}
              containerClass={classes.carousel}
            >
              {
                collections.map((item) => (
                  <Box key={item.id} sx={{ padding: '0 15px' }}>
                    <CollectionDetailCard data={item} />
                  </Box>
                ))
              }
            </Carousel>
          </Box>
        </Box>
      </CustomContainer>
      <ComingSoon />
      <About />

      <Box sx={{ margin: '120px 0' }}>
        <CustomContainer>
          <Box display='flex' alignItems='end' justifyContent='space-between' sx={{ marginBottom: '50px' }}>
            <Box>
              <TitleBox
                subTitle="Digital art by Alex Echo"
                title="Recently Listed."
                color='info'
              />
            </Box>
            <Box className={classes.carouselControl}>
              <CustomButton onClick={() => listRef.current.previous()}>
                <img src="/images/prev.png" alt="" />
              </CustomButton>
              <CustomButton onClick={() => listRef.current.next()}>
                <img src="/images/next.png" alt="" />
              </CustomButton>
            </Box>
          </Box>
          <Carousel
            ref={listRef}
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            transitionDuration={500}
            containerClass={classes.carousel}
          >
            {
              lists.map((item) => (
                <Box key={item.title} sx={{ padding: '0 15px' }}>
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

      <Newsletter />
    </Box>
  )
}

export default CreatorDetail
