import React, { useState } from "react";
import Header from "./header";
import Modal from "./modal";
import styled from "styled-components";
import { getColor } from "../helpers";

const StyleTemplate = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  color: ${getColor("dark")};
`;

const Layout = (props) => {
  const [modal, setModal] = useState(true);

  const toggleModal = () => setModal(!modal);

  return (
    <>
      {modal && <Modal toggleModal={toggleModal} />}
      <Header toggleModal={toggleModal} />
      <StyleTemplate>{props.children}</StyleTemplate>
    </>
  );
};

export default Layout;
