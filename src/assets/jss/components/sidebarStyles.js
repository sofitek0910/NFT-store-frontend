import { ImportantDevices } from "@mui/icons-material";

const sidebarStyles = () => ({
  wrapper: {
    width: "300px",
  },
  link: {
    "&.MuiLink-root": {
      color: "#777684",
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "28px",
      display: "block",
      width: "100%",
      marginBottom: "1rem",
    },
  },
  loginBtn: {
    "&.MuiButton-root": {
      color: "#0F0E36",
      fontWeight: "bold",
      textTransform: "none",
      border: "2px solid #0F0E36",
      borderRadius: "25px",
      width: "100%",
      height: "50px",
    },
  },

  profieBtn: {
    "&.MuiButton-root": {
      color: "#777684 !important",
      borderColor: "#EBEAEF !important",
    },
    "& img": {
      position: "absolute",
      left: "5px",
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
});

export default sidebarStyles;
