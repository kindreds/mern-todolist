import React from 'react';
import moment from 'moment';
import 'moment/locale/es-mx';
import Types from 'prop-types';
import { useSelector } from 'react-redux';

import EventsList from '../events/EventsList';
import { Header, InfoContainer, SubTitle } from './Info.styles';

moment.locale('es-mx');

const Info = ({ selectedDay }) => {
  const { events } = useSelector((state) => state.events);

  const eventsFil = events.filter(({ planned }) => planned === selectedDay);
  const componentDate = new Date(selectedDay);

  return (
    <InfoContainer>
      <Header>
        <SubTitle>{moment(componentDate).format('LL')}</SubTitle>
      </Header>
      {eventsFil.length === 0 ? (
        <h2>No hay elementos</h2>
      ) : (
        eventsFil.map((event) => <EventsList key={event._id} e={event} />)
      )}
    </InfoContainer>
  );
};

Info.propTypes = {
  selectedDay: Types.string.isRequired,
};

export default Info;
