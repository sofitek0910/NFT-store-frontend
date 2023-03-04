import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';

const CustomContainer = styled(Container)(({theme}) => ({
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1248px'
  }
}))

export default CustomContainer
