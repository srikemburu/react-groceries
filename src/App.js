import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import { v4 as uuidv4 } from "uuid";

const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

function App() {
  const [item, setItem] = useState([
    { id: '0', itemName: 'Paper Towels', brand: 'Bounty', units: '4 Pack', quantity: 3, isPurchased: false },
    { id: '1', itemName: 'Ground Coffee', brand: 'Peets', units: '10', quantity: 2, isPurchased: true },
    { id: '2', itemName: 'Trash Bags', brand: 'Glad', units: '110 Count', quantity: 1, isPurchased: false },
  ]);
  
  const [itemValue, setItemValue] = useState('');
  const [brandValue, setBrandValue] = useState('');
  const [unitValue, setUnitValue] = useState('');
  const [qtyValue, setQtyValue] = useState('');

  console.log("Initial item: ",  item)

  const [list, setList] = useState(arr);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {

    const newItem = {
      id: uuidv4(),
      itemName: itemValue,
      brand: brandValue,
      units: unitValue,
      quantity: qtyValue,
      isPurchased: false,
    };

    console.log("newItem line 44: ", newItem)
    setList([...list, newItem])
    setError("")

    const newItems = [...item, newItem]
    setItem(newItems)

    console.log("Item line 52: ",  item)
    setItemValue("")
    setBrandValue("")
    setUnitValue("")
    setQtyValue('')
   
    e.preventDefault();
  };

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={itemValue}
          placeholder="Enter item Name"
          onChange={(event) => setItemValue(event.target.value)} 
        />

        <input
          className="input"
          type="text"
          value={brandValue}
          placeholder="Enter Brand"
          onChange={(event) => setBrandValue(event.target.value)} 
        />

        <input
          className="input"
          type="text"
          value={unitValue}
          placeholder="Enter Units 12 pack, 1ld, 2 liters"
          onChange={(event) => setUnitValue(event.target.value)} 
        />    

        <input
          className="input"
          type="text"
          value={qtyValue}
          placeholder="Enter Quantity"
          onChange={(event) => setQtyValue(event.target.value)} 
        />

        <br/><br/>

        <button className="btn" type="submit">
            Add Item
        </button><br/><br/>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

     
      <div>
        {item.map((oneItem, id) => (
          <div>
            <Item
              key={id}
              id={oneItem.id}
              oneItem={oneItem}
              itemName={oneItem.itemName}
              brand={oneItem.brand}
              units={oneItem.units}
              quantity={oneItem.quantity}
              isPurchased={oneItem.isPurchased}
              list={list}
              item={item}
              setList={setList}
              setItem={setItem}
            />
          </div>
        )
        )}
      </div>
    </div>
  );
}

export default App;
