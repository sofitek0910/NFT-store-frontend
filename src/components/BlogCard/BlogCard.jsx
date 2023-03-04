import React from 'react'
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/components/blogCardStyles'

const useStyles = makeStyles(styles)

const BlogCard = (props) => {

  const classes = useStyles()
  const navigate = useNavigate()

  const { data } = props

  const markClasses = clsx(
    classes.mark,
    {
      [classes.announcements]: data.type === 'Announcement',
      [classes.guides]: data.type === 'Guide',
      [classes.guest]: data.type === 'Guest Post',
      [classes.safety]: data.type === 'Safety & Security',
      [classes.spotlight]: data.type === 'Spotlight'     
    }
  )

  return (
    <Box className={classes.card} position='relative'>
      <Box className={classes.cardMedia}>
        <img src={`/images/collectibles/${data.image}`} alt="" />
      </Box>
      <Box className={classes.content}>
        <Typography variant='body1' color='rgba(15, 14, 54, 0.25)' sx={{ marginBottom: '12px' }}>
          {data.date}
        </Typography>
        <Typography variant='h6' color='#0F0E36' sx={{ marginBottom: '12px' }}>
          {data.title}
        </Typography>
        <Typography variant='body1' color='#777684' sx={{ marginBottom: '20px' }}>
          {data.text}
        </Typography>
        <CustomButton onClick={() => navigate(`/blog/${data.id}`)} dark>
          View Post
        </CustomButton>
      </Box>
      <Typography variant='body1' className={markClasses}>
        {data.type}
      </Typography>
    </Box>
  )
}

export default BlogCard
