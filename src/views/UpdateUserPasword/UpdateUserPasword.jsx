import React, { useState, useLayoutEffect } from "react";
import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button } from "@mui/material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

import CustomContainer from "components/CustomContainer";
import CustomButton from "components/CustomButton";
import StyledBox from "components/StyledBox";
import TextField from "components/CustomInput/TextField";
import { updateNewPassword } from "services";

import styles from "assets/jss/views/authStyles";

const useStyles = makeStyles(styles);

const UpdateUserPasword = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [pasword, setPasword] = useState();
  const [repasword, setRepasword] = useState();
  const [tokenParam, setTokenParam] = useState();
  const [passwrodError, setPasswrodError] = useState();
  let [loading, setLoading] = useState();

  let { id } = useParams();
  useLayoutEffect(() => {
    setTokenParam(id);
  }, [tokenParam]);

  window.localStorage.clear();

  const isValidPassword = (password) => {
    if (password.length > 5 && password.length < 20) {
      return true;
    } else {
      return false;
    }
  };

  const passwordHanlder = (event) => {
    event.preventDefault();
    if (!isValidPassword(event.target.value)) {
      setPasswrodError(
        "please provide minimum 6 letters and password should match with re-password"
      );
    } else {
      setPasswrodError(null);
    }
    setPasword(event.target.value);
  };

  const rePasswordHanlder = (event) => {
    event.preventDefault();
    if (
      !isValidPassword(event.target.value) ||
      event.target.value !== pasword
    ) {
      setPasswrodError(
        "please provide minimum 6 letters and password should match with re-password"
      );
    } else {
      setPasswrodError(null);
    }
    setRepasword(event.target.value);
  };

  const updatePasswordHandler = async (event) => {
    event.preventDefault();
    if (
      pasword &&
      repasword &&
      pasword.length !== 0 &&
      repasword.length !== 0 &&
      pasword.toLowerCase() === repasword.toLowerCase() &&
      isValidPassword(pasword) &&
      tokenParam &&
      tokenParam.length !== 0
    ) {
      setLoading(true);
      const result = await updateNewPassword(pasword, tokenParam);
      if (result && result.result.isError === false) {
        notify(result.result.message);
        setLoading(false);
        navigate("/login");
      } else {
        notify(
          "There is an issue while updating your pasword please try again"
        );
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const validationSchemaForm = yup.object({
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
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      repassword: "",
    },
    validationSchema: validationSchemaForm,
    onSubmit: async (values) => {
      if (
        values.password &&
        values.repassword &&
        values.password.length !== 0 &&
        values.repassword.length !== 0 &&
        values.password.toLowerCase() === repasword.toLowerCase() &&
        tokenParam &&
        tokenParam.length !== 0
      ) {
        setLoading(true);
        const result = await updateNewPassword(values.password, tokenParam);
        if (result && result.result.isError === false) {
          notify(result.result.message);
          setLoading(false);
          navigate("/login");
        } else {
          notify(
            "There is an issue while updating your pasword please try again"
          );
          navigate("/login");
          setLoading(false);
        }
      } else {
        setLoading(false);
        navigate("/login");
      }
      setLoading(false);
    },
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
                Update Password
              </Typography>
              <Typography variant="h3" color="#0F0E36">
                Update Password.
              </Typography>
            </Box>
          </Box>
        </CustomContainer>
      </StyledBox>
      <Box className={classes.contents}>
        <CustomContainer>
          <Box className={classes.form} mx="auto">
            <Box sx={{ marginBottom: "30px" }}>
              <TextField
                label="Password"
                placeholder="Set your password"
                type="password"
                onChange={passwordHanlder}
                endAdornment={
                  <InputAdornment position="end">
                    <img
                      src="/images/icons/iconmonstr-eye-off-lined.png"
                      alt=""
                    />
                  </InputAdornment>
                }
              />
              <p className="error-msg">{passwrodError}</p>
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <TextField
                label="Repeat Password"
                placeholder="Repeat your password"
                type="password"
                onChange={rePasswordHanlder}
                endAdornment={
                  <InputAdornment position="end">
                    <img
                      src="/images/icons/iconmonstr-eye-off-lined.png"
                      alt=""
                    />
                  </InputAdornment>
                }
              />
              <p className="error-msg">{passwrodError}</p>
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
            <Box mb={5}>
              <CustomButton
                fullWidth
                className={classes.signupBtn}
                onClick={updatePasswordHandler}
              >
                Set a new password
              </CustomButton>
            </Box>
          </Box>
        </CustomContainer>
      </Box>
    </Box>
  );
};

export default UpdateUserPasword;
