import React from "react";
import { BsFillDashCircleFill, BsFillPlusCircleFill } from "react-icons/bs";

const OrderList = ({ order, updateQuantity }) => {
  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const total = calculateTotal();

  return (
    <div className="mt-5">
      <h3 className="mb-4">Your Order</h3>

      <ul className="list-group">
        {order.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {item.title} x{item.quantity}
            </span>
            <div>
              <button
                className="btn btn-sm btn-danger m-1"
                onClick={() => updateQuantity(item.title, item.quantity - 1)}
              >
                <BsFillDashCircleFill />
              </button>
              <button
                className="btn btn-sm btn-success m-1"
                onClick={() => updateQuantity(item.title, item.quantity + 1)}
              >
                <BsFillPlusCircleFill />
              </button>
            </div>
            <div style={{ color: "cyan" }}>
              {(item.quantity * item.price).toFixed(2)} SEK
            </div>
          </li>
        ))}

        <li
          className="list-group-item d-flex justify-content-end"
          style={{ color: "blue" }}
        >
          {total.toFixed(2)} SEK
        </li>
      </ul>
    </div>
  );
};

export default OrderList;