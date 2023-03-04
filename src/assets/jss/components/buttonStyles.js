const buttonStyles = ((theme) => ({
  underlineBtn: {
    '&.MuiLink-root': {
      color: '#0F0E36',
      fontWeight: 'bold',
      fontSize: '16px',
      textTransform: 'none',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      position: 'relative',
      paddingBottom: '12px',
      '& img': {
        width: '28px',
        height: '16px',
        marginLeft: '30px'
      },
      '&::before': {
        position: 'absolute',
        content: `''`,
        width: '70px',
        height: '3px',
        backgroundColor: '#0F0E36',
        left: '0',
        bottom: '0'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& img': {
        marginLeft: '24px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '6px !important',
      '& img': {
        marginLeft: '16px !important',
        width: '20px !important',
        height: '12px !important'
      },
      '&::before': {        
        height: '2px !important',
        width: '50px !important'
      }
    }
  },
  outlineBtn: {
    '&.MuiButton-root': {
      backgroundColor: '#fff !important',
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'none',
      color: '#777684',
      border: '2px solid #EBEAEF',
      borderRadius: '25px',
      padding: '13px 24px 16px',
      lineHeight: '1',
      borderWidth: '2px !important'
    }
  },
  dark: {
    '&.MuiButton-root': {
      color: '#0F0E36',
      borderColor: '#0F0E36'
    }
  },
  active: {
    '&.MuiButton-root': {
      color: '#fff',
      backgroundColor: 'rgba(85, 219, 46, 0.5) !important'
    }
  }
}))

export default buttonStyles
