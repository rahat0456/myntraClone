import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BagFunctions } from "../store/bagFetch";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const gatherBag = useSelector((store) => store.baggyitems);

  const finalItems = gatherBag?.indexOf(item.id) >= 0;

  const Adder = () => {
    dispatch(BagFunctions.addToBag(item.id));
  };

  const Remove = () => {
    dispatch(BagFunctions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="error fething image" />
      <div className="rating">
        {item.stars} ⭐ | {item.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      <button className="btn-add-bag" onClick={Adder}>
        Add to Bag
      </button>

      <button className="btn-add-bag batny" onClick={Remove}>
        Remove
      </button>
    </div>
  );
};

export default HomeItem;

/* const checker = () => {
    if (gatherBag !== undefined || null) {
      finalItems = Object.values(gatherBag).indexOf(item.id) >= 0;
    } else if (gatherBag == null) {
      finalItems = gatherBag;
    }
  }; */
