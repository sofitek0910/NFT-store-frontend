const authStyles = ((theme) => ({
  header: {
    padding: '150px 0 236px',
    backgroundColor: 'rgba(102, 128, 255, 0.1)',    
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
        width: '150px',
        height: '50px',
        backgroundColor: 'rgba(102, 128, 255, 0.5)',
        right: '-50px',
        bottom: '-6px',
        zIndex: '-1'
      }
    },
    [theme.breakpoints.down('md')]: {    
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
          right: '-30px !important'
        }
      }
    }
  },
  signUpHeader: {
    backgroundColor: 'rgba(85, 219, 46, 0.1)',
    '& h3': {       
      '&::before': {
        backgroundColor: 'rgba(85, 219, 46, 0.5)'
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
  form: {
    maxWidth: '800px',
    backgroundColor: 'white',
    padding: '80px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      padding: '50px 20px'
    }
  },
  orText: {
    '& p': {
      padding: '0 40px',
      backgroundColor: 'white',
      zIndex: '1'
    },
    '&::before': {
      position: 'absolute',
      content: `''`,
      width: '100%',
      height: '2px',
      backgroundColor: '#EBEAEF',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    [theme.breakpoints.down('sm')]: {
      '& p': {
        padding: '0 20px'        
      },
    }
  },
  loginBtn: {
    '&.MuiButton-root': {
      backgroundColor: '#55DB2E !important',
      color: 'white',
      border: '0 !important'
    }    
  },
  signupBtn: {
    '&.MuiButton-root': {
      backgroundColor: '#6680FF !important',
      color: 'white',
      border: '0 !important'
    } 
  }
}))

export default authStyles
