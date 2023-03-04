import React from 'react'
import clsx from 'clsx'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

import CustomContainer from 'components/CustomContainer'
import Newsletter from 'components/Newsletter'
import BlogCard from 'components/BlogCard'
import CustomButton from 'components/CustomButton';
import TitleBox from 'components/TitleBox';
import ReviewBox from 'components/ReviewBox';
import StyledBox from 'components/StyledBox';

import styles from 'assets/jss/views/blogDetailStyles'

const useStyles = makeStyles(styles)

const BlogDetail = () => {

  const classes = useStyles()

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
    }   
  ]


  return (
    <Box>
      <Box className={clsx(classes.header)} mx='auto'>
        <CustomContainer>
          <Typography variant='h6' color='rgba(15,14,54,0.25)'>
            07 JUL 2022 Announcement
          </Typography>
          <Typography variant='h3' color="#0F0E36">
            Featured Blog Post Title.
          </Typography>
        </CustomContainer>
      </Box>

      <Box className={classes.contents}>
        <Box className={classes.imgBox} mx='auto'>
          <img src="/images/collection-header-bg.png" alt="" width='100%' height='100%' />
        </Box>

        <CustomContainer className={classes.textBox} mx='auto'>
          <TitleBox
            title='Post Title'
          />
          <Typography variant='body1' color='#777684' sx={{ lineHeight: '26px', marginTop: '16px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare nunc in dui faucibus blandit.
            In hac habitasse platea dictumst. In scelerisque sem nec lectus elementum pulvinar.
            Aliquam facilisis tincidunt mi vel consectetur. Duis quis nibh sit amet justo auctor laoreet et eu dolor.
            In placerat faucibus augue, ac molestie leo viverra eget. Morbi sed ex in massa congue placerat sed vel ipsum.
            In elementum sem sed mauris dignissim molestie.

            Vivamus ut nunc ut odio ultricies pretium non et mauris. In hac habitasse platea dictumst.
            Aliquam erat volutpat. Pellentesque nec felis non mi varius cursus aliquam aliquet nunc.
            Sed ac nibh sodales ligula feugiat pulvinar. Aenean turpis neque, dictum nec pharetra sed, tempus id nunc. Ut nunc nibh, venenatis sit amet eros vel, porttitor sodales metus. Nulla mi mi, bibendum quis eros quis, condimentum porta nunc. Aliquam sagittis nec orci nec finibus. Donec ac porttitor odio. Quisque aliquam egestas enim et lacinia.
            Vivamus aliquet ultricies nisl vel cursus. Maecenas aliquet tristique varius.

            Praesent justo urna, efficitur sit amet nunc et, sodales accumsan tortor. Mauris rhoncus vitae metus porttitor posuere.
            Integer dignissim enim eget nisi rutrum volutpat. Vivamus dignissim consequat urna, eu luctus neque volutpat porta.
            Etiam eget dignissim justo. Integer id consectetur felis. Curabitur tempor ut justo at dignissim.
            Aliquam ante augue, feugiat condimentum interdum ac, vulputate eget lacus. In hac habitasse platea dictumst.
            Nunc et felis at neque luctus faucibus. Donec venenatis porta leo sed vestibulum.
            Fusce purus arcu, aliquet ac magna at, pulvinar euismod sem. Aliquam efficitur,
            felis sit amet porttitor suscipit, velit augue porttitor neque, id varius est orci blandit risus.
          </Typography>
        </CustomContainer>

        <Box className={classes.imgBox} mx='auto'>
          <img src="/images/blog-detail-2.png" alt="" width='100%' height='100%' />
        </Box>

        <CustomContainer className={classes.textBox} mx='auto'>
          <Typography variant='body1' color='#777684' sx={{ lineHeight: '26px', marginBottom: '76px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare nunc in dui faucibus blandit.
            In hac habitasse platea dictumst. In scelerisque sem nec lectus elementum pulvinar.
            Aliquam facilisis tincidunt mi vel consectetur. Duis quis nibh sit amet justo auctor laoreet et eu dolor.
            In placerat faucibus augue, ac molestie leo viverra eget.
            Morbi sed ex in massa congue placerat sed vel ipsum. In elementum sem sed mauris dignissim molestie.
          </Typography>
          <Typography variant='h6' color='#0F0E36' sx={{ fontSize: '24px', lineHeight: '1.2', marginBottom: '12px' }}>
            A Smaller Post Title.
          </Typography>
          <Typography variant='body1' color='#777684' sx={{ lineHeight: '26px' }}>
            Vivamus ut nunc ut odio ultricies pretium non et mauris. In hac habitasse platea dictumst.
            Aliquam erat volutpat. Pellentesque nec felis non mi varius cursus aliquam aliquet nunc.
            Sed ac nibh sodales ligula feugiat pulvinar. Aenean turpis neque, dictum nec pharetra sed, tempus id nunc. Ut nunc nibh, venenatis sit amet eros vel, porttitor sodales metus.
            Nulla mi mi, bibendum quis eros quis, condimentum porta nunc. Aliquam sagittis nec orci nec finibus.
            Donec ac porttitor odio. Quisque aliquam egestas enim et lacinia. Vivamus aliquet ultricies nisl vel cursus.
            Maecenas aliquet tristique varius.

            Praesent justo urna, efficitur sit amet nunc et, sodales accumsan tortor. Mauris rhoncus vitae metus porttitor posuere.
            Integer dignissim enim eget nisi rutrum volutpat. Vivamus dignissim consequat urna, eu luctus neque volutpat porta.
            Etiam eget dignissim justo. Integer id consectetur felis. Curabitur tempor ut justo at dignissim. Aliquam ante augue, feugiat condimentum interdum ac, vulputate eget lacus.
            In hac habitasse platea dictumst. Nunc et felis at neque luctus faucibus. Donec venenatis porta leo sed vestibulum.
            Fusce purus arcu, aliquet ac magna at, pulvinar euismod sem. Aliquam efficitur, felis sit amet porttitor suscipit, velit augue porttitor neque, id varius est orci blandit risus.
          </Typography>
        </CustomContainer>

        <ReviewBox author='Joe Bloggs, Guildford'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae rutrum diam, varius hendrerit nibh.
        </ReviewBox>

        <Box className={classes.imgBox} mx='auto' sx={{ marginTop: '120px' }}>
          <img src="/images/blog-img-3.png" alt="" width='100%' height='100%' />
        </Box>

        <CustomContainer className={classes.textBox} mx='auto'>
          <Typography variant='body1' color='#777684' sx={{ lineHeight: '26px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare nunc in dui faucibus blandit.
            In hac habitasse platea dictumst. In scelerisque sem nec lectus elementum pulvinar.
            Aliquam facilisis tincidunt mi vel consectetur. Duis quis nibh sit amet justo auctor laoreet et eu dolor.
            In placerat faucibus augue, ac molestie leo viverra eget. Morbi sed ex in massa congue placerat sed vel ipsum.
            In elementum sem sed mauris dignissim molestie.

            Vivamus ut nunc ut odio ultricies pretium non et mauris. In hac habitasse platea dictumst. Aliquam erat volutpat.
            Pellentesque nec felis non mi varius cursus aliquam aliquet nunc. Sed ac nibh sodales ligula feugiat pulvinar.
            Aenean turpis neque, dictum nec pharetra sed, tempus id nunc. Ut nunc nibh, venenatis sit amet eros vel, porttitor sodales metus.
            Nulla mi mi, bibendum quis eros quis, condimentum porta nunc. Aliquam sagittis nec orci nec finibus. Donec ac porttitor odio.
            Quisque aliquam egestas enim et lacinia. Vivamus aliquet ultricies nisl vel cursus. Maecenas aliquet tristique varius.

            Praesent justo urna, efficitur sit amet nunc et, sodales accumsan tortor. Mauris rhoncus vitae metus porttitor posuere.
            Integer dignissim enim eget nisi rutrum volutpat. Vivamus dignissim consequat urna, eu luctus neque volutpat porta.
            Etiam eget dignissim justo. Integer id consectetur felis. Curabitur tempor ut justo at dignissim.
            Aliquam ante augue, feugiat condimentum interdum ac, vulputate eget lacus. In hac habitasse platea dictumst.
            Nunc et felis at neque luctus faucibus. Donec venenatis porta leo sed vestibulum. Fusce purus arcu, aliquet ac magna at, pulvinar euismod sem.
            Aliquam efficitur, felis sit amet porttitor suscipit, velit augue porttitor neque, id varius est orci blandit risus.
          </Typography>

          <Box sx={{ marginTop: '120px' }}>
            <CustomButton>
              <img src="/images/icons/iconmonstr-share.png" alt="" width='20px' height='20px' />&nbsp;
              Share
            </CustomButton>
          </Box>
        </CustomContainer>

        <StyledBox className={classes.relatedPosts} mx='auto'>
          <CustomContainer>
            <Box sx={{ marginBottom: '50px' }}>
              <TitleBox
                subTitle="Continue reading"
                title="Related Posts."
                color='info'
              />
            </Box>
            <Grid container spacing={3}>
              {
                blogs.map((blog) => (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={blog.id}>
                    <BlogCard data={blog} />
                  </Grid>
                ))
              }
            </Grid>
          </CustomContainer>
        </StyledBox>

        <Newsletter />
      </Box>
    </Box>
  )
}

export default BlogDetail
