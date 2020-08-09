import React from "react";
import styled from "styled-components";
import Button from "./button";
import { getColor } from "../helpers";

const NavContainer = styled.nav`
  height: 6rem;
  background-color: ${getColor("dark")};
`;

const Header = ({ toggleModal }) => {
  return (
    <NavContainer>
      <Button content="toggle" fn={toggleModal} />
    </NavContainer>
  );
};

export default Header;
