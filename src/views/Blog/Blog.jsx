import React, { useState } from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

import CustomContainer from 'components/CustomContainer'
import Newsletter from 'components/Newsletter'
import UnderlineButton from 'components/UnderlineButton'
import BlogCard from 'components/BlogCard'
import CustomButton from 'components/CustomButton';

import styles from 'assets/jss/views/blogStyles'

const useStyles = makeStyles(styles)

const Blog = () => {

  const classes = useStyles()
  const navigate = useNavigate()

  const [category, setCategory] = useState('Top')

  const categories = ['Announcements', 'Guides', 'Guest Posts', 'Safety & Security', 'Spotlights']

  const blogs = [
    {
      id: 1,
      title: 'Another Blog Post Is Displayed Here',
      date: '05 Jul 2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
      type: 'Guide',
      image: 'collectibles-1.png',
    },
    {
      id: 2,
      title: 'Another Blog Post Is Displayed Here',
      date: '02 Jul 2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
      type: 'Announcement',
      image: 'collectibles-2.png',
    },
    {
      id: 3,
      title: 'Another Blog Post Is Displayed Here',
      date: '26 Jun 2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
      type: 'Guest Post',
      image: 'collectibles-3.png',
    },
    {
      id: 4,
      title: 'Another Blog Post Is Displayed Here',
      date: '20 JUN 2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
      type: 'Spotlight',
      image: 'collectibles-4.png',
    },
    {
      id: 5,
      title: 'Another Blog Post Is Displayed Here',
      date: '05 Jul 2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
      type: 'Guide',
      image: 'collectibles-5.png',
    },
    {
      id: 6,
      title: 'Another Blog Post Is Displayed Here',
      date: '05 Jul 2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
      type: 'Announcement',
      image: 'collectibles-6.png',
    },
    {
      id: 7,
      title: '31 May 2022',
      date: '05 Jul 2022',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio. Nam porta vel…',
      type: 'Safety & Security',
      image: 'collectibles-7.png',
    },
  ]

  return (
    <Box>
      <Box className={clsx(classes.header)} mx='auto'>
        <CustomContainer>
          <Typography variant='h6' color='rgba(15,14,54,0.25)'>
            Latest news
          </Typography>
          <Typography variant='h3' color="#0F0E36">
            Blog.
          </Typography>
        </CustomContainer>
      </Box>
      <Box className={classes.contents}>
        <CustomContainer>
          <Box sx={{ marginTop: '50px', padding: '20px', backgroundColor: "white", border: '2px solid #EBEAEF' }} position='relative' display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap'>
            <Box display='flex' className={classes.blogImg}>
              <img src="/images/blog-img-1.png" alt="" width='100%' />
            </Box>
            <Box className={classes.blogContent}>
              <Typography variant='body1' color='rgba(15, 14, 54, 0.25)'>
                07 Jul 2022
              </Typography>
              <Typography variant='h6' color='#0F0E36'>
                Featured Blog Post Title
              </Typography>
              <Typography variant='body1' color='#777684' sx={{ lineHeight: '1.2' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit magna odio.
                Nam porta vel augue vitae consequat. Donec rutrum mauris ac lorem consequat, nec tempor enim pulvinar.
              </Typography>
              <CustomButton dark onClick={() => navigate('/blog/1')}>
                View Post
              </CustomButton>
            </Box>
            <Typography variant='body1' color='#0F0E36' className={classes.comingMark}>
              Announcement
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box mb={2} mt={3}>
                {
                  categories.map((cell) => (
                    <CustomButton
                      sx={{ marginRight: '10px', marginBottom: '10px' }}
                      active={category === cell}
                      onClick={() => setCategory(cell)}
                      key={cell}
                    >
                      {cell}
                    </CustomButton>
                  ))
                }
              </Box>
            </Grid>
            {
              blogs.map((blog) => (
                <Grid item xs={12} sm={6} md={6} lg={4} key={blog.id}>
                  <BlogCard data={blog} />
                </Grid>
              ))
            }
            <Grid item xs={12}>
              <Box mt={3}>
                <UnderlineButton>
                  Load More
                </UnderlineButton>
              </Box>
            </Grid>
          </Grid>
        </CustomContainer>
      </Box>
      <Newsletter />
    </Box>
  )
}

export default Blog
