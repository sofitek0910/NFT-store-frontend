const creatorCardStyles = (() => ({
  card: {
    padding: '20px 20px 30px',
    border: '2px solid #EBEAEF',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    width: '100%',    
  },
  cardMedia: {
    height: '320px'  
  },
  content: {
    paddingTop: '24px',
    '& h6': {
      fontSize: '24px',
      lineHeight: '1'
    }   
  },
  userInfo: {
    '& h6': {
      fontSize: '18px',
      lineHeight: '1',
      marginBottom: '4px'
    },   
  },
  mainImg: {
    width: 'calc(100% - 100px - 10px)',
    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  subImg: {
    height: '100px'
  },
  moreImg: {
    position: 'relative',
    '& p': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      lineHeight: '1'
    },
    '&::before': {
      position: 'absolute',
      left: '0',
      top: '0',
      content: `''`,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(15, 14, 54, 0.75)'
    }
  },  
}))

export default creatorCardStyles
