import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { showItem } from '../Helpers';

const ItemShow = () => {
  const itemId = useParams(':id');
  const [item, setItem] = useState();
  const trader_token = JSON.parse(sessionStorage.getItem('Ma7ally-token'));

  useEffect(() => {
    showItem(trader_token, itemId.id).then((item) => setItem(item));
  }, []);
  return (
    <div>
      {item && (
        <div className="item">
          <h1 className="text-center pt-4">{item.name}</h1>
          <div className="p-2 ">
            <img src={item.image_data} alt="" className="full-img max-h-50" />
          </div>

          <div className="p-4">
            <div className="controls"></div>
            <h3 className="flex-row justify-between p-3 secondary">
              {item.category.name.toUpperCase()}
            </h3>
            <div className="flex-col p-3">
              <span>Description:</span>{' '}
              <p className="pt-2">{item.description}</p>
            </div>
            <hr />
            <p className="flex-row justify-between p-3">
              <span>Price:</span> <span>{item.price} EGP</span>
            </p>
            <hr />
            <p className="flex-row justify-between p-3">
              <span>Size:</span>{' '}
              <span>
                {item.size} {item.unit}
              </span>
            </p>
            <hr />
            <p className="flex-row justify-between p-3">
              <span>Quantity:</span> <span>{item.quantity} Pieces</span>
            </p>
            <hr />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemShow;
