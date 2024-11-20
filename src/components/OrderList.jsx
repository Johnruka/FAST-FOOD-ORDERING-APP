import React from "react";

const OrderList = ({ order, updateQuantity }) => {
  const calculateTotal = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const total = calculateTotal();

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Your Order</h3>
      <table className="table">
        <tbody>
          {order.map((item, index) => (
            <tr key={index}>
              <td>
                {item.title} <span>x{item.quantity}</span>
              </td>
              <td className="text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      updateQuantity(item.title, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() =>
                      updateQuantity(item.title, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="text-end" style={{ color: "cyan" }}>
                {(item.quantity * item.price).toFixed(2)} SEK
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" className=" fw-bold">
              Total
            </td>
            <td className="text-end" style={{ color: "blue" }}>
              {total.toFixed(2)} SEK
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default OrderList;