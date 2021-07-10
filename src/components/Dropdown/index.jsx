import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "./index.css";

const SelectComponent = ({
  data,
  handleChange,
  defaultValue,
  options,
  disabled = false,
  selectClass,
}) => {
  return (
    <Select
      className={`basic-single ${selectClass || "select_default_sty"}`}
      classNamePrefix="select"
      defaultValue={defaultValue}
      name="color"
      options={options}
      onChange={handleChange}
    />
  );
};

SelectComponent.propTypes = {
  data: PropTypes.array,
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default SelectComponent;
