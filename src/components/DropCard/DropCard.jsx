import React from 'react'
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/components/recentCardStyles'

const useStyles = makeStyles(styles)

const DropCard = (props) => {

  const classes = useStyles()

  const { data } = props

  const markClasses = clsx(
    classes.mark,
    {
      [classes.art]: data.type === 'Art',
      [classes.sport]: data.type === 'Sport',
      [classes.forGood]: data.type === 'For Good'
    }
  )

  return (
    <Box className={classes.card} position='relative'>
      <Box className={classes.cardHeader}>
        <Typography variant='h6' color='#0F0E36'>
          {data.title}
        </Typography>
        <Typography variant='body1' color='#777684'>
          {data.username}
        </Typography>
      </Box>
      <Box className={classes.cardMedia}>
        <img src={`/images/${data.image}`} alt="" />
      </Box>
      <Box display='flex' className={classes.content} alignItems='center' justifyContent='space-between'>
        <Box>
          <Typography variant='h6'>
            {data.time}
          </Typography>
          <Typography variant='body1'>
            {data.date}
          </Typography>
        </Box>
        <CustomButton>
          More Info
        </CustomButton>
      </Box>
      <Typography variant='body1' className={markClasses}>
        {data.type}
      </Typography>
    </Box>
  )
}

export default DropCard
