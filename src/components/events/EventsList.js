import React from 'react';
import Types from 'prop-types';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteEventAsync, editEventAsync } from '../../actions/events';

import {
  Title,
  StarBox,
  TrashBox,
  CheckBox,
  SubTitle,
  EventItem,
  CheckIcon,
  TitleContainer,
} from './Events.styles';
import { FaStar, FaTrash } from 'react-icons/fa';

moment.locale('es-mx');

const EventsList = ({ e, assigned = false }) => {
  const dispatch = useDispatch();
  const formatEventDate = new Date(e.planned).toLocaleDateString();
  const eventDate = moment(formatEventDate, 'DD/MM/YYYY').format('DD/MM/YYYY');

  const hTrash = () => {
    dispatch(deleteEventAsync({ ...e }));
  };

  const handleEdit = (field) => {
    dispatch(editEventAsync({ ...e, [field]: !e[field] }, assigned));
  };

  return (
    <EventItem assigned={assigned}>
      <CheckBox complete={e.complete} onClick={() => handleEdit('complete')}>
        <CheckIcon />
      </CheckBox>
      <TitleContainer>
        <Title complete={e.complete}>{e.title}</Title>
        <SubTitle>{eventDate}</SubTitle>
      </TitleContainer>
      {!assigned && (
        <>
          <StarBox
            important={e.important}
            onClick={() => handleEdit('important')}
          >
            <FaStar />
          </StarBox>
          <TrashBox onClick={hTrash}>
            <FaTrash />
          </TrashBox>
        </>
      )}
    </EventItem>
  );
};

EventsList.propTypes = {
  assigned: Types.bool,
  e: Types.object.isRequired,
};

export default EventsList;
