import React from 'react';
import Types from 'prop-types';
import { Header, InfoContainer, SubTitle } from './Info.styles';
import { useSelector } from 'react-redux';
import EventsList from '../events/EventsList';

const Info = ({ selectedDay }) => {
  const { events } = useSelector((state) => state.events);

  const eventsFil = events.filter(({ planned }) => planned === selectedDay);

  return (
    <InfoContainer>
      <Header>
        <SubTitle>{new Date(selectedDay).toDateString()}</SubTitle>
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
