import React, { useState, useContext, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Formik } from "formik";
import * as yup from "yup";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";

import CustomContainer from "components/CustomContainer";
import CustomButton from "components/CustomButton";
import TextField from "components/CustomInput/TextField";
import { Login, LogOut } from "config";
import { getUserFlowBalance, transferFlow } from "Flow";

import { AppContext } from "context/AppContextProvider";

import styles from "assets/jss/views/accountStyles";

const useStyles = makeStyles(styles);

const Payment = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const {
    handleLogout,
    handleWalletLogin,
    handleWalletLogout,
    logged,
    useraddress,
    userQR,
    balance,
    fiatbalance,
  } = useContext(AppContext);
  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
    if (useraddress) {
      setUserAddress(useraddress);
      setWalletOption(true);
      setUserBalance(balance);
      setUserUsdBalance(fiatbalance);
      setUserQrCode(userQR);
    }
  }, [logged]);

  const [walletOption, setWalletOption] = useState(false);
  const [userAddress, setUserAddress] = useState();
  const [userQrCode, setUserQrCode] = useState();
  const [userBalance, setUserBalance] = useState();
  const [userUsdBalance, setUserUsdBalance] = useState();

  const validationFormSchema = yup.object({
    walletAddress: yup
      .string()
      .required("reciever walletAddress is required")
      .min(18, "Please enter a correct walletAddress."),
    amount: yup
      .number()
      .required("The number is required!")
      .test(
        "Is positive?",
        "The amount must be greater than 0",
        (value) => value > 0
      ),
  });

  const formik = useFormik({
    initialValues: {
      walletAddress: "0x01",
      amount: 0,
    },
    validationSchema: validationFormSchema,
    onSubmit: async (values) => {
      if (values.walletAddress && values.amount) {
        let result = await transferFlow(values.walletAddress, values.amount);
        if (result.errorMessage) {
          notify(result.errorMessage);
        } else {
          notify("Amount is transferd to given wallet address");
        }
      }
    },
  });

  const loginWallet = async () => {
    await Login();
    const currentUser = await fcl.currentUser.snapshot();
    setUserAddress(currentUser.addr);
    if (currentUser.loggedIn) {
      setWalletOption(true);
      var balance = await getUserFlowBalance(currentUser.addr);
      let balanceuser = parseFloat(balance).toFixed(3);
      let result = await convertCurrency();
      setUserBalance(balanceuser);
      setUserUsdBalance(parseFloat(result.USD * balanceuser).toFixed(3));
      await generateQR(currentUser.addr);
      localStorage.setItem("address", currentUser.addr);
      localStorage.setItem("userbalance", balanceuser);
      localStorage.setItem(
        "userfiatbalance",
        parseFloat(result.USD * balanceuser).toFixed(3)
      );
      handleWalletLogin(
        currentUser.addr,
        userQrCode,
        balanceuser,
        (result.USD * balanceuser).toFixed(3)
      );
    }
  };

  const convertCurrency = async () => {
    const result = await fetch(
      "https://min-api.cryptocompare.com/data/price?fsym=FLOW&tsyms=USD"
    ).then((response) => {
      return response.json();
    });

    return result;
  };

  const logoutWallet = async () => {
    await LogOut();
    setWalletOption(false);
    setUserAddress("");
    setUserBalance();
    setUserQrCode();
    localStorage.removeItem("address");
    localStorage.removeItem("userbalance");
    localStorage.removeItem("userfiatbalance");
    localStorage.removeItem("qr");

    handleWalletLogout();
  };

  const generateQR = async (text) => {
    try {
      const url = await QRCode.toDataURL(text);
      setUserQrCode(url);
      localStorage.setItem("qr", url);
    } catch (err) {
      console.error(err);
    }
  };

  const notify = (message) => toast(message);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        {userAddress && (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h2 className="usr">User Address</h2>
            <span>{userAddress}</span>
          </Grid>
        )}
        {userQrCode && (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h2 className="usr">QR Code</h2>
            <span>
              <img src={userQrCode} />
            </span>
          </Grid>
        )}
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6}>
        {!walletOption && (
          <CustomButton className={classes.connectBtn} onClick={loginWallet}>
            Connect Wallet
          </CustomButton>
        )}
        {walletOption && (
          <CustomButton className={classes.connectBtn} onClick={logoutWallet}>
            Disconnect Wallet
          </CustomButton>
        )}
        {userBalance && userAddress && (
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h2 className="usr">Balance</h2>
            <span>
              {userBalance}
              <span>
                <img className="blnceimg" src="/images/flow.svg" alt="flow" />
              </span>
            </span>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <span>
                {userUsdBalance}
                <span>
                  <img className="blnceimg" src="/images/dollar.svg" alt="$" />
                </span>
              </span>
            </Grid>
          </Grid>
        )}
      </Grid>
      {userAddress && (
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ marginBottom: "30px" }}>
              <TextField
                id="walletAddress"
                label="walletAddress"
                placeholder="0x0123"
                onChange={formik.handleChange}
                value={formik.values.walletAddress}
                error={
                  formik.touched.emawalletAddressil &&
                  Boolean(formik.errors.walletAddress)
                }
                helpertext={
                  formik.touched.emawalletAddressil &&
                  formik.errors.walletAddress
                }
              />
              <p className="error-msg">
                {formik.touched.walletAddress && formik.errors.walletAddress}
              </p>
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <TextField
                id="amount"
                label="amount"
                placeholder="Enter amount to transfer"
                type="number"
                min="1"
                onChange={formik.handleChange}
                value={formik.values.amount}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helpertext={formik.touched.amount && formik.errors.amount}
              />
              <p className="error-msg">
                {formik.touched.amount && formik.errors.amount}
              </p>
            </Box>
            <Box mb={5}>
              <CustomButton fullWidth className={classes.loginBtn}>
                Transfer Token
              </CustomButton>
            </Box>
          </form>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Link
              href="https://www.okx.com/markets/prices/flow-flow"
              sx={{
                color: "#0F0E36",
                display: "flex",
                alignItems: "center",
              }}
              underline="none"
              target="_blank"
            >
              Withdraw or Deposite fund to wallet through exchange &nbsp;&nbsp;
              <img
                src="/images/icons/iconmonstr-arrow-right-lined.png"
                alt="🚀"
              />
            </Link>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Payment;
