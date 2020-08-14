import React, { useContext } from "react";
import { StepperContext } from "../contexts/StepperContext";
import styled from "styled-components";
import { getColor } from "../helpers";

const StyledTextBox = styled.textarea`
  display: inline-block;
  background-color: ${(props) => props.bgColor};
  box-sizing: border-box;
  resize: none;
  color: ${(props) => props.color};
  font-size: 1.2rem;
  font-weight: 400;
  padding: 2rem;
  height: 35vh;
  width: 90%;
  border: ${(props) => props.border};
  border-radius: 4px;
  transition: 0.2s all;
  font-family: inherit;

  ::placeholder {
    margin-left: 6px;
    color: ${(props) => props.color};
    opacity: 0.2;
  }
  :focus {
    outline: none;
    background-color: ${getColor("white")};
  }
  .completed {
    background-color: ${getColor("secondary")};
  }
`;

const TextBox = ({
  placeholder,
  value,
  border,
  id,
  fn,

  tag,
  name,
  className,
  color,
  bgColor,
}) => {
  const { currentStep } = useContext(StepperContext);
  id ||
    console.warn(
      "Styled Input requires an id string to match the label with the input "
    );

  return (
    <StyledTextBox
      id={tag}
      name={name || id || "name your Input"}
      color={color || getColor("font")}
      border={border || `1px solid ${getColor("lightBorder")}`}
      bgColor={color || getColor("lightgrey")}
      onChange={fn}
      onBlur={fn}
      placeholder={placeholder || "Placeholder text"}
      className={`${className} ${currentStep.completed && "completed"}`}
      value={value}
      disabled={false}
    />
  );
};

export default TextBox;
