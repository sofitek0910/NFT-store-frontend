import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "components/CustomInput/TextField";
import { Formik } from "formik";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import CustomContainer from "components/CustomContainer";
import CustomButton from "components/CustomButton";
import TitleBox from "components/TitleBox";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import styles from "assets/jss/views/collectionDetailStyles";
import { AppContext } from "context/AppContextProvider";
import { listNFTForSale } from "services";
import { getUserNFTById } from "Flow";

const useStyles = makeStyles(styles);

const ListNftForSale = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state || {};

  const { logged } = useContext(AppContext);
  let [loading, setLoading] = useState();
  const [nftsData, setNftsData] = useState();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
    const getUserNFTsById = async () => {
      const result = await getUserNFTById(
        process.env.REACT_APP_OWNERACCOUNT,
        id
      );
      if (result) {
        let data = Object.values(result);
        setNftsData(data);
      }
    };
    getUserNFTsById();
  }, [logged]);

  const validationFormSchema = yup.object({
    nftId: yup.number().required("The number is required!"),
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
      nftId: id,
      amount: 0,
    },
    validationSchema: validationFormSchema,
    onSubmit: async (values) => {
      if (values.amount && values.amount !== 0) {
        let sessionId = localStorage.getItem("sid");
        // let sessionId = "6318608afd8d194e33e08a28";
        setLoading(true);
        const result = await listNFTForSale(
          values.amount,
          values.nftId,
          sessionId
        );
        if (result && result.isError === false) {
          notify(result.message);
          setLoading(false);
          navigate("/admin/dashborad");
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
    <Box>
      <CustomContainer>
        {nftsData?.map((obj) => (
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            key={obj.nftId}
          >
            <Box className={classes.avatarSection}>
              <Box display="flex">
                <img src={obj.media} alt="" width="100%" />
              </Box>
            </Box>

            <Box className={classes.detailSection}>
              <Box
                display="flex"
                alignItems="center"
                sx={{ marginBottom: "22px" }}
              >
                <Typography variant="body1" className={classes.mark}>
                  Art
                </Typography>
              </Box>

              <Box>
                <TitleBox
                  subTitle={obj.name}
                  title={obj.name}
                  // " #6920."
                  color="info"
                />
                <Typography
                  variant="body1"
                  sx={{ marginTop: "16px", marginBottom: "8px" }}
                  color="#777684"
                >
                  {obj.description}
                </Typography>
              </Box>

              <Divider
                sx={{
                  borderColor: "#EBEAEF",
                  borderWidth: "1px",
                  margin: "30px 0",
                }}
              />

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Box display="flex" alignItems="center" mb={1}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <form onSubmit={formik.handleSubmit}>
                      <Box sx={{ marginBottom: "30px" }}>
                        <TextField
                          id="amount"
                          label="Amount in flow"
                          placeholder="Enter amount to update in flow"
                          type="number"
                          min="1"
                          onChange={formik.handleChange}
                          value={formik.values.amount}
                          error={
                            formik.touched.amount &&
                            Boolean(formik.errors.amount)
                          }
                          helpertext={
                            formik.touched.amount && formik.errors.amount
                          }
                        />
                        <p className="error-msg">
                          {formik.touched.amount && formik.errors.amount}
                        </p>
                      </Box>
                      <Box mb={5}>
                        <CustomButton dark sx={{ marginRight: "10px" }}>
                          List for Sale
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
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </CustomContainer>
    </Box>
  );
};

export default ListNftForSale;
