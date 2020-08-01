import React from "react";
import styled from "styled-components";
import { getColor } from "../helpers";
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.select`
  /* margin-bottom: 1vh; */
  box-sizing: border-box;
  display: inline-block;
  font-size: 1.2rem;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding-top: 0.25rem;
  padding-left: 6px;
  border: none;
  border-radius: 4px;
  transition: 0.2s all;
  :focus {
    background-color: ${getColor("")};
    outline: none;
    border: 1px solid rgba(33, 134, 196, 1);
    box-shadow: 5px 5px 3px -3px rgba(89, 89, 89, 0.3);
  }
  option: {
    height: ${(props) => props.height};
  }
`;

const Select = ({ options, label, id, value, fn, height, width }) => {
  id ||
    console.error(
      "Styled Select requires an id string to match the label with the input "
    );
  label || console.error("Styled Select requires a label string for a11y");

  return (
    <StyledLabel htmlFor={id}>
      {label ? label : "No Label Passed In"}
      <StyledSelect
        id={id}
        onChange={fn}
        onBlur={fn}
        height={height}
        width={width}
        value={value}
      >
        {options ? (
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))
        ) : (
          <option>No options passed in</option>
        )}
      </StyledSelect>
    </StyledLabel>
  );
};

export default Select;
