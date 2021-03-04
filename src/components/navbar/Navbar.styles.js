import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Container = styled.nav`
  width: 100%;
  height: 60px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NavbarItem = styled.div`
  color: #fff;
  display: flex;
`;

export const Logo = styled.h1`
  letter-spacing: 1px;
  user-select: none;
  text-transform: uppercase;
  margin: 0;
`;

export const Bars = styled(FaBars)`
  position: absolute;
  top: 12px;
  left: 0;
  font-size: 30px;
  cursor: pointer;
  margin-top: 5px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
