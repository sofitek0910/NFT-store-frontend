import React from 'react'
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from 'assets/jss/components/titleBoxStyles'

const useStyles = makeStyles(styles)

const TitleBox = (props) => {

  const classes = useStyles()

  const { subTitle, title, textAlign, color } = props

  const titleClasses = clsx({
    [classes.yellow]: color === 'yellow',
    [classes.info]: color === 'info',
    [classes.primary]: color === 'primary'
  })

  return (
    <Box className={classes.titleBox}>
      <Typography variant='h6' color="rgba(15,14,54,0.25)" align={textAlign ?? 'left'}>
        {subTitle}
      </Typography>
      <Typography variant='h3' color="#0F0E36" className={titleClasses}>
        {title}
      </Typography>
    </Box>
  )
}

export default TitleBox
