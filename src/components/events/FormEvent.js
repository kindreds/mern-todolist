import React, { useState } from 'react';
import Types from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { date } from '../../helpers/const';
import { newEventAsync } from '../../actions/events';

import {
  AddNewEvent,
  InputNewEvent,
  LabelNewEvent,
  BtnNewEvent,
  IconPlus,
  DateNewEvent,
} from './Events.styles';
import Calendar from '../calendar';
import { BsCalendar } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';

const FormEvent = ({ important = false }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [title, setTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(date);

  const hIsOpen = () => setIsOpen(true);

  const hOnSubmit = (e) => {
    e.preventDefault();

    const payload = {
      important,
      title: title,
      complete: false,
      assignedTo: null,
      createdBy: user.uid,
      planned: selectedDay,
    };

    dispatch(newEventAsync(payload));

    setSelectedDay(new Date().toISOString());
    setTitle('');
  };

  return (
    <AddNewEvent onSubmit={hOnSubmit} autoComplete="off">
      <IconPlus />
      <InputNewEvent
        type="text"
        name="event"
        value={title}
        valid={title.trim() !== ''}
        onChange={({ target }) => setTitle(target.value)}
      />
      <LabelNewEvent>Add event</LabelNewEvent>
      <DateNewEvent disabled={title.trim() === ''} onClick={hIsOpen}>
        <BsCalendar />
      </DateNewEvent>
      <BtnNewEvent disabled={title.trim() === ''}>
        <FaArrowRight />
      </BtnNewEvent>
      <Calendar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    </AddNewEvent>
  );
};

FormEvent.propTypes = {
  important: Types.bool,
};

export default FormEvent;
