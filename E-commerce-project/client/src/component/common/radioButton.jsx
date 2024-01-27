import * as React from "react";

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function RowRadioButtonsGroup({
  heading,
  fieldsData,
  radioGroupName,
}) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{heading}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={radioGroupName}
      >
        {fieldsData.map((eachObj) => (
          <FormControlLabel
            value={eachObj.value}
            control={<Radio />}
            label={eachObj.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
