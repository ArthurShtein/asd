import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const CheckBox = ({ isChecked, onChange, label, value, handleCheckboxClick }) => {
  // const { fetchUsers } = usePeopleFetch();


  // const handleChange = () => {
  //   onChange && onChange(value);
  // };

  // const handleClick = (value) => {
  //   fetchUsers(value);
  // };

  return (
    <S.CheckBox>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            // onChange={handleChange}
            // onClick={() => handleClick(value)}
            onChange={handleCheckboxClick}
            color="primary"
          />
        }
        label={label}
      />
    </S.CheckBox>
  );
};

export default CheckBox;
