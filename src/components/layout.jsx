import React, { useState } from "react";
import Header from "./header";
import Stepper from "./stepper/stepper";
import Modal from "./modal";
import styled from "styled-components";
import { getColor } from "../helpers";

const StyleTemplate = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  color: ${getColor("dark")};
`;

const Layout = (props) => {
  const [modal, setModal] = useState(false);
  const [stepper, setStepper] = useState(true);

  const toggleModal = () => setModal(!modal);
  const toggleStepper = () => setStepper(!stepper);
  return (
    <>
      {modal && <Modal toggleModal={toggleModal} />}
      {stepper && <Stepper toggleStepper={toggleStepper} />}
      <Header toggleModal={toggleModal} toggleStepper={toggleStepper} />
      <StyleTemplate>{props.children}</StyleTemplate>
    </>
  );
};

export default Layout;
