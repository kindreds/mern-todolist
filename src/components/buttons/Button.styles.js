import styled from 'styled-components';
import { DARKGRAY, GRAY, LIGHT, RED } from '../../styles/colors';

export const AuthButton = styled.button`
  outline: 0;
  align-self: center;
  color: ${LIGHT};
  width: 120px;
  height: 90px;
  line-height: 100px;
  font-size: 35px;
  padding: 0 30px;
  cursor: pointer;
  border-radius: 30px;
  margin-bottom: ${({ login }) => (login ? '40px' : '20px')};
  margin-top: ${({ login }) => (login ? '10px' : '-10px')};
  white-space: nowrap;
  border: 0;
  background: ${RED};
  opacity: 0.85;

  transition: 0.3s linear;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    background: transparent;
    color: ${DARKGRAY};
    border: 1px solid ${GRAY};
  }

  @media screen and (max-width: 360px) {
    height: 80px;
    line-height: 90px;
    margin-top: -5px;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  opacity: 0.7;

  background: ${RED};
  color: ${LIGHT};
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  font-size: ${({ big }) => (big ? '20px' : '16px')};

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
