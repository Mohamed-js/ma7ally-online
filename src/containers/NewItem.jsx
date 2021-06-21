import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { showTraderCategories, AddNewItem } from '../Helpers';

const NewItem = () => {
  const history = useHistory();
  const [item, setItem] = useState();
  const [categories, setCategories] = useState();
  const [failure, setFailure] = useState();
  const trader_token = JSON.parse(sessionStorage.getItem('Ma7ally-token'));

  useEffect(() => {
    showTraderCategories(trader_token).then((categories) =>
      setCategories(categories)
    );
  }, [trader_token]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    const btn = document.getElementById('login');
    btn.disabled = true;
    btn.style.backgroundColor = '#4caf50';
    btn.value = 'Wait...';
    btn.textContent = 'Wait...';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageInput = document.getElementById('image');
    const image = imageInput.files[0];
    setFailure('');
    handleClick();
    const respond = await AddNewItem(trader_token, item, image);
    if (respond && respond.failure) {
      const btn = document.getElementById('login');
      btn.disabled = false;
      btn.style.backgroundColor = '#ff9800';
      return setFailure(respond.failure);
    }
    setFailure('');

    return history.push('/shop');
  };

  return (
    <div className="new-item">
      <h1 className="text-center m-4">New Item</h1>
      {failure && <span className="alert-bad">{failure}</span>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group p-2">
          <p>Item Name</p>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="name form-input"
          />
        </div>
        <div className="form-group p-2">
          <p>Description</p>
          <textarea
            onChange={handleChange}
            name="description"
            className="name form-input"
          />
        </div>
        <div className="form-group p-2">
          <p>Price</p>
          <input
            onChange={handleChange}
            name="price"
            type="text"
            className="name form-input"
          />
        </div>
        <div className="form-group p-2">
          <p>Category</p>
          <select
            onChange={handleChange}
            name="category_id"
            type="text"
            className="name form-input">
            <option value=""></option>
            {categories &&
              categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name.toUpperCase()}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="form-group p-2">
          <p>Size</p>
          <input
            onChange={handleChange}
            name="size"
            type="text"
            className="name form-input"
          />
        </div>
        <div className="form-group p-2">
          <p>Unit</p>
          <input
            onChange={handleChange}
            name="unit"
            type="text"
            className="name form-input"
          />
        </div>
        <div className="form-group p-2">
          <p>Quantity</p>
          <input
            onChange={handleChange}
            name="quantity"
            type="text"
            className="name form-input"
          />
        </div>
        <div className="form-group p-2">
          <p>Image</p>
          <input
            id="image"
            name="image_data"
            type="file"
            className="name form-input"
          />
        </div>
        <div className="form-group p-2">
          <input
            onChange={handleChange}
            type="submit"
            id="login"
            className="login btn p-2 bg-tertiary white"
            value="Add"
          />
          <br />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default NewItem;
