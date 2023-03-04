import React, { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { googleLogout } from "@react-oauth/google";

import CustomContainer from "components/CustomContainer";
import CustomButton from "components/CustomButton";
import TitleBox from "components/TitleBox";
import TextField from "components/CustomInput/TextField";
import Payment from "views/Payment";

import { AppContext } from "context/AppContextProvider";

import styles from "assets/jss/views/accountStyles";
import MintNFT from "views/MintNFT";

import SaleCollection from "views/SaleCollection";
import Royality from "views/Royality";
import MarketCut from "views/MarketCut";
import AdminCollection from "views/AdminCollection";
import { logout } from "services";

const useStyles = makeStyles(styles);

const AdminDashboard = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { handleLogout, logged } = useContext(AppContext);
  let [loading, setLoading] = useState();
  const [tab, setTab] = useState("MintNFT");
  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged]);

  const logoutHadler = async () => {
    window.localStorage.clear();
    let sessionId = localStorage.getItem("sid");
    googleLogout();
    const result = await logout(sessionId);
    if (result && result.isError === false) {
      handleLogout();
      notify(result.message);
      navigate("/login");
    } else if (result && result.isError === true) {
      notify(result.message);
    } else {
      notify("There is an error in logout");
    }
    // setLoading(true);
    // window.localStorage.clear();
    // googleLogout();
    // handleLogout();
    // setLoading(false);
    // notify("you are logout successfully");
    // navigate("/login");
  };

  const notify = (message) => toast(message);
  return (
    <Box>
      <CustomContainer>
        <TitleBox
          subTitle="Admin settings"
          title="Admin Portal."
          color="info"
        />
        <Divider
          sx={{ borderColor: "#EBEAEF", borderWidth: "1px", margin: "30px 0" }}
        />
        <Box display="flex" flexWrap="wrap">
          <Box className={classes.menuBox}>
            <Button
              variant="text"
              className={clsx({ [classes.active]: tab === "MintNFT" })}
              onClick={() => setTab("MintNFT")}
            >
              Mint NFT
            </Button>
            <Button
              variant="text"
              className={clsx({ [classes.active]: tab === "NFTCollection" })}
              onClick={() => setTab("NFTCollection")}
            >
              NFT Collection
            </Button>
            <Button
              variant="text"
              className={clsx({ [classes.active]: tab === "SaleCollcetion" })}
              onClick={() => setTab("SaleCollcetion")}
            >
              Sale Collcetion
            </Button>
            <Button
              variant="text"
              className={clsx({ [classes.active]: tab === "Royality" })}
              onClick={() => setTab("Royality")}
            >
              Royality
            </Button>
            <Button
              variant="text"
              className={clsx({ [classes.active]: tab === "MarketCut" })}
              onClick={() => setTab("MarketCut")}
            >
              Market Cut
            </Button>
            <Button variant="text" onClick={logoutHadler}>
              Log out
            </Button>
          </Box>
          {loading && (
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
          <Box className={classes.contents}>
            {tab == "MintNFT" && <MintNFT />}
            {tab == "NFTCollection" && <AdminCollection />}
            {tab == "SaleCollcetion" && <SaleCollection />}
            {tab == "Royality" && <Royality />}
            {tab == "MarketCut" && <MarketCut />}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default AdminDashboard;
