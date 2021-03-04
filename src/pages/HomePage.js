import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import isDate from 'validator/lib/isDate';

import Events from '../components/events';
import Search from '../components/search';

import styled from 'styled-components';

const HomeContainer = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  gap: 15px;
  overflow-y: hidden;
`;
const EventsContainer = styled.div`
  overflow-y: scroll;
`;

moment.locale('es-mx');

const TodayPage = () => {
  const [search, setSearch] = useState('');
  const { events } = useSelector((state) => state.events);

  // TODO: La lupa del sidebar debe llevar al home para realizar busqueda
  // TODO: correo en sidebar agregar letterspacing
  // TODO: Verificar que este habilitado el scroll en calendar

  const eventsFilter = events.filter((e) => {
    if (search.trim() === '@') return e.complete && e.important;
    if (search.trim() === '@complete') return e.complete;
    if (search.trim() === '@important') return e.important;
    if (isDate(search, { format: 'DD/MM/YYYY' })) {
      console.log('isDate');
      const formatEventDate = new Date(e.planned).toLocaleDateString();
      const userDate = moment(search, 'DD/MM/YYYY').format('L');
      const eventDate = moment(formatEventDate, 'DD/MM/YYYY').format('L');
      return eventDate === userDate;
    }

    const titleLower = e.title.toLowerCase();
    const userLower = search.toLowerCase();

    return titleLower.lastIndexOf(userLower) >= 0;
  });

  eventsFilter.sort((a, b) => {
    const dateA = +new Date(a.planned);
    const dateB = +new Date(b.planned);
    return dateA - dateB;
  });

  return (
    <HomeContainer>
      <Search search={search} setSearch={setSearch} />
      <EventsContainer>
        <Events events={eventsFilter} />
      </EventsContainer>
    </HomeContainer>
  );
};

export default TodayPage;
