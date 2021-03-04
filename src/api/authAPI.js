const URL = 'https://mern-event.herokuapp.com/api/auth';

export const authAPI = async (payload, path) => {
  const res = await fetch(`${URL}/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return res.json();
};

export const authJWT = async () => {
  const token = localStorage.getItem('token');

  if (token) {
    const res = await fetch(`${URL}/renew`, {
      method: 'GET',
      headers: {
        'x-token': JSON.parse(token),
      },
    });
    return res.json();
  }

  return {
    ok: false,
    msg: 'Token Invalido',
  };
};
