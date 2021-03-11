import React from 'react';
import Types from 'prop-types';

import { Bars, Container, Logo, NavbarItem, Wrapper } from './Navbar.styles';
import { useLocation } from 'react-router-dom';

const Navbar = ({ setIsOpen }) => {
  const location = useLocation();
  const header = location.pathname.slice(6);

  const headerTranslate = () => {
    switch (header) {
      case 'today':
        return 'Mi Dia';
      case 'calendar':
        return 'Calendario';
      case 'assigned':
        return 'Asignadas';

      default:
        return 'Inicio';
    }
  };

  return (
    <Container>
      <Wrapper>
        <NavbarItem>
          <Bars onClick={() => setIsOpen(true)} />
        </NavbarItem>
        <NavbarItem>
          <Logo>{headerTranslate()}</Logo>
        </NavbarItem>
      </Wrapper>
    </Container>
  );
};

Navbar.propTypes = {
  setIsOpen: Types.func.isRequired,
};

export default Navbar;
