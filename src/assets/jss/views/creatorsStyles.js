const creatorsStyles = ((theme) => ({
  header: {
    padding: '150px 0 380px',
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
      '&::before': {
        content: `''`,
        position: 'absolute',
        width: '150px',
        height: '50px',
        backgroundColor: 'rgba(102, 128, 255, 0.5)',
        left: '170px',
        bottom: '-80px',
        zIndex: '-1'
      }
    },  
    [theme.breakpoints.down('sm')]: {
      paddingTop: '100px',
      paddingBottom: '180px',
      '& h6': {
        fontSize: '20px'
      },
      '& h3': {
        fontSize: '40px',
        wordBreak: 'break-word',
        '&::before': {
          width: '100px !important',
          height: '30px !important',
          left: '130px !important',
          bottom: '-30px !important',
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
  active: {
    '&.MuiButton-root': {
      backgroundColor: 'rgba(102, 128, 255, 0.5) !important',
      color: 'white'
    }
  }
}))

export default creatorsStyles
