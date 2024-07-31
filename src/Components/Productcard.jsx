import React from 'react'
import "./productcard.css"

const Productcard = (props) => {
  return (
    
      <div className="card p-card">
            <img src={props.img} className="card-img-top" alt="Product 2" />
            <div className="card-body">
              <a href="#" className="btn btn-primary">{props.title}</a>
              <p className="card-text">${props.price}</p>
            </div>
          </div>
   
  )
}

export default Productcard
