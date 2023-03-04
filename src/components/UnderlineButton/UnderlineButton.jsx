import React from 'react'
import { makeStyles } from "@mui/styles";

import Link from '@mui/material/Link'

import styles from 'assets/jss/components/buttonStyles'

const useStyles = makeStyles(styles)

const UnderlineButton = (props) => {

  const classes = useStyles()

  const { children, ...others } = props

  return (
    <Link variant='button' underline='none' className={classes.underlineBtn} {...others}>
      {children}
      <img src="/images/left-arrow.png" alt="" />
    </Link>
  )
}

export default UnderlineButton
