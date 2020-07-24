import React from "react";
import styled from "styled-components";
import { getColor } from "../helpers";

const BigOlButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.25rem;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  color: ${getColor("white")};
  background-color: ${getColor("secondary")};
  cursor: pointer;
  transition: 0.15s all;

  .project-tag:hover {
    color: ${getColor("dark")};
  }
`;

const Button = () => {
  return <BigOlButton> {">"} </BigOlButton>;
};

export default Button;
