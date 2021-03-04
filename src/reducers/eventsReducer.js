import {
  NEW_EVENT,
  EDIT_EVENT,
  LOAD_EVENTS,
  DELETE_EVENT,
  PURGE_EVENTS,
  EDIT_ASSIGNED_EVENT,
} from '../types';

const initialState = {
  events: [],
  assigned: [],
  activeEvent: null,
};

const eventsReducer = (state = initialState, { type, payload }) => {
  const { events, assigned } = state;
  const editEvent = (e) => (e._id === payload._id ? payload : e);
  const deleteEvent = (e) => e._id !== payload._id;

  switch (type) {
    case LOAD_EVENTS:
      return { ...state, events: payload.events, assigned: payload.assigned };

    case NEW_EVENT:
      return { ...state, events: [...events, payload] };

    case EDIT_EVENT:
      return { ...state, events: events.map(editEvent) };

    case EDIT_ASSIGNED_EVENT:
      return { ...state, assigned: assigned.map(editEvent) };

    case DELETE_EVENT:
      return { ...state, events: events.filter(deleteEvent) };

    case PURGE_EVENTS:
      return initialState;

    default:
      return state;
  }
};

export default eventsReducer;
