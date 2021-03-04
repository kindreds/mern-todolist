import React, { useState } from 'react';
import Types from 'prop-types';

import { createCalendar } from '../../helpers';

import {
  Title,
  Button,
  DayName,
  Wrapper,
  DateWrapper,
  Container,
  SaveBtn,
  BtnWrapper,
  CancelBtn,
} from './Calendar.styles';

import Day from '../day';
import { useSelector } from 'react-redux';

const Calendar = ({
  main = false,
  isOpen,
  setIsOpen,
  selectedDay,
  setSelectedDay,
}) => {
  const { events } = useSelector((state) => state.events);
  const now = new Date();
  const [date, setDate] = useState({
    actualyear: now.getFullYear(),
    actualmonth: now.getMonth(),
    actualday: now.getDate(),
  });

  const { actualyear, actualmonth } = date;
  const { monthData, daysName, year } = createCalendar(actualyear, actualmonth);
  const { startOn, monthName, daysOfMonth } = monthData;

  const days = [...Array(daysOfMonth).keys()];

  const hMonth = (next = false) => {
    if (next) return setDate({ ...date, actualmonth: actualmonth + 1 });
    return setDate({ ...date, actualmonth: actualmonth - 1 });
  };

  const hIsOpen = (cancel = false) => {
    if (cancel) setSelectedDay(new Date().toISOString());
    setIsOpen(!isOpen);
  };

  return (
    <Container isOpen={isOpen} main={main}>
      <DateWrapper>
        <Title>{`${monthName.toUpperCase()}, ${year}`}</Title>
        <Button type="button" onClick={() => hMonth(false)}>
          {'↑'}
        </Button>
        <Button type="button" onClick={() => hMonth(true)}>
          {'↓'}
        </Button>
      </DateWrapper>
      <Wrapper>
        {daysName.map((day) => (
          <DayName key={day}>
            <p>{day}</p>
          </DayName>
        ))}
        {days.map((day) => (
          <Day
            key={day}
            day={day}
            date={date}
            events={events}
            startOn={startOn}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        ))}
      </Wrapper>
      {!main && (
        <BtnWrapper>
          <CancelBtn type="button" onClick={() => hIsOpen(true)}>
            Cancel
          </CancelBtn>
          <SaveBtn type="button" onClick={() => hIsOpen(false)}>
            Save
          </SaveBtn>
        </BtnWrapper>
      )}
    </Container>
  );
};

Calendar.propTypes = {
  main: Types.bool,
  isOpen: Types.bool.isRequired,
  setIsOpen: Types.func.isRequired,
  selectedDay: Types.string.isRequired,
  setSelectedDay: Types.func.isRequired,
};

export default Calendar;
