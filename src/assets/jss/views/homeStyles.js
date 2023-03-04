const homeStyles = ((theme) => ({
  commonTitle: {
    marginBottom: '50px'
  },
  categories: {
    padding: '112px 0 120px',
    [theme.breakpoints.down('sm')]: {
      padding: '80px 0 90px'
    }
  },
  header: {
    padding: '60px 0',
    backgroundColor: 'rgba(203, 0, 255, 0.1)',
    width: '87.5vw',
    maxWidth: '1680px',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
  },
  headerImgBox: {
    width: '45.3%',
    '& img': {
      width: '100%'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '30px',
      '& img': {
        maxWidth: '500px'
      }
    }
  },
  headerTextBox: {
    width: '47.5%',
    '& h6': {
      fontSize: '28px',
      lineHeight: '1',
      fontWeight: '400',
      marginBottom: '10px'
    },
    '& h3': {
      fontSize: '68px',
      lineHeight: '1.2',
      fontWeight: '100',
      marginBottom: '36px',
      position: 'relative',
      '&::before': {
        content: `''`,
        position: 'absolute',
        width: '310px',
        height: '50px',
        backgroundColor: 'rgba(0, 255, 255, 0.5)',
        left: '65px',
        bottom: '-6px',
        zIndex: '-1'
      }
    },
    '& p': {
      marginBottom: '45px'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      order: '1'
    },
    [theme.breakpoints.down('sm')]: {
      '& h6': {
        fontSize: '20px'
      },
      '& h3': {
        fontSize: '40px',
        wordBreak: 'break-word',
        '&::before': {
          width: '150px !important',
          height: '30px !important',
          left: '30px !important'
        }
      }
    }
  },
  collectionsTitle: {
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'self-start !important',
      '& > a': {
        marginTop: '1rem'
      }
    }
  },
  collections: {
    padding: '112px 0 120px',
    [theme.breakpoints.down('sm')]: {
      padding: '80px 0 90px'
    }
  },
  notableDrops: {
    padding: '112px 0 120px',
    width: '87.5vw',
    maxWidth: '1680px',
    backgroundColor: 'rgba(102, 128, 255, 0.1)',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '80px 0 90px'
    }
  },
  creatorCarousel: {
    marginLeft: '-15px',
    marginRight: '-15px'
  },
  carouselControl: {
    '& .MuiButton-root': {
      width: '40px',
      height: '50px',
      padding: '17px 16px',
      minWidth: 'unset',
      borderRadius: '0',
      margin: '0 2.5px',
      backgroundColor: 'white'
    }
  },
  recentlyListCarousel: {
    marginLeft: '-12.5px',
    marginRight: '-12.5px'
  }
}))

export default homeStyles
