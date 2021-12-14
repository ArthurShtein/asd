import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";

const CheckBox = ({ isChecked, handleCheckboxClick, label, value }) => {

  return (
    <S.CheckBox>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxClick}
            color="primary"
            value={value}
          />
        }
        label={label}
      />
    </S.CheckBox>
  );
};

export default CheckBox;
