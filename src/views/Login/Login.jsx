import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as yup from "yup";
import { useFormik } from "formik";

import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import CustomContainer from "components/CustomContainer";
import CustomButton from "components/CustomButton";
import StyledBox from "components/StyledBox";
import TextField from "components/CustomInput/TextField";

import { AppContext } from "context/AppContextProvider";
import { useGoogleLogin } from "@react-oauth/google";
import styles from "assets/jss/views/authStyles";
import { loginWithGoogle, login } from "services";

const useStyles = makeStyles(styles);

const Login = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [responseError, setResponseError] = useState();
  let [loading, setLoading] = useState();

  const { handleLogin, logged, userName } = useContext(AppContext);

  useEffect(() => {
    if (logged && userName !== null) {
      navigate("/");
    }
  });

  const validationFormSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "Your password length must be greater than or equal to 8")
      .matches(
        /[a-z]+/,
        "Your password must contain one or more lowercase characters."
      )
      .matches(
        /[A-Z]+/,
        "Your password must contain one or more uppercase characters."
      )
      .matches(
        /[@$!%*#?&]+/,
        "The password must contain one or more special characters."
      )
      .matches(/\d+/, "Your password must contain one or more numeric values."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationFormSchema,
    onSubmit: async (values) => {
      if (
        values.email &&
        values.password &&
        values.email.length !== 0 &&
        values.password.length !== 0
      ) {
        setLoading(true);
        const result = await login(values.email, values.password);
        if (result.loginResult && result.loginResult.isError === false) {
          localStorage.setItem("name", result.loginResult.userName);
          localStorage.setItem("email", result.loginResult.email);
          localStorage.setItem("google", false);
          localStorage.setItem("role", result.loginResult.role);

          handleLogin(result.loginResult.userName, result.loginResult.role);
          notify(result.loginResult.message);
          setLoading(false);
          navigate("/");
        } else if (result && result.isError === true) {
          setResponseError(
            "The credentials you have entered do not match our records."
          );
          setLoading(false);
        } else {
          setResponseError(
            "The credentials you have entered do not match our records."
          );
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    },
  });

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${codeResponse.access_token}` },
        })
        .then((res) => res.data);
      setLoading(true);
      const result = await loginWithGoogle(
        userInfo.sub,
        userInfo.name,
        userInfo.given_name,
        userInfo.family_name,
        userInfo.picture,
        userInfo.email,
        userInfo.email_verified,
        userInfo.locale
      );
      if (result && result.loginResult.isError === false) {
        localStorage.setItem("name", result.loginResult.userName);
        localStorage.setItem("email", result.loginResult.email);
        localStorage.setItem("google", true);
        localStorage.setItem("checked", false);
        localStorage.setItem("role", result.loginResult.role);

        handleLogin(result.loginResult.userName, result.loginResult.role);
        notify(result.loginResult.message);
        navigate("/");
        setLoading(false);
      }
    },
    onFailure: async (codeResponse) => {
      notify("We are facing issue while login through google");
    },
    flow: "implicit",
  });

  const notify = (message) => toast(message);

  return (
    <Box>
      <StyledBox className={clsx(classes.header)} mx="auto">
        <CustomContainer>
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h6"
                color="rgba(15,14,54,0.25)"
                align="center"
              >
                Hello again!
              </Typography>
              <Typography variant="h3" color="#0F0E36">
                Login.
              </Typography>
            </Box>
          </Box>
        </CustomContainer>
      </StyledBox>
      <Box className={classes.contents}>
        <CustomContainer>
          <Box className={classes.form} mx="auto">
            <Box>
              <CustomButton fullWidth onClick={googleLogin}>
                <img src="/images/icons/google.png" alt="" />
                &nbsp; Sign in with Google
              </CustomButton>
            </Box>
            <Box
              my={4}
              display="flex"
              justifyContent="center"
              position="relative"
              className={classes.orText}
            >
              <Typography variant="body1" color="rgba(119, 118, 132, 0.5)">
                or Login with Email
              </Typography>
            </Box>
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ marginBottom: "30px" }}>
                <TextField
                  id="email"
                  label="Email"
                  placeholder="E.g. johndoe@email.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helpertext={formik.touched.email && formik.errors.email}
                />
                <p className="error-msg">
                  {formik.touched.email && formik.errors.email}
                </p>
              </Box>
              <Box sx={{ marginBottom: "30px" }}>
                <TextField
                  id="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helpertext={formik.touched.password && formik.errors.password}
                />
                <p className="error-msg">
                  {formik.touched.password && formik.errors.password}
                </p>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
                flexWrap="wrap"
              >
                <Link href="/forgot" sx={{ color: "#0F0E36" }} underline="none">
                  Forgot Password?
                </Link>
              </Box>
              {responseError && <p className="error-msg">{responseError}</p>}
              <Box mb={5}>
                <CustomButton fullWidth className={classes.loginBtn}>
                  Login
                </CustomButton>
              </Box>
            </form>
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
            <Box>
              <Typography
                variant="body1"
                color="#777684"
                align="center"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                Not registered yet? &nbsp;
                <Link
                  href="/"
                  sx={{
                    color: "#0F0E36",
                    display: "flex",
                    alignItems: "center",
                  }}
                  underline="none"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/signup");
                  }}
                >
                  Create an account &nbsp;&nbsp;
                  <img
                    src="/images/icons/iconmonstr-arrow-right-lined.png"
                    alt=""
                  />
                </Link>
              </Typography>
            </Box>
          </Box>
        </CustomContainer>
      </Box>
    </Box>
  );
};

export default Login;
