import React, { useMemo, useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  //   const totalItems = useMemo(() => {
  //     return items.length; // Only recalculated if items change
  //   }, [items]);

  function increaseCount(value) {
    for (let i = 0; i < 10000000; i++) {}
    return value;
  }

  const totalItems = useMemo(() => {
    return increaseCount(items.length);
  }, [items]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <p>Total Items: {totalItems}</p>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={() => addItem("Grapes")}>Add Grapes</button>
    </div>
  );
};

export default ShoppingList;
