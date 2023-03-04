import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useGoogleLogin } from "@react-oauth/google";
import { AppContext } from "context/AppContextProvider";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button } from "@mui/material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

import CustomContainer from "components/CustomContainer";
import CustomButton from "components/CustomButton";
import StyledBox from "components/StyledBox";
import TextField from "components/CustomInput/TextField";
import { registerUser, loginWithGoogle } from "services";

import styles from "assets/jss/views/authStyles";

const useStyles = makeStyles(styles);

const Register = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const { handleLogin, logged, userName } = useContext(AppContext);
  const [paswordShow, setPaswordShow] = useState(false);
  const [rePaswordShow, setRePaswordShow] = useState(false);
  const [responseError, setResponseError] = useState();
  let [loading, setLoading] = useState();

  useEffect(() => {
    if (logged && userName !== null) {
      navigate("/");
    }
  }, [logged, userName]);

  const validationSchemaForm = yup.object({
    name: yup
      .string()
      .required("name is required")
      .min(3, "A minimum of 3 characters is required."),
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
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords must match")
      .required("Password confirm is required"),
    terms: yup.bool().oneOf([true], "The terms & conditions are required"),
    newsletter: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      terms: false,
      newsletter: false,
    },
    validationSchema: validationSchemaForm,
    onSubmit: async (values) => {
      if (
        values.email &&
        values.name &&
        values.password &&
        values.repassword &&
        values.email.length !== 0 &&
        values.password.length !== 0 &&
        values.repassword.length !== 0 &&
        values.password.toLowerCase() === values.repassword.toLowerCase()
      ) {
        setLoading(true);
        let lastName = "";
        let imageUrl = "";
        const result = await registerUser(
          values.email,
          values.name,
          lastName,
          imageUrl,
          values.password
        );
        if (result && result.isError === false) {
          notify(result.message);
          setLoading(false);
          navigate("/login");
        } else {
          setResponseError(
            "The account you are trying to register with already exists, please login."
          );
          setLoading(false);
        }
      } else {
        setResponseError(
          "The account you are trying to register with already exists, please login."
        );
        setLoading(false);
      }
    },
  });

  const showPasswordHandler = (event) => {
    event.preventDefault();
    if (paswordShow) {
      setPaswordShow(false);
    } else {
      setPaswordShow(true);
    }
  };
  const showRePasswordHandler = (event) => {
    event.preventDefault();
    if (rePaswordShow) {
      setRePaswordShow(false);
    } else {
      setRePaswordShow(true);
    }
  };

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
        localStorage.setItem("token", result.loginResult.token);
        localStorage.setItem("name", result.loginResult.userName);
        localStorage.setItem("email", result.loginResult.email);
        localStorage.setItem("google", true);
        localStorage.setItem("checked", false);
        handleLogin(result.loginResult.userName);
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
      <StyledBox
        className={clsx(classes.header, classes.signUpHeader)}
        mx="auto"
      >
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
                Create account
              </Typography>
              <Typography variant="h3" color="#0F0E36">
                Register.
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
                &nbsp; Sign up with Google
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
                or Sign up with Email
              </Typography>
            </Box>
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ marginBottom: "30px" }}>
                <TextField
                  id="name"
                  type="text"
                  label="Name"
                  placeholder="John Doe"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helpertext={formik.touched.name && formik.errors.name}
                />
                <p className="error-msg">
                  {formik.touched.name && formik.errors.name}
                </p>
              </Box>
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
                  placeholder="Set your password"
                  type={!paswordShow ? "password" : "text"}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helpertext={formik.touched.password && formik.errors.password}
                  endAdornment={
                    <Button onClick={showPasswordHandler}>
                      <InputAdornment position="end">
                        <img
                          src={
                            !paswordShow
                              ? "/images/icons/iconmonstr-eye-off-lined.png"
                              : "/images/icons/iconmonstr-eye-lined.png"
                          }
                          alt=""
                        />
                      </InputAdornment>
                    </Button>
                  }
                />
                <p className="error-msg">
                  {formik.touched.password && formik.errors.password}
                </p>
              </Box>
              <Box sx={{ marginBottom: "30px" }}>
                <TextField
                  id="repassword"
                  label="Repeat Password"
                  placeholder="Repeat your password"
                  type={!rePaswordShow ? "password" : "text"}
                  onChange={formik.handleChange}
                  value={formik.values.repassword}
                  error={
                    formik.touched.repassword &&
                    Boolean(formik.errors.repassword)
                  }
                  helpertext={
                    formik.touched.repassword && formik.errors.repassword
                  }
                  endAdornment={
                    <Button onClick={showRePasswordHandler}>
                      <InputAdornment position="end">
                        <img
                          src={
                            !rePaswordShow
                              ? "/images/icons/iconmonstr-eye-off-lined.png"
                              : "/images/icons/iconmonstr-eye-lined.png"
                          }
                          alt=""
                        />
                      </InputAdornment>
                    </Button>
                  }
                />
                <p className="error-msg">
                  {formik.touched.repassword && formik.errors.repassword}
                </p>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
                flexWrap="wrap"
              >
                <Box display="flex" alignItems="center" className="terms">
                  <Checkbox
                    id="terms"
                    name="terms"
                    onChange={formik.handleChange}
                    value={formik.values.terms}
                    error={
                      formik.touched.terms &&
                      JSON.stringify(Boolean(formik.errors.terms))
                    }
                    helpertext={formik.touched.terms && formik.errors.terms}
                  />
                  <Typography variant="body1" color="#777684">
                    I’ve read and accept the &nbsp;
                    <Link
                      href="/terms"
                      target="_blank"
                      sx={{ color: "#777684" }}
                    >
                      terms & conditions
                    </Link>
                  </Typography>
                </Box>
                {formik.touched.terms && (
                  <p className="error-msg">{formik.errors.terms} </p>
                )}
                <Box display="flex" alignItems="center" className="terms">
                  <Checkbox
                    id="newsletter"
                    onChange={formik.handleChange}
                    value={formik.values.newsletter}
                    error={
                      formik.touched.newsletter &&
                      JSON.stringify(Boolean(formik.errors.newsletter))
                    }
                    helpertext={
                      formik.touched.newsletter && formik.errors.newsletter
                    }
                  />
                  <Typography variant="body1" color="#777684">
                    Subscribe to our newsletter to stay in the loop
                  </Typography>
                </Box>
              </Box>
              {responseError && <p className="error-msg">{responseError}</p>}
              <Box mb={5}>
                <CustomButton fullWidth className={classes.signupBtn}>
                  Register
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
                Already have an account? &nbsp;
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
                    navigate("/login");
                  }}
                >
                  Login &nbsp;&nbsp;
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

export default Register;
