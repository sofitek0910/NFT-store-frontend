import React from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

import Button from "@mui/material/Button";

import styles from "assets/jss/components/buttonStyles";

const useStyles = makeStyles(styles);

const CustomButton = (props) => {
  const { children, active, dark, className, ...others } = props;

  const classes = useStyles();

  return (
    <Button
      {...others}
      className={clsx(classes.outlineBtn, {
        [classes.dark]: dark,
        [classes.active]: active,
        [className]: className,
      })}
      variant="outlined"
      type="submit"
    >
      {children}
    </Button>
  );
};

export default CustomButton;
