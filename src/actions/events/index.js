import { deleteEventDB, editEventDB, newEventDB } from '../../api/eventsAPI';
import {
  DELETE_EVENT,
  LOAD_EVENTS,
  NEW_EVENT,
  EDIT_EVENT,
  PURGE_EVENTS,
  EDIT_ASSIGNED_EVENT,
} from '../../types';

export const loadEvents = (payload) => ({
  type: LOAD_EVENTS,
  payload,
});

export const editAssignedEvents = (payload) => ({
  type: EDIT_ASSIGNED_EVENT,
  payload,
});

export const editEvent = (payload) => ({
  type: EDIT_EVENT,
  payload,
});

export const newEvent = (payload) => ({
  type: NEW_EVENT,
  payload,
});

export const deleteEvent = (payload) => ({
  type: DELETE_EVENT,
  payload,
});

export const purgeEvents = () => ({
  type: PURGE_EVENTS,
});

/** Asyncronus actions */
export const editEventAsync = (payload, assigned) => async (dispatch) => {
  if (assigned) {
    dispatch(editAssignedEvents(payload));
  } else {
    dispatch(editEvent(payload));
  }

  await editEventDB(payload);
};

export const deleteEventAsync = (payload) => async (dispatch) => {
  dispatch(deleteEvent(payload));
  await deleteEventDB(payload);
};

export const newEventAsync = (payload) => async (dispatch) => {
  const { _id } = await newEventDB(payload);
  dispatch(newEvent({ _id, ...payload }));
};
