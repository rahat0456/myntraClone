import React from "react";
import BagSummary from "../components/BagSummary";
import BagItems from "../components/BagItems";
import { useSelector } from "react-redux";
const Bag = () => {
  const mainHome = useSelector((store) => store.items);
  const mainBag = useSelector((store) => store.baggyItems);
  const reqItems = mainHome.filter((home) => {
    const reqIndex = Object.values(mainBag).indexOf(home.id);
    return reqIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {Object.values(reqItems).map((item) => (
            <BagItems key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
