import React from "react";
import styled from "styled-components";
import { fadeIn, fadeOut } from "../anims";

const BackDropStyle = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 15;
  .backdrop-button {
    position: fixed;
    background-color: ${(props) => props.bgColor};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    border: none;
    z-index: 3;
    outline: none;
    cursor: pointer;
    animation: ${(props) => (props.fadeIn ? fadeIn : fadeOut)}
      ${(props) => props.duration} ease-in-out both;
  }
`;

const Backdrop = ({ handleClick, fadeIn, children, duration, bgColor }) => {
  return (
    <BackDropStyle
      fadeIn={fadeIn}
      duration={duration || "0.2s"}
      bgColor={bgColor || "rgba(0, 0, 0, 0.3)"}
    >
      <button className={`backdrop-button `} onClick={handleClick} />

      {children}
    </BackDropStyle>
  );
};

export default Backdrop;
