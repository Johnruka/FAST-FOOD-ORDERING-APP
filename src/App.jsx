import React, { useState } from "react";
import Menu from "./Components/ Menu";
import OrderList from "./Components/OrderList";
import ThemeToggle from "./Components/ThemeToggle";
import './App.css'

const App = () => {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    const existingItem = order.find((o) => o.title === item.title);
    if (existingItem) {
      setOrder(
        order.map((o) =>
          o.title === item.title ? { ...o, quantity: o.quantity + 1 } : o
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (title, quantity) => {
    if (quantity <= 0) {
      setOrder(order.filter((item) => item.title !== title));
    } else {
      setOrder(
        order.map((item) =>
          item.title === title ? { ...item, quantity } : item
        )
      );
    }
  };

  return (
    <div className="container">
      <ThemeToggle />
      <Menu addToOrder={addToOrder} />
      <OrderList order={order} updateQuantity={updateQuantity} />
    </div>
  );
};

export default App;