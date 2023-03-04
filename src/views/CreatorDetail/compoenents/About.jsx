import React from 'react'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomContainer from 'components/CustomContainer'
import TitleBox from 'components/TitleBox';
import ReviewBox from 'components/ReviewBox'

import styles from 'assets/jss/views/creatorDetailStyles'

const useStyles = makeStyles(styles)

const About = () => {

  const classes = useStyles()

  return (
    <Box sx={{ marginTop: '120px' }}>
      <CustomContainer>
        <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap' sx={{ marginBottom: '120px' }}>
          <Box className={classes.aboutDetail}>
            <TitleBox
              subTitle='Alex Echo'
              title='About.'
              color='info'
            />
            <Typography variant='body1' color='#777684' sx={{ marginTop: "16px" }}>
              Alex Echo has created artwork professionally for forty years, and has placed his works in the collections of some of the world’s top corporations, institutions and celebrities.
              <br /> <br />
              Echo has worked relentlessly for various charities and institutions, raising over $1,200,000 from sales of his work. Selling ten paintings at the prestigious Wallace Collection in London, the proceeds from which were used to rebuild an earthquake-destroyed school in southern China.
              <br /> <br />
              He also created one of SWATCH Watches’ most successful artist watches, “The Imagine Love” watch, selling more than 153,000 units and giving all his royalties to send over 80 children affected by AIDS to a healthy summer camp in New York with full health care.
            </Typography>
          </Box>
          <Box className={classes.aboutImgCell} display='flex'>
            <img src="/images/about-img.png" width='100%' alt="" />
          </Box>
        </Box>
      </CustomContainer>
      <Box mx='auto' className={classes.aboutImg}>
        <img src="/images/about-bg-2.png" width='100%' height='100%' alt="" />
      </Box>

      <CustomContainer>
        <Box display='flex' justifyContent='space-between' flexWrap='wrap' sx={{ margin: '120px 0' }}>
          <Box className={classes.aboutTextCell}>
            <Typography variant='body1' color='#777684' sx={{ lineHeight: '26px' }}>
              Alex has created the principle designs for the Paul Smith “Couture Women’s Wear Collection”, which sold in locations around the world in 2011.

              He painted a bespoke guitar by request of Eric Clapton, which was played by Clapton and later sold at auction to benefit the Crossroads Centre in Antigua, a rehab facility founded by Mr. Clapton.

              He has built a successful client base in China, Singapore, India, Europe and the UK, with collectors in most American states as well. Collections include The Carter Centre, Jimmy and Roslyn Carter, HSH Prince Rainier of Monaco, The Princess Grace Foundation, Sir Paul Smith, Ted Turner, Oprah Winfrey, Robert Downey Jr. Madonna, Alain Boublil, The estate of Dr. Timothy Leary, Climate Change Capital SWATCH Watch, Nike, Next, Sony, AT&T, MGM, Gibson Guitars, Broadway Cares, APLA, Seagrams, Montblanc, The Elton John AIDS Foundation AMFAR, The Elephant Family Absolut, Sebastian Schwarz, Glyndebourne and Brian Large.

              In 2015 he worked with HRH Prince Charles and The Elephant Family Foundation in London, creating a one of a kind TUK TUK that was auctioned at the private residence of Prince Charles; the sale raised £52,000.00 ($81,500.00).
            </Typography>
          </Box>
          <Box className={classes.aboutTextCell}>
            <Typography variant='body1' color='#777684' sx={{ lineHeight: '26px' }}>
              Alex was commissioned to create the inaugural trophy for the Glyndebourne Opera Cup presented by Sky Arts Television.

              In 2020 Alex created and permanently installed 89 Large Scale Works of Art into London’s newest hospital The NHS – UCLH Grafton Way building. This installation helped win the European Healthcare Design Award 2021 for Interior Design and the Arts.

              In 2021 Alex designed a home furnishings collection for the iconic British retailer NEXT with 100% of profits going to Parkinson’s U.K.  The first item being his “LOVE” cushion which thus far has sold over 3500 units raising more than £80,000 for research and care.

              In 2022 Alex has teamed up with Hydrow the ultra high-end rowing machine company and is creating a limited edition series that will be featured solely at the iconic London retail landmark SELFRIDGES, again with profits going to Parkinson’s U.K.

              This was followed in 2022 with a Bored Ape Yacht Club derivative collection, called “Young Ape Diaries ~ The Journey of BAYC Ziskey 8025” which is featured on Opensea.
            </Typography>
          </Box>
        </Box>
      </CustomContainer>

      <ReviewBox author='Alex Echo, Artist'>
        Parkinson’s has impacted my work as a painter, but I’m far more creative now as a digital artist, 
        and it’s so much fun. I feel invigorated and alive.
      </ReviewBox>      
    </Box>
  )
}

export default About
