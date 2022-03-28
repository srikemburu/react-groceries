import React from "react";
import "./Item.css";

const Item = ({
  id,
  oneItem,
  itemName,
  brand,
  units,
  quantity,
  item,
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
    console.log("List line 23: ", id, oneItem)
    setItem(item.filter((el) => el.id !== id));
  };

  //Mark Item completed
  const handleComplete = (id) => {
    setItem(
      item.map((itm) => {
        if (itm.id === id) {
          return {
            ...itm,
            isPurchased: !itm.isPurchased,
          };
        }
        return itm;
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

<img
        style={{ cursor: "pointer" }}
        onClick={() => handleComplete(id)}
        src="https://img.icons8.com/offices/40/000000/checked-2--v2.png"
        alt="mark item complete"
      />

      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          const confirmBox = window.confirm(
            "Are you sure you want to delete this item?"
          );
          if (confirmBox === true) {
            remove(id);
          }
        }}
        src="https://img.icons8.com/color/48/000000/trash.png"
        alt="delete item"
      />
      


    </div>
  );
};

export default Item;