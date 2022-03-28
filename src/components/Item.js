import React from "react";
import "./Item.css";

const Item = ({
  id,
  itemName,
  brand,
  units,
  quantity,
  list,
  setEdit,
  setEditId,
  setItem,
  setList,
  isPurchased,
}) => {

  // Define itemInfo for display purpose
  const itemInfo = itemName + ', Brand: ' + brand + ', Units: ' + units + ', Qty=' + quantity

  //Delete Item
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  //Mark Item completed
  const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="item">
      <input
        type="text"
        defaultValue={itemInfo}
        size="50"
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "green",
          color: "white",
          fontSize: "20px",
        }}
        className={isPurchased ? "purchased" : ""}
      />
      


    </div>
  );
};

export default Item;