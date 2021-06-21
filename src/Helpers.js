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
  const respond = await fetch(`${baseURL}/trader`, {
    headers: { 'Content-Type': 'application/json', Authorization: token },
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const changeStoreImage = async (token, image) => {
  const fd = new FormData();
  fd.append('file', image);
  fd.append('upload_preset', 'ma7ally');

  const res = await fetch(
    'https://api.cloudinary.com/v1_1/atefcloud/image/upload',
    {
      method: 'POST',
      body: fd,
    }
  );

  const file = await res.json();
  const respond = await fetch(`${baseURL}/traders/1`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: token },
    body: JSON.stringify({ image: file.url }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const showTraderOrders = async (token) => {
  const respond = await fetch(`${baseURL}/orders`, {
    headers: { 'Content-Type': 'application/json', Authorization: token },
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const showTraderItems = async (token) => {
  const respond = await fetch(`${baseURL}/traders/1`, {
    headers: { 'Content-Type': 'application/json', Authorization: token },
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const AddNewItem = async (token, item) => {
  const respond = await fetch(`${baseURL}/items`, {
    headers: { 'Content-Type': 'application/json', Authorization: token },
    method: 'POST',
    body: JSON.stringify({ Item: item }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};
