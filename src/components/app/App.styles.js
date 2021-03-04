import styled from 'styled-components';
import { BLUE, GREEN } from '../../styles/colors';

export const AppWrapper = styled.div`
  background-image: linear-gradient(to right top, ${GREEN}, ${BLUE});
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  gap: 15px;
  padding: 15px;
  height: 100vh;
`;

export const AppContainer = styled.main`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
`;
