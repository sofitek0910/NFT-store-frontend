import React from 'react'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomContainer from 'components/CustomContainer'

import styles from 'assets/jss/components/reviewBoxStyles'

const useStyles = makeStyles(styles)

const ReviewBox = (props) => {

  const classes = useStyles()

  const {author, children} = props

  return (
    <Box position='relative' className={classes.wrapper} mx='auto'>
      <CustomContainer>
        <Box className={classes.content}>
          <Typography variant='h6'>
            {children}
          </Typography>
          <Typography variant='body1' color='#777684' lineHeight='1'>
            {author}
          </Typography>
        </Box>
      </CustomContainer>
      <img src="/images/icons/review.png" alt="" className={classes.mark} />
    </Box>
  )
}

export default ReviewBox
