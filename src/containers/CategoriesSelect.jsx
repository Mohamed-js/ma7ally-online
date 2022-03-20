import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
  showCategoriesToSelect,
  addTraderCategory,
  showTrader,
} from '../Helpers';
import Dialog from '../components/Dialog';

const CategoriesSelect = () => {
  const [trader, setTrader] = useState();
  const history = useHistory();
  const [dialog, setDialog] = useState(false);
  const [cats, setCats] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsCount, setSelectedItemsCount] = useState(0);

  const trader_token = JSON.parse(
    sessionStorage.getItem('Ma7ally-Online-token')
  );

  useEffect(() => {
    setTrader(showTrader(trader_token).then((data) => data));
    showCategoriesToSelect().then((cats) => setCats(cats));
  }, [trader_token]);

  const handleChange = (e) => {
    if (selectedItemsCount < 4 && !selectedItems.includes(e.target.value)) {
      setSelectedItems([...selectedItems, e.target.value]);
      setSelectedItemsCount(selectedItems.length + 1);
    } else if (
      selectedItemsCount <= 4 &&
      selectedItems.includes(`${e.target.value}`)
    ) {
      const itemIndex = selectedItems.indexOf(`${e.target.value}`);
      selectedItems.splice(itemIndex, 1);

      setSelectedItems([...selectedItems]);
      setSelectedItemsCount(selectedItemsCount - 1);
    } else {
      e.target.checked = false;
      setDialog(true);
    }
  };

  const handleNext = (e) => {
    addTraderCategory(trader_token, selectedItems).then((res) => {
      if (res.message === 'Added successfully.') {
        history.push('/');
      }
    });
  };

  return (
    <div>
      {dialog && (
        <Dialog
          head="Warning"
          headClass="bg-gradient-secondary white"
          body="You reached your limit of categories."
          cancel={() => setDialog(false)}
        />
      )}
      {trader && trader.first_visit === false && history.push('/dashboard')}
      <div className="flex-row justify-center">
        <button
          onClick={handleNext}
          className="btn p-2 m-4 mb-2 bg-gradient white">
          Next
        </button>
      </div>

      <h2 className="text-center pt-2">Select your categories:</h2>
      <p className="text-center p-2">
        You can select up to 4 categories as a starter.
      </p>
      <p className="text-center pt-2">{selectedItemsCount}/4</p>
      {cats &&
        cats.map((cat) => (
          <div key={cat.id}>
            <br />
            <h2 className="text-center pt-3">{cat.name.toUpperCase()}</h2>
            <div className="grid grid-4">
              {cat.categories.map((subcat) => (
                <div
                  key={subcat.id}
                  className="text-center pt-4 flex-col align-center justify-center">
                  <div className="">
                    <img
                      src={subcat.image_data}
                      alt={subcat.name}
                      className="full-img cat-max-height"
                    />
                  </div>
                  <label className="p-2" htmlFor={subcat.name}>
                    {subcat.name.toUpperCase()}
                  </label>
                  <input
                    onChange={handleChange}
                    className="p-2"
                    type="checkbox"
                    name={subcat.name}
                    value={subcat.id}
                    id={subcat.name}
                  />
                </div>
              ))}
            </div>
            <br />
            <hr />
          </div>
        ))}
    </div>
  );
};

export default CategoriesSelect;
