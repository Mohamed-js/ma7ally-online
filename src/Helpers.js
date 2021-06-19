import axios from 'axios';

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

export const showTrader = async (token) => {
  const respond = await fetch(`${baseURL}/traders/1`, {
    headers: { 'Content-Type': 'application/json', Authorization: token },
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

// export const changeStoreImage = async (token, image) => {
//   const fd = new FormData();
//   fd.append('image', image, image.name);
//   console.log(fd);
//   const respond = await fetch(`${baseURL}/traders/1`, {
//     headers: { 'Content-Type': 'application/json', Authorization: token },
//     method: 'PUT',
//     body: JSON.stringify({ image: image.name }),
//   })
//     .then((res) => res.json())
//     .then((data) => data);
//   return respond;
// };

export const changeStoreImage = async (token, image) => {
  const fd = new FormData();
  fd.append('image', image, image.name);
  axios
    .put(`${baseURL}/traders/1`, fd, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => console.log(res));
};
