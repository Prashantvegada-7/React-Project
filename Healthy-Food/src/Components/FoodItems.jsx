import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ foodItems }) => {
  let [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item
          key={item}
          foodItems={item}
          bought={activeItems.includes(item)}
          onBuyButton={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
