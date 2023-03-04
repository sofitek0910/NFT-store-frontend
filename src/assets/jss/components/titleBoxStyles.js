const titleBoxStyles = ((theme) => ({
  titleBox: {
    width: 'fit-content',
    '& h6': {
      color: '24px',
      fontWeight: '400',
      lineHeight: '1'
    },
    '& h3': {
      fontWeight: 'bold',
      fontSize: "48px",
      lineHeight:"1.2",
      width: 'fit-content',
      position: 'relative',
      '&::before': {
        position: 'absolute',
        content: `''`,
        width: '130px',
        height: '30px',
        backgroundColor: 'rgba(85, 219, 46, 0.5)',
        right: '-50px',
        bottom: '-5px',
        zIndex: '-1'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& h6': {
        fontSize: '16px'
      },
      '& h3': {
        fontSize: '30px',
        '&::before': {
          width: '70px !important',
          height: '20px !important',
          right: '-20px !important'
        }
      },
    }
  },
  yellow: {
    '&::before': {
      backgroundColor: 'rgba(255, 254, 82, 0.5) !important'
    }
  },
  info: {
    '&::before': {
      backgroundColor: 'rgba(0, 255, 255, 0.5) !important'
    }
  },
  primary: {
    '&::before': {
      backgroundColor: 'rgba(102, 128, 255, 0.5) !important'
    }
  }
}))

export default titleBoxStyles
