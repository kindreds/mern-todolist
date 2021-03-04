import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { DARK, DARKGRAY, GRAY, GREEN, LIGHT } from '../../styles/colors';

export const SideContainer = styled.aside`
  background: ${DARK};
  height: 100vh;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: 3;
  }

  @media screen and (min-width: 768px) {
    ${({ mobile }) => {
      if (mobile) return 'display: none;';
    }}
  }
`;

export const SideWrapper = styled.section`
  height: 100%;
`;

export const SideHeader = styled.header`
  height: 75px;
  display: grid;
  grid-template-columns: 1fr 60px;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const SideHeaderTitle = styled.div`
  color: ${GREEN};
  margin-left: 15px;
  text-align: center;
  margin-left: 60px;

  & h1 {
    margin: 0;
  }

  & small {
    color: ${GRAY};
    letter-spacing: 2px;
  }
`;

export const SideHeaderClose = styled.div`
  height: 75px;
  width: 60px;
  justify-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #323232;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CloseIcon = styled(AiOutlineArrowRight)`
  font-size: 30px;
  color: ${DARKGRAY};
`;

export const SideUser = styled.div`
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 60px;
  color: ${LIGHT};
  margin-bottom: 2px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: #323232;
  }
`;

export const SideUserLogo = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${GREEN};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  font-size: 15px;
`;

export const SideUserTitle = styled.div`
  margin-left: 10px;

  & p {
    font-size: 20px;
    letter-spacing: 1px;
  }

  & small {
    color: ${DARKGRAY};
  }
`;

export const SideSearch = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto;
  font-size: 20px;
  color: ${DARKGRAY};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: #323232;
  }
`;

export const SideItems = styled.div`
  &::after {
    content: '';
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 70%;
    height: 1px;
    background: ${DARKGRAY};
  }
`;

export const SideLink = styled(Link)`
  position: relative;
  color: #fff;
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  height: 60px;
  align-items: center;
  text-decoration: none;
  margin-bottom: 2px;
  background: ${({ active }) => (active ? '#323232' : 'transparent')};

  ${({ activo }) =>
    activo
      ? `
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 3px;
    height: 70%;
    left: 5px;
    background: ${DARKGRAY};
  }`
      : ''}

  &:hover {
    background: #323232;
  }
`;

export const SideIcon = styled.div`
  font-size: 20px;
  margin-left: 25px;
  margin-top: 5px;
  color: ${({ color }) => color};
  opacity: 0.5;
`;

export const Title = styled.p`
  margin: 0;
  letter-spacing: 2px;
  font-size: 20px;
`;

export const BtnLogout = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 15px;
`;
