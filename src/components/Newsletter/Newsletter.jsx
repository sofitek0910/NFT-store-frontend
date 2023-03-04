import React from 'react'
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import CustomContainer from 'components/CustomContainer'
import UnderlineButton from 'components/UnderlineButton'

import styles from 'assets/jss/components/newsletterStyles'

const useStyles = makeStyles(styles)

const Newsletter = () => {

  const classes = useStyles()

  return (
    <Box className={classes.wrapper} mx='auto'>
      <CustomContainer>
        <Box display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap'>
          <Box className={clsx(classes.cell, classes.noteBox)}>
            <Typography variant='h6' color='rgba(15, 14, 54, 0.25)'>
              Newsletter subscription
            </Typography>
            <Typography variant='h3' color='#0F0E36'>
              Stay in the loop.
            </Typography>
            <Typography variant='body1' color='#777684'>
              Join our mailing list to stay in the loop with our newest feature releases,
              NFT drops, and tips and tricks for navigating Nporium.
            </Typography>
          </Box>

          <Box className={clsx(classes.cell)} display='flex' alignItems='end' flexWrap="wrap">
            <Box className={classes.emailField} flex={1}>
              <TextField label="Enter your email" variant="standard" fullWidth />
            </Box>
            <UnderlineButton>
              Subscribe
            </UnderlineButton>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  )
}

export default Newsletter
