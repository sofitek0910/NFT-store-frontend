import React, { useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button } from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import CustomContainer from "components/CustomContainer";
import CustomButton from "components/CustomButton";
import StyledBox from "components/StyledBox";
import TextField from "components/CustomInput/TextField";

import styles from "assets/jss/views/authStyles";
import { forgotPassword } from "services";

const useStyles = makeStyles(styles);

const Login = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const [responseError, setResponseError] = useState();
  let [loading, setLoading] = useState();
  window.localStorage.clear();

  const validationFormSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("email is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationFormSchema,
    onSubmit: async (values) => {
      if (values.email && values.email.length !== 0) {
        setLoading(true);
        const result = await forgotPassword(values.email);
        if (result && !result.isError) {
          notify(
            "We have emailed your password reset link, please check your email."
          );
          setLoading(false);
          navigate("/");
        } else if (result && result.isError === true) {
          setResponseError("We can't find a user with that email address.");
          setLoading(false);
        } else {
          setResponseError("We can't find a user with that email address.");
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
      setLoading(false);
    },
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
                Forgot.
              </Typography>
            </Box>
          </Box>
        </CustomContainer>
      </StyledBox>
      <Box className={classes.contents}>
        <CustomContainer>
          <Box className={classes.form} mx="auto">
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
              {responseError && <p className="error-msg">{responseError}</p>}
              <Box mb={5}>
                <CustomButton fullWidth className={classes.loginBtn}>
                  Request reset link
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
          </Box>
        </CustomContainer>
      </Box>
    </Box>
  );
};

export default Login;
