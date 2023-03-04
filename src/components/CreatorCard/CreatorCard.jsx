import React from 'react'
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import CustomButton from 'components/CustomButton'

import styles from 'assets/jss/components/creatorCardStyles'

const useStyles = makeStyles(styles)

const CreatorCard = (props) => {

  const classes = useStyles()
  const navigate = useNavigate()

  const { data } = props

  return (
    <Box className={classes.card} position='relative'>
      <Box className={classes.cardHeader} display='flex' alignItems='center' justifyContent='space-between'>
        <Box className={classes.userInfo} display='flex' alignItems='center'>
          <Avatar alt={data.name} src={`/images/creators/${data.avatar}`} sx={{ width: '48px', height: '48px', marginRight: '15px' }} />
          <Box>
            <Typography variant='h6' color='#0F0E36'>
              {data.name}
            </Typography>
            <Typography variant='body1' color='#777684'>
              {data.job}
            </Typography>
          </Box>
        </Box>
        <img src="/images/favorite-outline.png" alt="" />
      </Box>
      <Box className={classes.cardMedia} sx={{ marginTop: '15px' }} display='flex' justifyContent='space-between'>
        <Box className={classes.mainImg}>
          <img src={`/images/creators/${data.images[0]}`} alt="" />
        </Box>
        <Box className={classes.subImgs} sx={{ width: '100px' }} display='flex' flexDirection='column' justifyContent='space-between'>
          {
            data.images.filter((_, i) => i !== 0).map((img, index) => (
              <Box className={clsx(classes.subImg, {[classes.moreImg]: index === 2})} key={img}>
                <img src={`/images/creators/${img}`} alt="" width='100%' height='100%' />
                {
                  index === 2 && (
                    <Typography variant='body1' color='#fff'>
                      {`+${data.more}`}
                    </Typography>
                  )
                }
              </Box>
            ))
          }
        </Box>
      </Box>
      <Box display='flex' className={classes.content} alignItems='center' justifyContent='space-between'>
        <Box>
          <Typography variant='h6' color='#0F0E36' sx={{ marginBottom: '5px' }}>
            {`$${data.price}`}
          </Typography>
          <Typography variant='body1' sx={{ lineHeight: '1', color: '#777684' }}>
            Sales
          </Typography>
        </Box>
        <CustomButton dark onClick={() => navigate(`/creators/${data.id}`)}>
          View Profile
        </CustomButton>
      </Box>
    </Box>
  )
}

export default CreatorCard
