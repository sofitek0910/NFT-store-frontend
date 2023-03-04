const exploreStyles = ((theme) => ({
  header: {
    padding: '150px 0 236px',
    backgroundColor: 'rgba(255, 254, 82, 0.1)',
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
        width: '310px',
        height: '50px',
        backgroundColor: 'rgba(255, 254, 82, 0.5)',
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
          width: '200px !important',
          height: '30px !important',
          left: '30px !important'
        }
      }
    }
  },
  contents: {
    paddingBottom: '120px',
    marginTop: '-144px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-100px',
      paddingBottom: '80px'
    }
  },
  collectibles: {
    backgroundColor: 'rgba(243, 0, 140, 0.1)',
    '& h3': {
      "&::before": {
        backgroundColor: 'rgba(243, 0, 140, 0.5)'
      }
    }
  }
}))

export default exploreStyles
