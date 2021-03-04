import styled from 'styled-components';
import { BLUE } from '../../styles/colors';

export const DayNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5px;
  cursor: pointer;
  ${({ firstDay }) => (firstDay ? `grid-column-start: ${firstDay};` : '')};
  border: 2px solid
    ${({ today, selectedDay }) => {
      if (today) return '#3c6e71';
      if (selectedDay) return '#284b63';
      return 'transparent';
    }};
  box-sizing: border-box;
  transition: 0.3s linear;

  @media screen and (max-width: 360px) {
    padding: 0px;
  }

  & p {
    font-size: 25px;
    color: #fff;

    @media screen and (max-width: 360px) {
      font-size: 15px;
    }
  }

  &:hover {
    border: 2px solid #284b63;
  }
`;

export const Dot = styled.small`
  position: absolute;
  bottom: 0px;
  right: 0px;
  color: ${BLUE};
`;
