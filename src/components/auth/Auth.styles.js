import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { DARK, GRAY, LIGHT, RED, DARKGRAY } from '../../styles/colors';

export const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${DARK};
`;

export const Form = styled.form`
  background: ${LIGHT};
  width: calc(100% - 2rem);
  max-width: 400px;
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  animation: fade 0.5s linear;

  @media screen and (max-width: 360px) {
    width: 100%;
    height: 100vh;
    padding: 20px;
    border-radius: 0;
  }
`;

export const Headline = styled.h1`
  color: ${DARK};
  font-size: 40px;
  text-align: center;
  margin-bottom: 50px;
  text-transform: uppercase;
  user-select: none;

  @media screen and (max-width: 360px) {
    font-size: 35px;
  }
`;

export const InputsWrapper = styled.div`
  margin-bottom: 10px;
`;

export const InputItem = styled.div`
  position: relative;
`;

export const Input = styled.input`
  border: 0;
  width: 100%;
  height: 60px;
  box-shadow: none;
  color: #111;
  line-height: 60px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 16px 0 0 13px;
  background: ${({ valid }) => (valid ? LIGHT : GRAY)};
  border: 1px solid
    ${({ valid, error }) => {
      if (error) {
        return RED;
      } else {
        return valid ? DARKGRAY : LIGHT;
      }
    }};

  ${({ valid }) => (valid ? `& + label {top: -14px; left: 6px;}` : '')}

  &:focus {
    outline: 0;
    background: ${LIGHT};
    border: 1px solid ${({ error }) => (error ? '#bc252a' : DARK)};
  }

  &:focus + label {
    left: 6px;
    top: -14px;
  }
`;

export const Placeholer = styled.label`
  position: absolute;
  top: 0;
  left: 14px;
  color: ${DARKGRAY};
  user-select: none;
  line-height: 60px;
  pointer-events: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  transition: 0.1s ease-in-out;
`;

export const ShowPassword = styled(BsEyeFill)`
  position: absolute;
  top: 22px;
  right: 10px;
  font-size: 22px;
  color: ${DARKGRAY};

  transition: 0.2s ease;

  &:hover {
    color: #111;
    cursor: pointer;
  }
`;

export const HidePassword = styled(BsEyeSlashFill)`
  position: absolute;
  top: 22px;
  right: 10px;
  font-size: 22px;
  color: ${DARKGRAY};

  transition: 0.2s ease;

  &:hover {
    color: #111;
    cursor: pointer;
  }
`;

export const FrontError = styled.div`
  color: ${RED};
  font-size: 13px;
  height: 25px;
  line-height: 20px;

  @media screen and (max-width: 360px) {
    height: 20px;
    line-height: 18px;
  }
`;

export const LinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const AuthLink = styled(Link)`
  text-decoration: none;
  color: ${DARKGRAY};
  margin-bottom: 5px;
  text-transform: uppercase;
`;
