const blogCardStyles = ((theme) => ({
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
    paddingTop: '30px',  
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
  announcements: {
    backgroundColor: '#55DB2E'
  },
  guides: {
    backgroundColor: '#00FFFF'
  },
  guest: {
    backgroundColor: '#6680FF'
  },
  spotlight: {
    backgroundColor: '#FFFE52'
  },
  safety: {
    backgroundColor: '#E500C6'
  }
}))

export default blogCardStyles
