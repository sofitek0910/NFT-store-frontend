import React, { useState } from 'react'
import { makeStyles } from "@mui/styles";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';

import styles from 'assets/jss/views/collectionDetailStyles'

const useStyles = makeStyles(styles)

const CollapseDetail = (props) => {

  const classes = useStyles()
  const { title } = props

  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Box sx={{ padding: '10px 0', cursor: 'pointer' }} display='flex' alignItems='center' onClick={() => setOpen(!open)}>
        <Typography variant='body1' color='#777684' sx={{ fontWeight: 'bold', lineHeight: '1', marginRight: 'auto' }}>
          {title}
        </Typography>
        {
          open ? <ExpandLessIcon sx={{ color: '#777684' }} /> : <ExpandMoreIcon sx={{ color: '#777684' }} />
        }
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box display='flex' flexWrap='wrap' justifyContent='space-between'>
          <Box className={classes.collapseItem}>
            <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1', marginBottom: '4px' }} color='#777684'>
              Background
            </Typography>
            <Typography variant='h6' sx={{ fontSize: '18px', lineHeight: '1', marginBottom: '4px' }} color='#777684'>
              Yellow
            </Typography>
            <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1' }} color='#777684'>
              7% have this trait
            </Typography>
          </Box>

          <Box className={classes.collapseItem}>
            <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1', marginBottom: '4px' }} color='#777684'>
              Body
            </Typography>
            <Typography variant='h6' sx={{ fontSize: '18px', lineHeight: '1', marginBottom: '4px' }} color='#777684'>
              Spotted Hoodie
            </Typography>
            <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1' }} color='#777684'>
              0.54% have this trait
            </Typography>
          </Box>

          <Box className={classes.collapseItem}>
            <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1', marginBottom: '4px' }} color='#777684'>
              Face
            </Typography>
            <Typography variant='h6' sx={{ fontSize: '18px', lineHeight: '1', marginBottom: '4px' }} color='#777684'>
              Sunglasses
            </Typography>
            <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1' }} color='#777684'>
              7% have this trait
            </Typography>
          </Box>

          <Box className={classes.collapseItem}>
            <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1', marginBottom: '4px' }} color='#777684'>
              Hair
            </Typography>
            <Typography variant='h6' sx={{ fontSize: '18px', lineHeight: '1', marginBottom: '4px' }} color='#777684'>
              Purple Cap
            </Typography>
            <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1' }} color='#777684'>
              3% have this trait
            </Typography>
          </Box>

          <Box className={classes.collapseItem}>
            <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1', marginBottom: '4px' }} color='#777684'>
              Head
            </Typography>
            <Typography variant='h6' sx={{ fontSize: '18px', lineHeight: '1', marginBottom: '4px' }} color='#777684'>
              Med
            </Typography>
            <Typography variant='body1' sx={{ fontSize: '15px', lineHeight: '1' }} color='#777684'>
              10% have this trait
            </Typography>
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}

export default CollapseDetail
