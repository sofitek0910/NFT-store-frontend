import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

import { Formik } from "formik";
import * as yup from "yup";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import CustomButton from "components/CustomButton";
import TextField from "components/CustomInput/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

import { AppContext } from "context/AppContextProvider";

import styles from "assets/jss/views/accountStyles";
import { updateRoyalityCut } from "services";

const useStyles = makeStyles(styles);

const Royality = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { logged } = useContext(AppContext);
  let [loading, setLoading] = useState();
  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged]);

  const validationFormSchema = yup.object({
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
      amount: 0,
    },
    validationSchema: validationFormSchema,
    onSubmit: async (values) => {
      if (values.amount && values.amount !== 0) {
        let sessionId = localStorage.getItem("sid");
        // let sessionId = "630933b44c6e0a27001d2dc1";
        setLoading(true);
        const result = await updateRoyalityCut(values.amount, sessionId);
        if (result && result.isError === false) {
          notify(result.message);
          setLoading(false);
          navigate("/");
        } else if (result && result.isError === true) {
          notify(result.message);
          setLoading(false);
        } else {
          notify(result.message);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    },
  });

  const notify = (message) => toast(message);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ marginBottom: "30px" }}>
            <TextField
              id="amount"
              label="Amount"
              placeholder="Enter amount to update in flow"
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
            <CustomButton fullWidth dark className={classes.loginBtn}>
              Update Royality
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
      </Grid>
    </Grid>
  );
};

export default Royality;
