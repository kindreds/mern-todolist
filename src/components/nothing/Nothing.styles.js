import styled from 'styled-components';
import { LIGHT } from '../../styles/colors';

export const NotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 350px;
  width: 320px;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 25px;
  color: ${LIGHT};
  text-align: center;
`;

export const NotSvg = styled.img`
  width: 100%;
  padding: 30px;
`;
