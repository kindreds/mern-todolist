const URL = 'https://mern-event.herokuapp.com/api/event';

export const getAssignedEventsDB = async (uid) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${URL}/assigned/${uid}`, {
    method: 'GET',
    headers: {
      'x-token': JSON.parse(token),
    },
  });
  return res.json();
};

export const getEventsDB = async (uid) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${URL}/${uid}`, {
    method: 'GET',
    headers: {
      'x-token': JSON.parse(token),
    },
  });
  return res.json();
};

export const editEventDB = async ({ _id, ...rest }) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${URL}/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-token': JSON.parse(token),
    },
    body: JSON.stringify(rest),
  });
  return res.json();
};

export const deleteEventDB = async ({ _id }) => {
  const token = localStorage.getItem('token');
  const res = await fetch(`${URL}/${_id}`, {
    method: 'DELETE',
    headers: {
      'x-token': JSON.parse(token),
    },
  });
  return res.json();
};

export const newEventDB = async (payload) => {
  const token = localStorage.getItem('token');
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-token': JSON.parse(token),
    },
    body: JSON.stringify(payload),
  });
  return res.json();
};
