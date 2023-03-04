const profileStyles = ((theme) => ({
  header: {
    backgroundImage: 'url(/images/collection-header-bg.png)',
    height: '450px',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      height: '300px'
    }
  },
  contents: {
    marginTop: '-140px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-70px'
    }
  },
  tabs: {
    borderBottom: '2px solid #EBEAEF',
    '& .MuiButtonBase-root': {
      color: '#777684',
      fontSize: "16px",
      lineHeight: '1',
      textTransform: 'none',
      paddingLeft: '0',
      paddingRight: '0',
      marginRight: '40px'
    },
    '& .Mui-selected': {
      color: '#0F0E36 !important'
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#0F0E36'
    }
  },
  dropdownBtn: {
    width: '250px',
    '& .MuiButton-outlined': {
      justifyContent: 'space-between'
    },
    [theme.breakpoints.down('sm')]: {
      width:'100%'
    }
  },
  searchInput: {    
    marginRight: '10px',
    '& .MuiOutlinedInput-root': {
      height: '50px',
      borderRadius: '25px',      
    },
    '& .MuiOutlinedInput-input': {
      paddingLeft: '10px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '2px solid #EBEAEF'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',     
      marginBottom: '10px',
      marginRight: '0 !important'
    },
  },
  filterOptions: {
    width: '350px',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  cardsWrapper: {
    width: 'calc(100% - 410px)',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  }
}))

export default profileStyles
