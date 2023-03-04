const collectionDetailCardStyles = ((theme) => ({
  card: {
    padding: '20px 20px 30px',
    border: '2px solid #EBEAEF',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    width: '100%',    
  },
  cardMedia: {
    height: '240px',
    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  content: {
    paddingTop: '20px',  
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
  },
  userInfo: {
    '& h6': {
      fontSize: '18px',
      lineHeight: '1',
      marginBottom: '4px'
    },
    '& p': {      
    }
  }
}))

export default collectionDetailCardStyles
