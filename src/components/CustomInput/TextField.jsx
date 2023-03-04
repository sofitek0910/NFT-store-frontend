import React from "react";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

import styles from "assets/jss/components/customInputStyles";

const useStyles = makeStyles(styles);

const TextField = (props) => {
  const classes = useStyles();

  const { label, required, ...others } = props;

  return (
    <Box className={classes.textField}>
      <InputLabel>
        {label}
        {required && <span> *</span>}
      </InputLabel>
      <OutlinedInput fullWidth {...others} />
    </Box>
  );
};

export default TextField;
