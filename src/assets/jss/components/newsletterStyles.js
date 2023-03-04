const newsletterStyles = ((theme) => ({
  wrapper: {
    backgroundColor: 'rgba(85, 219, 46, 0.1)',
    padding: '172px 0 180px',
    width: '87.5vw',
    maxWidth: '1680px',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: '100px',
      paddingBottom: '105px'
    }
  },
  cell: {
    width: 'calc(50% - 30px)',
    [theme.breakpoints.down("md")]: {
      width: '100%'
    }
  },
  noteBox: {
    '& h6': {
      fontSize: '24px',
      lineHeight: '1',
      fontWeight: '400'
    },
    '& h3': {
      fontSize: '48px',
      lineHeight: '1.2',
      marginBottom: '16px',
      position: 'relative',
      width: 'fit-content',
      zIndex: '2',
      '&::before': {
        position: 'absolute',
        content: `''`,
        width: '130px',
        height: '30px',
        backgroundColor: 'rgba(85, 219, 46, 0.5)',
        right: '-65px',
        bottom: '-5px',
        zIndex: '-1'
      }
    },
    '& p': {
      fontSize: '16px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      '& h6': {
        fontSize: '16px'
      },
      '& h3': {
        fontSize: '30px',
        '&::before': {
          width: '80px !important',
          height: '20px !important',
          right: '-40px !important'
        }
      },
      '& p': {
        fontSize: '14px'
      }
    }
  },
  emailField: {
    marginRight: '40px',
    '& .MuiInput-input': {
      paddingBottom: '16px'
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(15, 14, 54, 0.25) !important',
      fontSize: '16px'
    },
    '& .MuiInput-root::before': {
      borderColor: 'rgba(15, 14, 54, 0.25)',
      borderWidth: '3px'
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
      width: '100%',
      flex: 'unset !important',
      marginBottom: '1rem'
    }
  }
}))

export default newsletterStyles
