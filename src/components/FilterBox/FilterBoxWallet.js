import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Checkbox from "@mui/material/Checkbox";

const FilterBoxWallet = (props) => {
  const { title, options, count, handler } = props;

  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box
        sx={{ padding: "10px 0", cursor: "pointer" }}
        display="flex"
        alignItems="center"
        onClick={() => setOpen(!open)}
      >
        <Typography
          variant="body1"
          color="#777684"
          sx={{ fontWeight: "bold", lineHeight: "1", marginRight: "auto" }}
        >
          {title}
        </Typography>
        {count && (
          <Typography
            variant="body1"
            color="#777684"
            sx={{ lineHeight: "1", marginRight: "30px" }}
          >
            {count}
          </Typography>
        )}
        {open ? (
          <ExpandLessIcon sx={{ color: "#777684" }} />
        ) : (
          <ExpandMoreIcon sx={{ color: "#777684" }} />
        )}
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {options.map((option) => (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            key={option}
          >
            <Typography
              className="selectOption"
              variant="body1"
              color="#777684"
              sx={{ lineHeight: "1" }}
              onClick={handler}
            >
              {option}
            </Typography>
          </Box>
        ))}
      </Collapse>
    </Box>
  );
};

export default FilterBoxWallet;
