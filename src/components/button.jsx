import React from "react";
import styled from "styled-components";
import { getColor } from "../helpers";

export const StyledButton = styled.button`
  border-radius: ${(props) => props.radius};
  position: relative;
  outline: none;
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  transition: 0.2s all;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.selected ? props.bgColor : props.color)};
  border: ${(props) => props.border};
  :hover {
    box-shadow: 5px 5px 3px -3px rgba(89, 89, 89, 0.3);
  }
  :focus {
    box-shadow: 5px 5px 3px -3px rgba(89, 89, 89, 0.3);
  }
  :disabled {
  }

  .button-bar-icon {
    height: 40px;
    width: 40px;
  }

  & > * {
    pointer-events: none;
  }
  &.open-button {
    position: absolute;
    top: 6rem;
    left: 0;
    grid-column: 3/4;
  }
  &.stepper-tab-button {
    background-color: ${getColor("dark")};
    color: ${getColor("secondary")};
    border: 1px solid ${getColor("secondary")};
    :hover:enabled {
      background-color: #182533;
      color: ${getColor("lightBorder")};
      box-shadow: none;
    }
    :focus:enabled {
      background-color: #182533;
      color: ${getColor("lightBorder")};
      box-shadow: none;
    }
    :disabled {
      color: ${getColor("darkgrey")};
      border: 1px solid ${getColor("darkgrey")};
      box-shadow: none;
    }
  }
  &.primary {
    border: 1px solid ${getColor("primaryLight")};
    background-color: ${getColor("primaryBG")};
    color: ${getColor("primary")};
    :hover {
      background-color: ${getColor("primaryLight")};
      border: 1px solid ${getColor("primaryMed")};
    }
    :focus {
      background-color: ${getColor("primaryLight")};
      border: 1px solid ${getColor("primaryMed")};
    }
  }
  &.info {
    border: 1px solid ${getColor("infoLight")};
    background-color: ${getColor("infoBG")};
    color: ${getColor("info")};
    :hover {
      background-color: ${getColor("infoLight")};
      border: 1px solid ${getColor("infoMed")};
    }
    :focus {
      background-color: ${getColor("infoLight")};
      border: 1px solid ${getColor("infoMed")};
    }
  }
`;

const Button = ({
  className,
  fn,
  content,
  value,
  height,
  width,
  bgColor,
  color,
  border,
  disabled,
  radius,
  selected,
  fontSize,
}) => {
  return (
    <StyledButton
      onClick={fn}
      value={value}
      height={height || "2.5rem"}
      width={width || "7rem"}
      fontSize={fontSize || "1.2rem"}
      color={color || getColor("dark")}
      bgColor={bgColor || getColor("white")}
      radius={radius || "4px"}
      border={border || `1px solid ${getColor("lightBorder")}`}
      className={`${selected && "selected"} ${className}`}
      disabled={disabled}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
