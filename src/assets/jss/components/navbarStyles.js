const navbarStyles = ((theme) => ({
  appbar: {
    backgroundColor: 'white !important',
    boxShadow: 'none !important',
    '&.MuiPaper-root': {
      paddingTop: '50px',
      paddingBottom: '40px'
    },
    [theme.breakpoints.down('lg')]: {
      '&.MuiPaper-root': {
        paddingTop: '30px',
        paddingBottom: '20px'
      }
    }
  },
  toolbar: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important',    
    '&.MuiToolbar-root': {
      minHeight: '50px',
    }
  },
  toggleBtn: {
    [theme.breakpoints.down("md")]: {
      display: 'inline-flex !important',
      color: '#0F0E36 !important',
      marginLeft: 'auto !important'
    }
  },
  link: {    
    '&.MuiLink-root': {
      color: '#777684',
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '28px',
      marginLeft: '50px',
    },
    [theme.breakpoints.down('lg')]: {
      '&.MuiLink-root': {      
        marginLeft: '16px'
      },
    }
  },
  loginBtn: {
    '&.MuiButton-root': {
      color: '#0F0E36',
      fontWeight: 'bold',
      textTransform: 'none',
      border: '2px solid #0F0E36',
      borderRadius: '25px',
      width: '164px',
      height: '50px',
      marginLeft: '40px'
    },
    [theme.breakpoints.down('lg')]: {
      '&.MuiButton-root': {
        width: '140px',
        marginLeft: '16px'
      }      
    }
  },
  searchInput: {
    width: '200px',
    '& .MuiOutlinedInput-root': {
      height: '50px',
      borderRadius: '25px',      
    },
    '& .MuiOutlinedInput-input': {
      paddingLeft: '10px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '2px solid #EBEAEF'
    },
    [theme.breakpoints.down('lg')]: {
      width: '150px'
    }
  },
  logo: {
    [theme.breakpoints.down("lg")]: {
      '& img': {
        width: '170px'
      }
    },
    [theme.breakpoints.down("md")]: {
      '& img': {
        width: '200px'
      }
    },
  },
  hiddenOnMobile: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  profieBtn: {
    '&.MuiButton-root': {
      paddingLeft: '35px !important',
      color: '#777684 !important',
      borderColor: '#EBEAEF !important'
    },
    '& img': {
      position: 'absolute',
      left: '5px',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }
}))

export default navbarStyles
