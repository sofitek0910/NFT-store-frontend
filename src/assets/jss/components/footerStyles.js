const footerStyles = ((theme) => ({
  footer: {
    padding: '120px 0',
    [theme.breakpoints.down("md")]: {
      padding: '80px 0'
    },
    [theme.breakpoints.down("sm")]: {
      padding: '50px 0'
    }
  },
  linksSection: {
    paddingBottom: '34px',
    borderBottom: '2px solid #EBEAEF',
    [theme.breakpoints.down("md")]: {
      paddingBottom: '16px',
    }
  },
  link: {
    '&.MuiLink-root': {
      color: '#0F0E36',
      fontSize: '16px',
      fontWeight: 'bold',
      marginRight: '50px',
      marginBottom: '16px'
    }
  },
  copyInfo: {
    marginTop: '50px',
    '& p': {
      color: '#777684'
    },
    '& a': {
      color: '#777684'
    },
    [theme.breakpoints.down("md")]: {
      marginTop: '20px',
    }
  }
}))

export default footerStyles

