import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import Dialog from '../components/Dialog';
import { showItem, deleteTraderItem } from '../Helpers';

const ItemShow = () => {
  const itemId = useParams(':id');
  const history = useHistory();
  const [dialog, setDialog] = useState();
  const [item, setItem] = useState();
  const trader_token = JSON.parse(sessionStorage.getItem('Ma7ally-token'));

  useEffect(() => {
    showItem(trader_token, itemId.id).then((item) => setItem(item));
  }, []);

  const handleDelete = () => {
    deleteTraderItem(trader_token, itemId.id).then((res) => {
      if (res.message === 'Deleted successfully.') {
        history.push('/shop');
      }
    });
  };

  return (
    <div>
      {dialog && (
        <Dialog
          head="Warning"
          headClass="bg-gradient-danger white"
          body="Are you sure you want to delete this item?"
          btnName="Delete"
          btnClass="white bg-gradient-danger"
          funcToDo={handleDelete}
          cancel={() => setDialog(false)}
        />
      )}
      {item && item.owner && (
        <div className="controls flex-row justify-between">
          <button
            onClick={() => history.push(`/shop/item/${itemId.id}/edit`)}
            className="btn p-1 m-4 bg-gradient-tertiary white">
            Edit O
          </button>
          <button
            onClick={() => setDialog(true)}
            className="btn p-1 m-4 bg-gradient-danger white">
            Delete X
          </button>
        </div>
      )}
      {item && (
        <div className="item">
          <h1 className="text-center pt-4">{item.item.name}</h1>
          <div className="p-2 ">
            <img
              src={item.item.image_data}
              alt=""
              className="full-img max-h-50"
            />
          </div>

          <div className="p-4">
            <div className="controls"></div>
            <h3 className="flex-row justify-between p-3 secondary">
              {item.category.toUpperCase()}
            </h3>
            <div className="flex-col p-3">
              <span>Description:</span>{' '}
              <p className="pt-2">{item.item.description}</p>
            </div>
            <hr />
            <p className="flex-row justify-between p-3">
              <span>Price:</span> <span>{item.item.price} EGP</span>
            </p>
            <hr />
            <p className="flex-row justify-between p-3">
              <span>Size:</span>{' '}
              <span>
                {item.item.size} {item.item.unit}
              </span>
            </p>
            <hr />
            <p className="flex-row justify-between p-3">
              <span>Quantity:</span> <span>{item.item.quantity} Pieces</span>
            </p>
            <hr />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemShow;
