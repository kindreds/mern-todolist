import React from 'react';

import svg from '../../images/calendar.svg';
import { NotContainer, NotSvg, NotWrapper } from './Nothing.styles';

const Nothing = () => (
  <NotContainer>
    <NotWrapper>
      <NotSvg src={svg} alt="imagen de un calendario" />
      <h2>Focus in your day</h2>
      <p>
        Finish your tasks in the page TODAY, a list that is updated every day.
      </p>
    </NotWrapper>
  </NotContainer>
);

export default Nothing;
