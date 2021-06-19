import React, { useEffect, useState } from 'react';
import { showTrader, changeStoreImage } from '../Helpers';
import prof from '../images/prof.png';

const Profile = () => {
  const [trader, setTrader] = useState();
  const trader_token = JSON.parse(sessionStorage.getItem('Ma7ally-token'));

  useEffect(async () => {
    setTrader(await showTrader(trader_token).then((data) => data));
  }, [trader_token]);

  const handleClick = (e) => {
    e.target.style.display = 'none';
    document.getElementById('upload').style.display = 'flex';
  };

  const save = (e) => {
    e.preventDefault();
    const image = document.getElementById('image').files[0];
    changeStoreImage(trader_token, image);
    document.getElementById('upload').style.display = 'none';
    document.getElementById('change').style.display = 'block';
  };

  return (
    <div>
      {trader && (
        <div className="flex-col align-center">
          <div className="plan-icon m-2">
            {console.log(trader)}
            {trader.image_data && (
              <img className="full-img" src={trader.image_data} alt="Profile" />
            )}
            {!trader.image_date && (
              <img className="full-img" src={prof} alt="Profile" />
            )}
          </div>
          <div className="flex-col align-center">
            <button id="change" onClick={handleClick} className="btn p-1">
              Change store picture
            </button>
            <form
              id="upload"
              encType="multipart/form-data"
              className="upload flex-col align-center"
              onSubmit={save}>
              <input id="image" className="btn p-1" type="file" />
              <button className="save btn bg-secondary p-1">Save</button>
            </form>
          </div>
          <div className="text-center m-4">
            <h2>Welcome, </h2>
            <h1>{trader.tradername}</h1>
          </div>
          <h2>Your store name:</h2>
          <h1 className="secondary">{trader.storename}</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
