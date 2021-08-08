const baseURL = "http://localhost:3000/api/v1";

export const signup = async (credits) => {
  const respond = await fetch(`${baseURL}/traders`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ trader: credits }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const signIn = async (credits) => {
  const respond = await fetch(`${baseURL}/sessions`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(credits),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const showCategoriesToSelect = async () => {
  const respond = await fetch(`${baseURL}/parents`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const addTraderCategory = async (token, categories) => {
  const respond = await fetch(`${baseURL}/trader_categories`, {
    headers: { "Content-Type": "application/json", Authorization: token },
    method: "POST",
    body: JSON.stringify({ trader_category: { categories: categories } }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const showTrader = async (token) => {
  const respond = await fetch(`${baseURL}/traders/1`, {
    headers: { "Content-Type": "application/json", Authorization: token },
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const changeStoreImage = async (token, image) => {
  const fd = new FormData();
  fd.append("file", image);
  fd.append("upload_preset", "ma7ally");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/atefcloud/image/upload",
    {
      method: "POST",
      body: fd,
    }
  );

  const file = await res.json();
  const respond = await fetch(`${baseURL}/traders/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ image: file.url }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const showTraderOrders = async (token) => {
  const respond = await fetch(`${baseURL}/orders`, {
    headers: { "Content-Type": "application/json", Authorization: token },
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const showTraderItems = async (token) => {
  const respond = await fetch(`${baseURL}/trader-items`, {
    headers: { "Content-Type": "application/json", Authorization: token },
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const AddNewItem = async (token, item, image) => {
  const fd = new FormData();
  fd.append("file", image);
  fd.append("upload_preset", "ma7ally");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/atefcloud/image/upload",
    {
      method: "POST",
      body: fd,
    }
  );
  const file = await res.json();
  // Image is uploaded
  const itemWithImage = { ...item, image_data: file.url };
  const respond = await fetch(`${baseURL}/items`, {
    headers: { "Content-Type": "application/json", Authorization: token },
    method: "POST",
    body: JSON.stringify({ item: itemWithImage }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const showTraderCategories = async (token) => {
  const respond = await fetch(`${baseURL}/trader-categories`, {
    headers: { "Content-Type": "application/json", Authorization: token },
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const showItem = async (token, itemId) => {
  const respond = await fetch(`${baseURL}/items/${itemId}`, {
    headers: { "Content-Type": "application/json", Authorization: token },
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const deleteTraderItem = async (token, itemId) => {
  const respond = await fetch(`${baseURL}/items/${itemId}`, {
    headers: { "Content-Type": "application/json", Authorization: token },
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};

export const editTraderItem = async (token, itemId, item) => {
  const respond = await fetch(`${baseURL}/items/${itemId}`, {
    headers: { "Content-Type": "application/json", Authorization: token },
    method: "PATCH",
    body: JSON.stringify({ item: item }),
  })
    .then((res) => res.json())
    .then((data) => data);
  return respond;
};
