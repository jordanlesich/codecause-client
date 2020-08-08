import React from "react";
import styled from "styled-components";
import { getColor } from "../helpers";

const NavContainer = styled.nav`
  height: 6rem;
  background-color: ${getColor("dark")};
`;

const Header = () => {
  return <NavContainer></NavContainer>;
};

export default Header;
