const recentCardStyles = ((theme) => ({
  card: {
    padding: '20px 20px 30px',
    border: '2px solid #EBEAEF',
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '30px'
    }
  },
  smallCard: {
    padding: '20px 15px'
  },
  cardMedia: {
    height: '340px',
    '& img': {
      width: '100%',
      height: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      height: '270px'
    }
  },
  smallCardMedia: {
    height: '220px',
    [theme.breakpoints.down('sm')]: {
      height: '270px'
    }
  },
  content: {
    paddingTop: '26px',
    '& h6': {
      fontSize: '24px',
      color: '#0F0E36',
      marginBottom: '5px',
      lineHeight: '1'
    },
    [theme.breakpoints.down('sm')]: {
      '& h6': {
        fontSize: '20px',       
      }
    }
  },
  smallCardContent: {
    paddingTop: '18px',
    '& h6': {
      fontSize: '18px'
    },
    '& p': {
      fontSize: "15px"
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
  cardHeader: {
    marginBottom: '16px',
    '& h6': {
      marginBottom: '4px',
      lineHeight: '1',
      fontSize: '18px'
    },
    '& p': {
      lineHeight: '1'
    }
  },
  smallCardHeader: {
    '& h6': {    
      fontSize: '16px'
    },
    '& p': {
      fontSize: '15px'
    }
  },
  smallCardBtn: {
    '&.MuiButton-root': {
      fontSize: '15px !important',
      padding: '12px 17px !important'
    }
  }
}))

export default recentCardStyles
