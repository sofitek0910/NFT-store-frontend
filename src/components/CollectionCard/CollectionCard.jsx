import React from 'react'
import clsx from 'clsx'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from 'assets/jss/components/collectionCardStyles'

const useStyles = makeStyles(styles)

const CollectionCard = (props) => {

  const classes = useStyles()

  const { collection } = props

  const markClasses = clsx(
    classes.mark,
    {
      [classes.art]: collection.type === 'Art',
      [classes.sport]: collection.type === 'Sport'
    }
  )

  return (
    <Box className={classes.card} display='flex' justifyContent='spacee-between' alignItems='center'>
      <Box className={classes.cardMedia}>
        <img src={`/images/${collection.image}`} alt="" width='100%' height='100%' />
      </Box>
      <Box className={classes.cardContent}>
        <Typography variant='h6' color="#0F0E36">
          { collection.title }
        </Typography>
        <Typography variant='body1' color="#777684">
          {`Floor price: ${collection.price}`}
        </Typography>
        <Box display='flex' justifyContent='space-between' alignItems='end'>
          <Typography variant='body1' className={markClasses}>
            {collection.type}
          </Typography>
          <Typography variant='body1' color={collection.profit > 0 ? '#55DB2E' : '#FC4575'}>
            { `${collection.profit > 0 ? '+' : ''}${collection.profit}%` }
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CollectionCard
