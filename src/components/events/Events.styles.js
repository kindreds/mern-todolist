import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import { DARK, DARKGRAY, LIGHT, YELLOW } from '../../styles/colors';

export const EventsWrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 99%;
  height: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 320px) {
    width: 290px;
  }
`;

export const EventItem = styled.div`
  background-color: ${DARK};
  border-radius: 5px;
  height: 60px;
  display: grid;
  grid-template-columns: 50px 1fr ${({ assigned }) =>
      !assigned ? '50px 50px' : ''};
  align-items: center;
  margin-bottom: 5px;

  animation: fade 0.5s linear;
`;

export const CheckBox = styled.div`
  position: relative;
  justify-self: center;
  margin-top: -3px;
  border: 2px solid ${DARKGRAY};
  border-radius: 50%;
  width: 55%;
  height: 50%;
  cursor: pointer;

  svg {
    opacity: ${({ complete }) => (complete ? '1' : '0')};
  }

  @media screen and (min-width: 550px) {
    &:hover svg {
      opacity: 1;
    }
  }
`;

export const CheckIcon = styled(FaCheck)`
  position: absolute;
  top: 5px;
  left: 4px;
  opacity: 0;
  color: ${DARKGRAY};
  transition: opacity 0.3s ease;
`;

export const StarBox = styled.div`
  color: ${({ important }) => (important ? YELLOW : DARKGRAY)};
  font-size: 18px;
  justify-self: center;
  cursor: pointer;

  @media screen and (min-width: 550px) {
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const TrashBox = styled.div`
  color: ${DARKGRAY};
  font-size: 18px;
  justify-self: center;
  cursor: pointer;

  @media screen and (min-width: 550px) {
    &:hover,
    &:focus,
    &:active {
      color: ${LIGHT};
    }
  }
`;

export const TitleContainer = styled.div``;

export const Title = styled.p`
  font-size: 18px;
  color: ${LIGHT};
  font-style: ${({ complete }) => (complete ? 'italic' : 'normal')};
  text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
`;

export const SubTitle = styled.small`
  color: ${DARKGRAY};
`;

export const AddNewEvent = styled.form`
  display: grid;
  grid-template-columns: 50px minmax(100px, 1fr) 50px 50px;
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
`;

export const IconPlus = styled(FiPlus)`
  color: ${DARKGRAY};
  justify-self: center;
  font-size: 22px;
`;

export const InputNewEvent = styled.input`
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

export const LabelNewEvent = styled.label`
  position: absolute;
  top: 20px;
  left: 50px;
`;

export const BtnNewEvent = styled.button`
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

export const DateNewEvent = styled.div`
  display: flex;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? '0' : '1')};
`;
