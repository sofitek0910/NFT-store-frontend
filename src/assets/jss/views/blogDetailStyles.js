const blogDetailStyles = ((theme) => ({
  header: {
    padding: '150px 0 236px',
    backgroundColor: 'rgba(102, 128, 255, 0.1)',
    width: '87.5vw',
    maxWidth: '1680px',
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
      width: 'fit-content',
      '&::before': {
        content: `''`,
        position: 'absolute',
        width: '310px',
        height: '50px',
        backgroundColor: 'rgba(102, 128, 255, 0.5)',
        right: '-100px',
        bottom: '-6px',
        zIndex: '-1'
      }
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      '& h3': {       
        '&::before': {
          width: '200px !important',          
          right: '0px !important',
        }
      }
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: '100px',
      paddingBottom: '130px',
      '& h6': {
        fontSize: '20px'
      },
      '& h3': {
        fontSize: '40px',
        wordBreak: 'break-word',
        '&::before': {
          width: '100px !important',
          height: '30px !important',
          right: '00px !important'
        }
      }
    }
  },
  contents: {
    paddingBottom: '120px',
    marginTop: '-120px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-80px',
      paddingBottom: '80px'
    }
  },
  imgBox: {
    width: '75vw',
    maxWidth: '1440px',
    height: '500px',
    [theme.breakpoints.down('md')]: {    
      width: 'calc(100% - 48px)',
    },
    [theme.breakpoints.down('sm')]: {
      height: '250px',
      width: 'calc(100% - 32px)'
    }
  },
  textBox: {
    padding: '120px 0',
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1080px !important'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '80px 0'
    }
  },
  relatedPosts: {
    backgroundColor: 'rgba(102, 128, 255, 0.1)',
    padding: '120px 0',
    marginBottom: '120px'
  }
}))

export default blogDetailStyles
