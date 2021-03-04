import React from 'react';
import Types from 'prop-types';

import { EventsWrapper } from './Events.styles';
import EventsList from './EventsList';
import Nothing from '../nothing';

const Events = ({ events, assigned = false }) => {
  return (
    <EventsWrapper>
      {events.length === 0 ? (
        <Nothing />
      ) : (
        events.map((e) => <EventsList key={e._id} e={e} assigned={assigned} />)
      )}
    </EventsWrapper>
  );
};

Events.propTypes = {
  assigned: Types.bool,
  important: Types.bool,
  events: Types.array.isRequired,
};

export default Events;
