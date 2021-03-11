import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import Events from '../components/events';
import styled from 'styled-components';
import FormEvent from '../components/events/FormEvent';

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
    <>
      <TodayContainer>
        <Events events={eventsFilter} />
      </TodayContainer>
      <FormEvent />
    </>
  );
};

export default TodayPage;
