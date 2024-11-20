import React, { useEffect, useState } from "react";

const Menu = () => {
  const items = [
    {
      
      image: "https://via.placeholder.com/150",
      title: "Burger",
      description: "A delicious burger with all the fixings",
      price: "Sek 79.99",
    },
    {
      
      image: "https://via.placeholder.com/150",
      title: "Pizza",
      description: "Classic Pizza with your favorite toppings",
      price: "Sek 99.99",
    },
    {
      
      image: "https://via.placeholder.com/150",
      title: "Fries",
      description: "Crispy golden fries served hot and fresh",
      price: "Sek 99.99",
    },
];

const [adItem, setadItem] = useState(
  items.reduce((acc, ad) => {
    acc[ad.id] = false;
    return acc;
  }, {})
);
const handleToggleadItem = (id) => {
  setadItem((prevState) => ({
    ...prevState,
    [id]: !prevState[id],
  }));
};
return (
  <div style={{ padding: "20px" }}>
    <div
      className="ad-list"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 500px)",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          gridColumn: "span 3",
          textAlign: "left",
          fontSize: "2em",
          marginBottom: "20px",
          color: "#333",
          marginLeft: "20px",
        }}
      >
         <center>Item List</center>
      </div>

      {items.length > 0 ? (
        items.map((ad) => (
          <div
            key={ad.id}
            className="ad-item"
            style={{
              border: "1px solid #ddd",
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <img src={ad.image} style={{ width: "100%", height: "auto" }} />
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            <p>{ad.price}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <button
                onClick={() => handleToggleadItem(ad.id)}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#00ffff",
                  border: "none",
                  borderRadius: "5px",
                  color: "#333",
                }}
              >
                {adItem[ad.id] ? "adItem": adItem}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No item available.</p>
      )}
    </div>
  </div>
);
};

export default Menu;