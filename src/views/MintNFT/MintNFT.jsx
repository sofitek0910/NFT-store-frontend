import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Formik } from "formik";
import * as yup from "yup";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import CustomButton from "components/CustomButton";

import TextField from "components/CustomInput/TextField";

import { AppContext } from "context/AppContextProvider";

import styles from "assets/jss/views/accountStyles";
import { mintNFT } from "services";

const useStyles = makeStyles(styles);

const MintNFT = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { handleLogout, logged } = useContext(AppContext);

  const [responseError, setResponseError] = useState();
  let [loading, setLoading] = useState();
  const [nftname, setNftname] = useState();
  const [nftdescription, setNftdescription] = useState("");
  const [artistname, setArtistname] = useState();
  const [nftMedia, setNftMedia] = useState();
  const [artistAvatar, setArtistAvatar] = useState();
  const [artistCollectionMedia, setArtistCollectionMedia] = useState();
  const [category, setCategory] = useState("");
  const [mediaError, setMediaError] = useState();
  const [avatarError, setAvatarError] = useState();
  const [artistCollectionError, setArtistCollection] = useState();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged]);

  const validationFormSchema = yup.object({
    nftname: yup
      .string()
      .required("nft name is required")
      .min(3, "Please enter a correct nft name."),
    nftdescription: yup
      .string()
      .required("nft description is required")
      .min(12, "Please enter a correct nft description."),
    artistname: yup
      .string()
      .required("artist name is required")
      .min(6, "Please enter a correct artist name."),
  });

  const formik = useFormik({
    initialValues: {
      nftname: "",
      nftdescription: "",
      artistname: "",
    },
    validationSchema: validationFormSchema,
    onSubmit: async (values) => {
      if (
        values.nftname &&
        values.nftdescription &&
        values.artistname &&
        category &&
        artistAvatar &&
        nftMedia &&
        artistCollectionMedia &&
        !mediaError &&
        !avatarError &&
        !artistCollectionError
      ) {
        let sessionId = localStorage.getItem("sid");
        setLoading(true);
        const result = await mintNFT(
          values.nftname,
          values.nftdescription,
          values.artistname,
          category,
          artistAvatar,
          nftMedia,
          artistCollectionMedia,
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

  const options = [
    {
      id: 1,
      label: "Art",
      value: "Art",
    },
    {
      id: 2,
      label: "Sport",
      value: "Sport",
    },
    {
      id: 3,
      label: "For Good",
      value: "For Good",
    },
    {
      id: 4,
      label: "Gaming",
      value: "Gaming",
    },
    {
      id: 5,
      label: "Utility",
      value: "Utility",
    },
    {
      id: 6,
      label: "Music",
      value: "Music",
    },
  ];
  const imgHandler = (e) => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    if (imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      // setNftMedia(URL.createObjectURL(e.target.files[0]));
      setNftMedia(e.target.files[0]);
      setMediaError();
    } else {
      setMediaError(
        "Please select valid image with extension jpg, jpeg,png, gif"
      );
    }
  };
  const artistAvatarHandler = (e) => {
    e.preventDefault();
    const avatarFile = e.target.files[0];
    if (avatarFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setArtistAvatar(e.target.files[0]);
      setAvatarError();
    } else {
      setAvatarError(
        "Please select valid image with extension jpg, jpeg,png, gif"
      );
    }
  };
  const artistCollectionMediaHandler = (e) => {
    e.preventDefault();
    const avatarFile = e.target.files[0];
    if (avatarFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setArtistCollectionMedia(e.target.files[0]);
      setArtistCollection();
    } else {
      setArtistCollection(
        "Please select valid image with extension jpg, jpeg,png, gif"
      );
    }
  };

  const selectHandler = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  const validateCategory = (category) => {
    if (category && category != null) {
      return true;
    } else {
      return false;
    }
  };
  const notify = (message) => toast(message);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ marginBottom: "30px" }}>
            <TextField
              id="nftname"
              label="NFT Name"
              placeholder="My first nft"
              onChange={formik.handleChange}
              value={formik.values.nftname}
              error={
                formik.touched.emawalletAddressil &&
                Boolean(formik.errors.nftname)
              }
              helpertext={
                formik.touched.emawalletAddressil && formik.errors.nftname
              }
            />
            <p className="error-msg">
              {formik.touched.nftname && formik.errors.nftname}
            </p>
          </Box>
          <Box sx={{ marginBottom: "30px" }}>
            <TextField
              id="nftdescription"
              label="NFT Description"
              placeholder="Enter nft description"
              onChange={formik.handleChange}
              value={formik.values.nftdescription}
              error={
                formik.touched.nftdescription &&
                Boolean(formik.errors.nftdescription)
              }
              helpertext={
                formik.touched.nftdescription && formik.errors.nftdescription
              }
            />
            <p className="error-msg">
              {formik.touched.nftdescription && formik.errors.nftdescription}
            </p>
          </Box>
          <Box sx={{ marginBottom: "30px" }}>
            <TextField
              id="artistname"
              label="Artist Name"
              placeholder="Enter nft artist name"
              onChange={formik.handleChange}
              value={formik.values.artistname}
              error={
                formik.touched.artistname && Boolean(formik.errors.artistname)
              }
              helpertext={formik.touched.artistname && formik.errors.artistname}
            />
            <p className="error-msg">
              {formik.touched.artistname && formik.errors.artistname}
            </p>
          </Box>

          <Box sx={{ marginBottom: "30px" }}>
            <InputLabel className="selectBoxlabel" id="selectCategory">
              Select Category
            </InputLabel>
            <Select
              required
              fullWidth
              labelId="selectCategory"
              id="selectCategory"
              value={category}
              label="Category"
              onChange={selectHandler}
            >
              {options.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Box>

          <Box sx={{ marginBottom: "30px" }}>
            <TextField
              required
              id="artistAvatar"
              label="Artist Avatar"
              placeholder="upload the file"
              type="file"
              onChange={artistAvatarHandler}
              // onChange={formik.onChange}
              // value={formik.values.media[0]}
              // error={formik.touched.media && Boolean(formik.errors.media)}
              // helpertext={formik.touched.media && formik.errors.media}
            />
            <p className="error-msg">{avatarError && avatarError}</p>
            {/* {artistAvatar && <img src={artistAvatar} />} */}
          </Box>
          <Box sx={{ marginBottom: "30px" }}>
            <TextField
              required
              id="artistCollectionMedia"
              label="Artist Collection Avatar"
              placeholder="upload the file"
              type="file"
              onChange={artistCollectionMediaHandler}
            />
            <p className="error-msg">
              {artistCollectionError && artistCollectionError}
            </p>
          </Box>
          <Box sx={{ marginBottom: "30px" }}>
            <TextField
              required
              id="media"
              label="Media"
              placeholder="upload the file"
              type="file"
              onChange={imgHandler}
            />
            <p className="error-msg">{mediaError && mediaError}</p>
          </Box>
          <Box mb={5}>
            <CustomButton fullWidth dark className={classes.loginBtn}>
              Mint NFT
            </CustomButton>
          </Box>
        </form>
      </Grid>
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
  );
};

export default MintNFT;
