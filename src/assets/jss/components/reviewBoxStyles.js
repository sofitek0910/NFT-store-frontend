const reviewBoxStyles = ((theme) => ({
  wrapper: {
    backgroundColor: 'rgba(102, 128, 255, 0.1)',
    width: '75vw',
    maxWidth: '1440px',
    padding: '120px 0',
    '& h6': {
      fontSize: '48px',
      lineHeight: '1.2',
      fontWeight: '400',
      position: 'relative',
      maxWidth: '800px',
      marginBottom: '75px',
      '&::before': {
        content: `''`,
        position: 'absolute',
        width: '150px',
        height: '30px',
        backgroundColor: 'rgba(102, 128, 255, 0.5)',
        left: '50%',
        bottom: '-55px',       
      }
    },
    [theme.breakpoints.down('md')]: {
      width: '100%'  
    },
    [theme.breakpoints.down('sm')]: {    
      paddingBottom: '80px',     
      '& h6': {
        fontSize: '30px',
        wordBreak: 'break-word',
        '&::before': {
          width: '100px !important'
        }
      }    
    }
  },
  content: {
    paddingLeft: '10%',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0%'
    },
  },
  mark: {
    position: 'absolute',
    top: '40px',
    left: '10%',
    [theme.breakpoints.down('md')]: {
      left: '24px',
      top: '20px'
    },
  }
}))

export default reviewBoxStyles
