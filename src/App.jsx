import React, { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);

  const fetchDoors = () => {
    fetch(API_URI)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching doors:", err));
  };

  useEffect(() => {
    fetchDoors();
  }, []);

  return <ItemList items={items} setItems={setItems} />;
}

export default App;
