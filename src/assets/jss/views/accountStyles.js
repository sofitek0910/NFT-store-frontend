const accountStyles = (theme) => ({
  menuBox: {
    width: "240px",
    "& .MuiButton-root": {
      padding: "0",
      textTransform: "none",
      width: "100%",
      justifyContent: "start",
      color: "#777684",
      fontSize: "16px",
      marginBottom: "20px",
    },
  },
  active: {
    "&.MuiButton-root": {
      color: "#0F0E36 !important",
    },
  },
  contents: {
    width: "calc(100% - 240px)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  bannerImg: {
    height: "300px",
    [theme.breakpoints.down("sm")]: {
      height: "250px",
    },
  },
  logoWrapper: {
    marginTop: "-140px",
    padding: "0 30px",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 16px",
      marginTop: "-70px",
    },
  },
  mainLogo: {
    [theme.breakpoints.down("sm")]: {
      width: "90px",
      height: "90px",
    },
  },
  updateBtn: {
    "&.MuiButton-root": {
      color: "#fff !important",
      backgroundColor: "#6680FF !important",
      border: "none !important",
    },
  },
  connectBtn: {
    "&.MuiButton-root": {
      color: "#fff !important",
      backgroundColor: "#6680FF !important",
      border: "none !important",
      float: "right !important",
    },
  },
});

export default accountStyles;
