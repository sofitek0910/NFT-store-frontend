import React from 'react'
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box'

const StyledBox = styled((props) => (
  <Box {...props} />
))(({theme}) => ({
  width: '87.5vw',
  maxWidth: '1680px',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}))

export default StyledBox
