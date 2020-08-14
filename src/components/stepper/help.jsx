import React, { useState } from "react";
import Button from "../button";
import styled from "styled-components";
import { getColor } from "../../helpers";

const StyledHelpButton = styled.span`
  .text-panel {
    background-color: ${getColor("infoBG")};
    border: 1px solid ${getColor("infoLight")};
    transform: translateY(calc(-100%));
    font-size: 1.2rem;
    width: 30rem;
    position: absolute;
    padding: 1.2rem;
    font-weight: 400;
  }
`;

const Help = ({ helpText, className }) => {
  //TODO Build click away listener
  const [textVisible, setTextVisible] = useState(false);
  const toggleTextVisible = (e) => {
    e.preventDefault();
    if (!helpText) return;
    setTextVisible(!textVisible);
  };

  return (
    <StyledHelpButton className={className}>
      {textVisible && <span className="text-panel">{helpText}</span>}
      <Button
        content="?"
        fontSize="1.8rem"
        height="3rem"
        width="6rem"
        className="help-button info"
        fn={toggleTextVisible}
        disabled={!helpText}
      />
    </StyledHelpButton>
  );
};

export default Help;
