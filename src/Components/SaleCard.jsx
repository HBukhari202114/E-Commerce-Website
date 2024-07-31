import React from 'react';
import "./salesCard.css"

const SaleCard = (props) => {
  return (
    <div className="card3">
    <div className="badge">{props.badge}</div>
    <img src={props.img} className="card3-img-top" alt="product 1" />
    <div className="card3-body">
      <p className="card3-text">{props.title}</p>
    </div>
  </div>
  )
}

export default SaleCard
