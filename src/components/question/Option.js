import React from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
export default function Option({ option, handleChange, isOptionChecked }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid grey",
        borderRadius: 2,
        padding: 1,
        marginBottom: 1,
      }}
    >
      <FormControlLabel
        key={option?.id}
        value={option?.value}
        control={<Radio />}
        label={<Typography>{option?.value}</Typography>}
        onChange={handleChange(option?.id)}
        checked={isOptionChecked(option?.id)}
      />
    </Box>
  );
}
