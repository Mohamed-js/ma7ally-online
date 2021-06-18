const baseURL = 'http://localhost:3000/api/v1';

export const signup = async (credits) => {
  const respond = await fetch(`${baseURL}/traders`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ trader: credits }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const signin = async (credits) => {
  const respond = await fetch(`${baseURL}/sessions`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(credits),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};
