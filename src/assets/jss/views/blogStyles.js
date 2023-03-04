const blogStyles = ((theme) => ({
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
      '&::before': {
        content: `''`,
        position: 'absolute',
        width: '150px',
        height: '50px',
        backgroundColor: 'rgba(102, 128, 255, 0.5)',
        left: '65px',
        bottom: '-6px',
        zIndex: '-1'
      }
    },
    [theme.breakpoints.down('md')]: {
      width: '100%'
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
          left: '30px !important'
        }
      }
    }
  },
  contents: {
    paddingBottom: '120px',
    marginTop: '-194px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-130px',
      paddingBottom: '80px'
    }
  }, 
  blogImg: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  blogContent: {
    width: '50%',
    padding: '0 40px 0 60px',
    boxSizing: 'border-box',   
    '& h6': {
      fontSize: '32px',
      lineHeight: '1.2',
      fontWeight: '700',
      marginBottom: '12px',     
    },
    '& .MuiButton-root': {
      marginTop: '56px'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: '50px',
      padding: '0'
    },
    [theme.breakpoints.down('sm')]: {        
      '& h6': {
        fontSize: '24px',     
      },  
      '& .MuiButton-root': {
        marginTop: '30px'
      },
    }
  },
  comingMark: {
    lineHeight: '1',
    fontWeight: 'bold',
    backgroundColor: '#55DB2E',
    color: 'white !important',
    padding: "6px 22px",
    position: 'absolute',
    top: '30px',
    right: '-5px',
    width: 'fit-content'
  },
}))

export default blogStyles
