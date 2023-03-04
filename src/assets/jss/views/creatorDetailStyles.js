const creatorDetailStyles = (theme) => ({
  header: {
    backgroundImage: "url(/images/creator-detail-bg.png)",
    height: "450px",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  },
  contents: {
    marginTop: "-140px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-70px",
    },
  },
  tabs: {
    borderBottom: "2px solid #EBEAEF",
    "& .MuiButtonBase-root": {
      color: "#777684",
      fontSize: "16px",
      lineHeight: "1",
      textTransform: "none",
      paddingLeft: "0",
      paddingRight: "0",
      marginRight: "40px",
    },
    "& .Mui-selected": {
      color: "#0F0E36 !important",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "#0F0E36",
    },
  },
  carouselControl: {
    "& .MuiButton-root": {
      width: "40px",
      height: "50px",
      padding: "17px 16px",
      minWidth: "unset",
      borderRadius: "0",
      margin: "0 2.5px",
      backgroundColor: "white",
    },
  },
  carousel: {
    marginLeft: "-15px",
    marginRight: "-15px",
  },
  comingSoon: {
    paddingTop: "112px",
    paddingBottom: "120px",
    backgroundColor: "rgba(102, 128, 255, 0.1)",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "60px",
      paddingBottom: "60px",
    },
  },
  comingSoonImg: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  comingSoonContent: {
    width: "50%",
    padding: "0 40px 0 60px",
    boxSizing: "border-box",
    "& h6": {
      fontSize: "28px",
      lineHeight: "1",
      fontWeight: "400",
    },
    "& h3": {
      fontSize: "68px",
      lineHeight: "1.15",
      fontWeight: "100",
      marginBottom: "26px",
      position: "relative",
      width: "fit-content",
      "&::before": {
        content: `''`,
        position: "absolute",
        width: "150px",
        height: "50px",
        backgroundColor: "rgba(102, 128, 255, 0.5)",
        right: "-75px",
        bottom: "-6px",
      },
    },
    "& h5": {
      fontSize: "24px",
      fontWeight: "bold",
      marginTop: "70px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "50px",
      padding: "0",
    },
    [theme.breakpoints.down("sm")]: {
      "& h6": {
        fontSize: "20px",
      },
      "& h3": {
        fontSize: "40px",
        wordBreak: "break-word",
        "&::before": {
          width: "100px !important",
          height: "30px !important",
          left: "130px",
        },
      },
      "& h5": {
        fontSize: "18px",
        marginTop: "40px",
      },
    },
  },
  comingMark: {
    lineHeight: "1",
    fontWeight: "bold",
    backgroundColor: "#55DB2E",
    color: "white !important",
    padding: "6px 22px",
    position: "absolute",
    top: "30px",
    right: "-5px",
    width: "fit-content",
  },
  aboutDetail: {
    width: "50%",
    padding: "0 60px 0 0px",
    boxSizing: "border-box",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0",
      marginBottom: "20px",
    },
  },
  aboutImgCell: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  aboutImg: {
    width: "75vw",
    maxWidth: "1440px",
    height: "550px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  },
  aboutTextCell: {
    width: "calc(50% - 30px)",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBottom: "30px",
    },
  },
  mainLogo: {
    [theme.breakpoints.down("sm")]: {
      width: "90px",
    },
  },
});

export default creatorDetailStyles;
