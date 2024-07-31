import React from 'react'
import './model.css'
import model from './images/model.jpg'

const Model = () => {
  return (
    <div className="casual-selection">
      <div className="image-container5">
        <img src={model} alt="The Casual Selection" />
        <div className="text-container5">
          <h4>DENIM COLLECTION</h4>
          <h1>The Casual Selection.</h1>
          <p>
            Vel non viverra ligula odio ornare turpis mauris. Odio aliquam, tincidunt ut vitae elit risus. 
            Tempor egestas condimentum et ac rutrum dui, odio.
          </p>
          <a href="#shop-collection" className="shop-link">Shop Collection →</a>
        </div>
      </div>
    </div>
  )
}

export default Model
