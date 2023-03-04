import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import CustomButton from "components/CustomButton";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import styles from "assets/jss/components/collectionDetailCardStyles";
import { AppContext } from "context/AppContextProvider";
import { unlistNFTFromSale } from "services";

const useStyles = makeStyles(styles);

const SaleCollectionDetailCard = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [usdPrice, setUsdPrice] = useState();
  const { data } = props;

  let [loading, setLoading] = useState();
  const { logged } = useContext(AppContext);

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
    const convertCurrency = async () => {
      const result = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=FLOW&tsyms=USD"
      ).then((response) => {
        return response.json();
      });
      if (data?.price) {
        setUsdPrice(parseFloat(result.USD * data?.price).toFixed(3));
      }
      return result;
    };
    convertCurrency();
  }, [logged]);

  // const markClasses = clsx(classes.mark, {
  //   [classes.art]: data.type === "Art",
  //   [classes.sport]: data.type === "Sport",
  //   [classes.forGood]: data.type === "For Good",
  //   [classes.music]: data.type === "Music",
  //   [classes.gaming]: data.type === "Gaming",
  //   [classes.utility]: data.type === "Utility",
  //   [classes.photography]: data.type === "Photography",
  //   [classes.virtualWorld]: data.type === "Virtual World",
  // });

  const unlistNftHandler = async (nftId) => {
    if (nftId && nftId !== 0) {
      let sessionId = localStorage.getItem("sid");
      // let sessionId = "6318608afd8d194e33e08a28";
      setLoading(true);
      const result = await unlistNFTFromSale(nftId, sessionId);
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
  };
  const updateNftPriceHandler = (nftId) => {
    if (nftId && nftId != 0) {
      var id = nftId;
      navigate(`updatePriceOfNFT/${id}`, { state: { id } });
    }
  };

  const notify = (message) => toast(message);

  return (
    <Box className={classes.card} position="relative">
      <Box className={classes.cardMedia}>
        <img src={data.metadata.thumbnail} alt="" />
      </Box>
      <Box
        className={classes.userInfo}
        display="flex"
        alignItems="center"
        sx={{ marginTop: "30px" }}
      >
        <Avatar
          alt={data.name}
          src={data.metadata.thumbnail}
          sx={{ width: "48px", height: "48px", marginRight: "15px" }}
        />
        <Box>
          <Typography variant="h6" color="#0F0E36">
            {data.name}
          </Typography>
          <Typography variant="body1" color="#777684">
            {`by ${data.metadata.name}`}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.content}>
        <Typography
          variant="body1"
          color="#777684"
          sx={{ marginBottom: "20px" }}
        >
          {data.metadata.description}
        </Typography>
        <Typography
          variant="body1"
          color="#777684"
          sx={{ marginBottom: "20px" }}
        >
          {`Pice:${parseFloat(data.price).toFixed(3)}`}
          <span>
            <img className="blnceimg" src="/images/flow.svg" alt="flow" />
          </span>
          {usdPrice && (
            <span className="priceSpace">
              {usdPrice}
              <span>
                <img className="blnceimg" src="/images/dollar.svg" alt="$" />
              </span>
            </span>
          )}
        </Typography>

        <CustomButton
          onClick={() => {
            // setNftId(data.id);
            unlistNftHandler(data.tokenID);
          }}
          dark
        >
          UnList From Sale
        </CustomButton>
        <Box className={classes.content}>
          <CustomButton
            onClick={() => {
              // setNftId(data.id);
              updateNftPriceHandler(data.tokenID);
            }}
            dark
          >
            Update Price
          </CustomButton>
        </Box>
      </Box>
      {/* <Typography variant="body1" className={markClasses}>
        {data.type}
      </Typography> */}
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
  );
};

export default SaleCollectionDetailCard;
