const collectionCategoryStyles = ((theme) => ({
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
  mainLogo: {
    [theme.breakpoints.down('sm')]: {
      width: '90px'
    }
  },
  socialLinks: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'left !important'
    }
  },
  infos: {
    [theme.breakpoints.down('md')]: {
      marginLeft: '0 !important',
      width: '100% !important',
      '& > div': {
        marginRight: '20px'
      },
      '& h6': {
        fontSize: '20px'
      }
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
      flex: 'none !important',
      marginBottom: '10px'
    },

  },
  filterBox: {
    width: '350px',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
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

export default collectionCategoryStyles
