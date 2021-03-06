import React, { useEffect, useState } from 'react';
import { showTrader, changeStoreImage } from '../Helpers';
import prof from '../images/prof.png';

import Loader from 'react-loader-spinner';

const Profile = () => {
  const [trader, setTrader] = useState(false);
  const trader_token = JSON.parse(
    sessionStorage.getItem('Ma7ally-Online-token')
  );

  useEffect(async () => {
    setTrader(await showTrader(trader_token));
  }, [trader_token]);

  const handleClick = (e) => {
    document.getElementById('upload').firstChild.click();
  };

  const save = async (e) => {
    if (e.target.files.length === 0) return;
    document.getElementById('change').style.display = 'none';
    document.getElementById('image-loader').toggleAttribute('hidden', false);
    document.getElementById('upload').style.display = 'none';
    const image = e.target.files[0];
    let traderData = await changeStoreImage(trader_token, image);
    await setTrader(traderData);
    document.getElementById('image-loader').toggleAttribute('hidden', true);
    document.getElementById('change').style.display = 'block';
  };

  return (
    <div>
      {trader && (
        <div className="flex-col align-center">
          <div className="text-center m-4">
            <h2>Welcome, </h2>
            {trader.tradername && <h1>{trader.tradername}</h1>}
          </div>
          {trader.storename && (
            <h1 className="secondary header">
              {trader.storename.toUpperCase()}
            </h1>
          )}
          <div className="profile-avatar m-4">
            {(trader.image_data && (
              <img
                className="full-img fit-cover"
                src={trader.image_data}
                alt="Profile"
              />
            )) || (
              <img className="full-img fit-cover" src={prof} alt="Profile" />
            )}
          </div>

          <div className="flex-col align-center">
            <button id="change" onClick={handleClick} className="btn p-1">
              Change store picture
            </button>
            <div id="image-loader" hidden>
              <Loader type="Bars" color="#5e3d71" height={100} width={100} />
            </div>

            <div id="upload" className="upload">
              <input
                id="image"
                onChange={save}
                className="btn p-1"
                type="file"
              />
            </div>
            <div className="text-center mt-3 flex-row align-center">
              <h3>You will find your store here: </h3>
              <hr />
              {trader.storename && (
                <a
                  className="secondary ml-2"
                  href={`http://ma7ally.herokuapp.com/${trader.storename}`}>
                  {trader.storename.toUpperCase()}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
