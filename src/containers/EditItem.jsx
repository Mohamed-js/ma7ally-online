import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { showItem, editTraderItem } from '../Helpers';
const EditItem = () => {
  const itemId = useParams(':id');
  const history = useHistory();
  const [item, setItem] = useState();
  const trader_token = JSON.parse(sessionStorage.getItem('Ma7ally-token'));

  useEffect(() => {
    showItem(trader_token, itemId.id).then((item) => setItem(item));
  }, []);

  const handleChange = (e) => {
    setItem({
      ...item,
      item: { ...item.item, [e.target.name]: e.target.value },
    });
  };

  const handleEdit = () => {
    editTraderItem(trader_token, itemId.id, item.item).then((res) => {
      if (res.message === 'Updated successfully.') {
        history.push('/shop');
      }
    });
  };

  return (
    <div>
      {item && item.owner && (
        <div>
          <div>
            <h1 className="text-center p-4">Edit Item</h1>
            {item && (
              <div className="item">
                <div className="p-2 ">
                  <img
                    src={item.item.image_data}
                    alt=""
                    className="full-img max-h-50"
                  />
                </div>

                <div>
                  <div className="p-3">
                    <p>Name</p>
                    <input
                      onChange={handleChange}
                      name="name"
                      type="text"
                      className="form-input"
                      defaultValue={item.item.name}
                    />
                  </div>
                  <div className="p-3">
                    <span>Description:</span>
                    <textarea
                      onChange={handleChange}
                      name="description"
                      className="name form-input"
                      defaultValue={item.item.description}
                    />
                  </div>
                  <hr />
                  <p className="p-3">
                    <span>Price:</span>
                    <input
                      onChange={handleChange}
                      name="price"
                      type="text"
                      className="form-input"
                      defaultValue={item.item.price}
                    />
                  </p>
                  <hr />
                  <p className="p-3">
                    <span>Size:</span>
                    <input
                      onChange={handleChange}
                      name="size"
                      type="text"
                      className="form-input"
                      defaultValue={item.item.size}
                    />
                  </p>
                  <hr />
                  <p className="p-3">
                    <span>Unit:</span>
                    <input
                      onChange={handleChange}
                      name="unit"
                      type="text"
                      className="form-input"
                      defaultValue={item.item.unit}
                    />
                  </p>
                  <hr />
                  <p className="p-3">
                    <span>Quantity:</span>
                    <input
                      onChange={handleChange}
                      name="quantity"
                      type="text"
                      className="form-input"
                      defaultValue={item.item.quantity}
                    />
                  </p>
                  <div className="p-3">
                    <button
                      onClick={handleEdit}
                      className="edit btn p-2 bg-gradient white full-img">
                      Save
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditItem;
