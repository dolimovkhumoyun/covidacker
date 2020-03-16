import React from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";

const CustomMaskedInput = props => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\w/, /\w/, " ", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
};

CustomMaskedInput.propTypes = {
  inputRef: PropTypes.func.isRequired
};

export default CustomMaskedInput;
