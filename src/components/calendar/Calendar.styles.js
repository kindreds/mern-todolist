import styled from 'styled-components';

export const Container = styled.div`
  position: ${({ main }) => (!main ? 'fixed' : '')};
  right: 15px;
  bottom: ${({ isOpen }) => (isOpen ? '80px' : '-100%')};
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: 5;
  width: ${({ main }) => (main ? '100%' : '345px')};
  border-radius: 5px;
  background: #222324;

  padding: 10px;

  transition: all 0.5s ease-in;
`;

export const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px 40px;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  user-select: none;
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 25px repeat(6, 1fr);
  height: 100%;
  max-height: calc(100% - 3.2rem);
  gap: 1px;
  overflow: hidden;
  box-sizing: border-box;

  ${({ isToggle }) => (isToggle ? 'display: none' : '')};
`;

export const DayName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  & p {
    color: #9d9d9d;
  }
`;

export const Button = styled.button`
  height: 2.5rem;
  height: ${({ big }) => (big ? '1.5rem' : '2.5rem')};
  width: ${({ big }) => (big ? '100%' : '40px')};
  display: flex;
  justify-content: center;
  align-items: center;
  background: #323232;
  border: 0;
  border-radius: 4px;
  outline: 0;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: #658ec6;
  }
`;

export const BtnWrapper = styled.div`
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
`;

export const SaveBtn = styled.button`
  height: 40px;
  border: 0;
  outline: 0;
  margin-right: 10px;
  margin-bottom: 10px;
  width: calc(50% - 15px);
  background-color: #284b63;
  color: #fff;
`;

export const CancelBtn = styled.button`
  height: 40px;
  border: 0;
  outline: 0;
  margin-left: 10px;
  margin-right: 10px;
  width: calc(50% - 15px);
  background-color: #bc252a;
  color: #fff;
`;
