import React, { useEffect, useState } from "react";

const Item = () => {
  const items = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Ad 1",
      description: "This is the first item.",
      contact: "Contact1@test.com",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Ad 2",
      description: "This is the second item.",
      contact: "Contact2@test.com",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Ad 3",
      description: "This is the third item.",
      contact: "Contact3@test.com",
    },
];

const [visibleContact, setVisibleContact] = useState(
  items.reduce((acc, ad) => {
    acc[ad.id] = false;
    return acc;
  }, {})
);
const handleToggleContact = (id) => {
  setVisibleContact((prevState) => ({
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
            <p>
              <strong>Contact: </strong>
              {visibleContact[ad.id] ? ad.contact : "***"}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <button
                onClick={() => handleToggleContact(ad.id)}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#00ffff",
                  border: "none",
                  borderRadius: "5px",
                  color: "#333",
                }}
              >
                {visibleContact[ad.id] ? "Hide Details" : "Show Details"}
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

export default ItemList;