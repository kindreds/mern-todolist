import styled from 'styled-components';
import { LIGHT } from '../../styles/colors';

export const SearchContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 50px;
  align-items: center;
  position: relative;
  border: 0;
  height: 60px;
  color: ${LIGHT};
  font-size: 18px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  overflow-y: hidden;
  animation: fade 0.5s linear;
  margin-bottom: 15px;
  padding-left: 15px;
`;

export const InputText = styled.input`
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 100%;
  color: ${LIGHT};
  z-index: 2;
  transition: all 0.3s linear;

  ${({ valid }) => (valid ? '&:valid + label { opacity: 0; }' : '')}

  &:focus {
    border: 0;
    outline: 0;
  }

  &:focus + label {
    opacity: 0;
  }
`;

export const LabelText = styled.label`
  position: absolute;
  top: 20px;
  left: 15px;
  color: #9d9d9d;
`;

export const BtnSearch = styled.button`
  border: 0;
  outline: 0;
  color: ${LIGHT};
  opacity: 1;
  background-color: transparent;
  cursor: pointer;

  transition: opacity 0.2s linear;

  &:disabled {
    opacity: 0;
  }

  &:focus {
    border: 0;
    outline: 0;
  }
`;
