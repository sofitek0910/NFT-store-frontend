const categoryCardStyles = ((theme) => ({
  card: {
    padding: '20px 20px 40px',
    border: '2px solid #EBEAEF',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '30px'
    }
  },
  cardMedia: {
    height: '240px',
    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  content: {
    paddingTop: '26px',
    '& h6': {
      fontSize: '24px',
      color: '#0F0E36',
      marginBottom: '20px',
      lineHeight: '1'
    },
    [theme.breakpoints.down('sm')]: {
      '& h6': {
        fontSize: '20px',
        marginBottom: '16px'
      }
    }
  },
  mark: {
    fontWeight: 'bold !important',
    lineHeight: '1 !important',
    padding: '6px 22px',    
    color: 'white',
    width: 'fit-content',
    position: 'absolute',
    right: '-5px',
    top: '30px'
  },
  art: {
    backgroundColor: '#F3008C'
  },
  sport: {
    backgroundColor: '#6680FF'
  },
  forGood: {
    backgroundColor: '#55DB2E'
  },
  music: {
    backgroundColor: '#00FFFF'
  },
  gaming: {
    backgroundColor: '#FC4575'
  },
  utility: {
    backgroundColor: '#FFFE52'
  },
  photography: {
    backgroundColor: '#E500C6'
  },
  virtualWorld: {
    backgroundColor: '#CB00FF'
  }
}))

export default categoryCardStyles
