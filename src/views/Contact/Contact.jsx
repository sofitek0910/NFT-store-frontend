import React from 'react'
import clsx from 'clsx'
import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link'

import CustomContainer from 'components/CustomContainer'
import Newsletter from 'components/Newsletter'
import CustomButton from 'components/CustomButton';
import StyledBox from 'components/StyledBox';
import TextField from 'components/CustomInput/TextField'
import SelectField from 'components/CustomInput/SelectField'

import styles from 'assets/jss/views/contactStyles'

const useStyles = makeStyles(styles)

const Contact = () => {

  const classes = useStyles()

  return (
    <Box>
      <StyledBox className={clsx(classes.header)} mx='auto'>
        <CustomContainer>
          <Box display='flex' justifyContent='space-between' flexWrap='wrap' alignItems='center'>
            <Box>
              <Typography variant='h6' color='rgba(15,14,54,0.25)'>
                Get in touch
              </Typography>
              <Typography variant='h3' color="#0F0E36">
                Contact.
              </Typography>
            </Box>
            <Box>
              <CustomButton sx={{ minWidth: 'unset !important', padding: '0 !important', width: '50px', height: '50px', marginLeft: '10px', marginBottom: '8px' }}>
                <img src="/images/icons/iconmonstr-facebook.png" alt="" width='10px' height='20px' />
              </CustomButton>

              <CustomButton sx={{ minWidth: 'unset !important', padding: '0 !important', width: '50px', height: '50px', marginLeft: '10px', marginBottom: '8px' }}>
                <img src="/images/icons/iconmonstr-twitter.png" alt="" width='20px' height='16.25px' />
              </CustomButton>
              <CustomButton sx={{ minWidth: 'unset !important', padding: '0 !important', width: '50px', height: '50px', marginLeft: '10px', marginBottom: '8px' }}>
                <img src="/images/icons/iconmonstr-instagram.png" alt="" width='20px' height='20px' />
              </CustomButton>
              <CustomButton sx={{ minWidth: 'unset !important', padding: '0 !important', width: '50px', height: '50px', marginLeft: '10px', marginBottom: '8px' }}>
                <img src="/images/icons/iconmonstr-discord.png" alt="" width='20px' height='14.3px' />
              </CustomButton>
            </Box>
          </Box>
        </CustomContainer>
      </StyledBox>

      <Box className={classes.contents}>
        <CustomContainer>
          <Box className={classes.form}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  label='Your Name'
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  label='Your Email'
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  label='Your Phone'
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <SelectField
                  label='Subject'
                  required
                  options={[
                    {value: 'My Account', label: 'My Account'},
                    {value: 'Other', label: 'Other'}
                  ]}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label='Message'
                  required
                  multiline
                  rows={4}
                  inputProps={{

                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box display='flex' alignItems='center'>
                  <Checkbox />
                  <Typography variant='body1' color='#777684'>
                    I accept the terms laid out in our <Link href='/' sx={{color: '#777684'}}>privacy policy</Link> 
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <CustomButton dark>
                  Submit Request
                </CustomButton>
              </Grid>
            </Grid>
          </Box>
        </CustomContainer>
      </Box>

      <Newsletter />
    </Box>
  )
}

export default Contact
