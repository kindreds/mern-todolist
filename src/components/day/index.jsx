import React from 'react';
import Types from 'prop-types';
import { DayNumber, Dot } from './Day.styles';
import { GoPrimitiveDot } from 'react-icons/go';

const Day = ({ day, startOn, date, selectedDay, setSelectedDay, events }) => {
  const now = new Date();
  const dateCom = new Date(date.actualyear, date.actualmonth, day + 1);
  const dateNow = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const eventsFilter = events.find(
    (e) =>
      new Date(e.planned).toLocaleDateString() ===
      new Date(dateCom).toLocaleDateString()
  );
  const handleClick = () => setSelectedDay(dateCom.toISOString());

  return (
    <DayNumber
      onClick={handleClick}
      firstDay={day + 1 === 1 ? startOn + 1 : null}
      selectedDay={selectedDay === dateCom.toISOString()}
      today={dateNow.toISOString() === dateCom.toISOString()}
    >
      <p>{day + 1}</p>
      {eventsFilter && (
        <Dot>
          <GoPrimitiveDot />
        </Dot>
      )}
    </DayNumber>
  );
};

Day.propTypes = {
  day: Types.number.isRequired,
  date: Types.object.isRequired,
  events: Types.arrayOf(Types.object).isRequired,
  startOn: Types.number.isRequired,
  selectedDay: Types.string.isRequired,
  setSelectedDay: Types.func.isRequired,
};

export default Day;
