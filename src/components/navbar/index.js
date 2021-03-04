import React from 'react';
import Types from 'prop-types';

import { Bars, Container, Logo, NavbarItem, Wrapper } from './Navbar.styles';
import { useLocation } from 'react-router-dom';

const Navbar = ({ setIsOpen }) => {
  const location = useLocation();
  const header = location.pathname.slice(6);
  return (
    <Container>
      <Wrapper>
        <NavbarItem>
          <Bars onClick={() => setIsOpen(true)} />
        </NavbarItem>
        <NavbarItem>
          <Logo>{header.length === 0 ? 'Home' : header}</Logo>
        </NavbarItem>
      </Wrapper>
    </Container>
  );
};

Navbar.propTypes = {
  setIsOpen: Types.func.isRequired,
};

export default Navbar;
