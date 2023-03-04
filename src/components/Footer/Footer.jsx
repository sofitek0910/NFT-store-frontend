import React from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';

import CustomContainer from 'components/CustomContainer'

import styles from 'assets/jss/components/footerStyles'

const useStyles = makeStyles(styles)

const Footer = () => {

  const classes = useStyles()

  const navigate = useNavigate()

  const handleNavigate = (e, url) => {
    e.preventDefault();
    navigate(url)
  }

  return (
    <Box className={classes.footer}>
      <CustomContainer>
        <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap' className={classes.linksSection}>
          <Box display='flex' flexWrap='wrap'>
            <Link href='/explore' className={classes.link} underline='none' onClick={(e) => handleNavigate(e, '/explore')}>
              Explore
            </Link>
            <Link href='/collections' className={classes.link} underline='none' onClick={(e) => handleNavigate(e, '/collections')}>
              Collections
            </Link>
            <Link href='/creators' className={classes.link} underline='none' onClick={(e) => handleNavigate(e, '/creators')}>
              Creators
            </Link>
            <Link href='/' className={classes.link} underline='none'>
              About
            </Link>
            <Link href='/account' className={classes.link} underline='none' onClick={(e) => handleNavigate(e, '/account')}>
              My Account
            </Link>
            <Link href='/blog' className={classes.link} underline='none' onClick={(e) => handleNavigate(e, '/blog')}>
              Blog
            </Link>
            <Link href='/contact' className={classes.link} underline='none' onClick={(e) => handleNavigate(e, '/contact')}>
              Contact
            </Link>
          </Box>

          <Box mb={2}>
            <Link href='/' className={classes.socialLink} underline='none'>
              <img src="/images/iconmonstr-facebook-1.png" alt="" />
            </Link>
            <Link href='/' className={classes.socialLink} underline='none' sx={{ marginLeft: '20px' }}>
              <img src="/images/iconmonstr-twitter-1.png" alt="" />
            </Link>
            <Link href='/' className={classes.socialLink} underline='none' sx={{ marginLeft: '20px' }}>
              <img src="/images/iconmonstr-instagram-11.png" alt="" />
            </Link>
            <Link href='/' className={classes.socialLink} underline='none' sx={{ marginLeft: '20px' }}>
              <img src="/images/iconmonstr-twitter-1.png" alt="" />
            </Link>
          </Box>
        </Box>

        <Box className={classes.copyInfo}>
          <Typography variant='body1'>
            © 2022 Nporium. All rights reserved.  &nbsp;
            <Link href='/'>Privacy Policy.</Link> &nbsp;
            <Link href='/'>Terms of Service.</Link>
             
          </Typography>
        </Box>
      </CustomContainer>
    </Box>
  )
}

export default Footer
