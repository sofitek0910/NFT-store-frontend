const collectionDetailStyles = ((theme) => ({
  avatarSection: {
    width: '37.5%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  collapseItem: {
    marginBottom: '10px',
    border: '2px solid #EBEAEF',
    padding: '15px',
    width: 'calc(50% - 5px)',
    boxSizing: 'border-box'
  },
  detailSection: {
    width: '57.5%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  mark: {
    backgroundColor: '#F3008C',
    width: 'fit-content',
    padding: '6px 22px',
    borderRadius: '25px',
    color: 'white',
    lineHeight: '1',
    fontWeight: 'bold',
    marginLeft: 'auto !important'
  },
  ethPrice: {
    backgroundColor: 'rgba(85, 219, 46, 0.74)',
    borderRadius: '35px',
    height: '70px',
    width: '180px',
    boxSizing: 'border-box',
    padding: '11px 20px 16px',
    position: 'relative',
    '& p': {
      fontSize: '32px',
      fontWeight: 'bold'
    },
    [theme.breakpoints.down('sm')]: {
      width: '130px',
      height: '50px',
      padding: '11px 16px 16px',
      '& p': {
        fontSize: "20px"
      }
    }
  },
  currencyMark: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: '35px',
    width: '104px',
    height: '60px',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '80px',
      height: '40px'
    }
  },
  timeCell: {
    marginRight: '40px',
    '& h6': {
      fontSize: '24px',
      lineHeight: '1',
      marginBottom: "4px"
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '25px'
    }
  },
  activeBtn: {
    '&.MuiButton-root': {
      backgroundColor: '#EBEAEF !important'
    }    
  },
  table: {
    '& .MuiTableHead-root .MuiTableCell-root': {
      color: '#777684',
      paddingLeft: "0",
      fontSize: '16px',
      lineHeight: '1',
      paddingTop: '19px',
      paddingBottom: '20px',
      borderBottom: '2px solid #EBEAEF'
    },
    '& .MuiTableBody-root .MuiTableCell-root': {
      paddingLeft: '0',
      color: '#777684',
      fontSize: '16px',
      lineHeight: '1',
      paddingTop: '19px',
      paddingBottom: '20px',
      borderBottom: '2px solid rgba(235,234,239,0.3)'
    }
  },
  carouselControl: {
    '& .MuiButton-root': {
      width: '40px',
      height: '50px',
      padding: '17px 16px',
      minWidth: 'unset',
      borderRadius: '0',
      margin: '0 2.5px',
      backgroundColor: 'white'
    }
  },
  recentlyListCarousel: {
    marginLeft: '-12.5px',
    marginRight: '-12.5px'
  },
  browseCollection: {
    padding: '112px 0 120px',   
    backgroundColor: 'rgba(102, 128, 255, 0.1)',  
    [theme.breakpoints.down('sm')]: {
      padding: '80px 0 90px'
    }
  }
}))

export default collectionDetailStyles
