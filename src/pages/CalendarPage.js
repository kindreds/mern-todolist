import React, { useState } from 'react';
import styled from 'styled-components';

import { date } from '../helpers/const';
import Info from '../components/info';
import Calendar from '../components/calendar';
import FormEvent from '../components/events/FormEvent';

const CalendarContainer = styled.div`
  height: 100%;
`;

const CalendarPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedDay, setSelectedDay] = useState(date);

  return (
    <>
      <CalendarContainer>
        <Calendar
          main={true}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
        <Info selectedDay={selectedDay} />
      </CalendarContainer>
      <FormEvent />
    </>
  );
};

export default CalendarPage;
