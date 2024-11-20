import React from "react";

const Card = ({
  image,
  title,
  description,
  price,
  buttonAction,
  cardStyle,
}) => {
  return (
    <div className={`card ${cardStyle}`} style={{ width: "350px" }}>
      <div className="card-header">
        <img src={image} className="card-img-top" title={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">SEK {price}</p>
      </div>
      <button className="btn btn-dark" onClick={buttonAction}>
        Add to Order
      </button>
    </div>
  );
};

export default Card;