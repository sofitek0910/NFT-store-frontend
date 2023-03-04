import React from 'react'
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/components/categoryCardStyles'

const useStyles = makeStyles(styles)

const CategoryCard = (props) => {

  const classes = useStyles()
  const navigate = useNavigate()

  const { category } = props

  const markClasses = clsx(
    classes.mark,
    {
      [classes.art]: category.type === 'Art',
      [classes.sport]: category.type === 'Sport',
      [classes.forGood]: category.type === 'For Good',
      [classes.music]: category.type === 'Music',
      [classes.gaming]: category.type === 'Gaming',
      [classes.utility]: category.type === 'Utility',
      [classes.photography]: category.type === 'Photography',
      [classes.virtualWorld]: category.type === 'Virtual World',
    }
  )

  return (
    <Box className={classes.card} position='relative'>
      <Box className={classes.cardMedia}>
        <img src={`/images/${category.image}`} alt="" />
      </Box>
      <Box textAlign='center' className={classes.content}>
        <Typography variant='h6' align='center'>
          {category.title}
        </Typography>
        <CustomButton onClick={() => navigate('/explore/collectibles')}>
          {`Browse ${category.type}`}
        </CustomButton>
      </Box>
      <Typography variant='body1' className={markClasses}>
        {category.type}
      </Typography>
    </Box>
  )
}

export default CategoryCard
