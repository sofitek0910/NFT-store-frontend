const collectionCardStyles = (() => ({
  card: {
    border: '2px solid #EBEAEF',
    padding: '20px'
  },
  cardMedia: {
    width: '100px',
    height: '100px'
  },
  cardContent: {
    marginLeft: '20px',
    flex: '1',
    '& h6': {
      fontSize: '18px',
      marginBottom: '4px',
      lineHeight: '1'
    },
    '& > p': {
      marginBottom: '16px'
    }
  },
  mark: {
    '&.MuiTypography-root': {
      fontWeight: 'bold',
      color: 'white',     
      padding: '6px 10px'
    }
  },
  art: {
    '&.MuiTypography-root': {
      backgroundColor: '#F3008C',
    }
  },
  sport: {
    '&.MuiTypography-root': {
      backgroundColor: '#6680FF',
    }
  }
}))

export default collectionCardStyles
