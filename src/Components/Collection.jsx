import React from 'react';
import collectionitem1 from './images/collection-item1.jpg';
import collectionitem2 from './images/collection-item2.jpg';
import collectionitem3 from './images/collection-item3.jpg';
import './collection.css';

function Collection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 left-side">
          <div className="card">
            <img src={collectionitem1} className="card-img-top" alt="CASUAL COLLECTION" />
            <div className="card-body">
              <h5 className="card-title">CASUAL COLLECTION</h5>
              <h1 className="card-text">Street Wear.</h1>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
              <a href="#" className="card-link">Shop Collection
              <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 right-side">
          <div className="card">
            <img src={collectionitem2} className="card-img-top" alt="BASIC COLLECTION" />
            <div className="card-body">
              <h5 className="card-title">BASIC COLLECTION</h5>
              <h1 className="card-text">Basic Shoes.</h1>
              <a href="#" className="card-link">Shop Collection
              <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={collectionitem3} className="card-img-top" alt="BEST SELLING PRODUCT" />
            <div className="card-body">
              <h5 className="card-title">BEST SELLING PRODUCT</h5>
              <h1 className="card-text">Woolen Hat.</h1>
              <a href="#" className="card-link">Shop Collection
              <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
