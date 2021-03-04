import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import Events from '../components/events';
import styled from 'styled-components';

moment.locale('es-mx');

const TodayContainer = styled.div`
  overflow-y: scroll;
`;

const TodayPage = () => {
  const { events } = useSelector((state) => state.events);

  const eventsFilter = events.filter(
    ({ planned }) =>
      new Date(planned).toLocaleDateString() === new Date().toLocaleDateString()
  );

  return (
    <TodayContainer>
      <Events events={eventsFilter} />
    </TodayContainer>
  );
};

export default TodayPage;
