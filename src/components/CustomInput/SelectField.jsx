import React, { useState } from 'react'
import { makeStyles } from "@mui/styles";

import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import styles from 'assets/jss/components/customInputStyles'

const useStyles = makeStyles(styles)

const SelectField = (props) => {

  const classes = useStyles()

  const { label, required, options } = props

  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box className={classes.textField}>
      <InputLabel id="demo-simple-select-label">
        {label}
        {
          required && <span> *</span>
        }
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        onChange={handleChange}
        fullWidth
      >
        {
          options.map((option) => (
            <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>
          ))
        }       
      </Select>
    </Box>
  )
}

export default SelectField
