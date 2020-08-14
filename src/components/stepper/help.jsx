import React, { useState } from "react";
import Button from "../button";
import styled from "styled-components";

const StyledHelpButton = styled.span`
  position: relative;
  .text-panel {
    transform: translateY(calc(-100%));
    font-size: 1.8rem;
    width: 30rem;
    position: absolute;
    padding: 2rem;
    font-weight: 400;
  }
`;

const Help = ({ helpText, className }) => {
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
        fontSize="4rem"
        height="5rem"
        width="10rem"
        className="help-button"
        fn={toggleTextVisible}
        disabled={!helpText}
      />
    </StyledHelpButton>
  );
};

export default Help;
