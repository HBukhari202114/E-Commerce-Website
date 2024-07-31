import React from 'react';
import './selling.css';
import Productitem from './images/selling/selling-products1.jpg';
import Productitem2 from './images/selling/selling-products2.jpg';
import Productitem3 from './images/selling/selling-products3.jpg';
import Productitem4 from './images/selling/selling-products4.jpg';
import Productitem5 from './images/selling/selling-products5.jpg';
import Productitem6 from './images/selling/selling-products6.jpg';
import Productitem7 from './images/selling/selling-products7.jpg';
import Productitem8 from './images/selling/selling-products8.jpg';
import Productitem9 from './images/selling/selling-products9.jpg';
import Productitem10 from './images/selling/selling-products10.jpg';
import Productitem11 from './images/selling/selling-products11.jpg';
import Productitem12 from './images/selling/selling-products12.jpg';

const productData = [
  { src: Productitem, alt: "Half Sleeve Tshirt", name: "Half Sleeve Tshirt", price: "$30.00" },
  { src: Productitem2, alt: "Stylish Grey Tshirt", name: "Stylish Grey Tshirt", price: "$35.00" },
  { src: Productitem3, alt: "Silk White Shirt", name: "Silk White Shirt", price: "$40.00" },
  { src: Productitem4, alt: "Grunge Shirt", name: "Grunge Shirt", price: "$45.00" },
  { src: Productitem5, alt: "Full Sleeve Shirt", name: "Full Sleeve Shirt", price: "$50.00" },
  { src: Productitem6, alt: "Product Name 6", name: "Product Name 6", price: "$55.00" },
  { src: Productitem7, alt: "Product Name 7", name: "Product Name 7", price: "$60.00" },
  { src: Productitem8, alt: "Product Name 8", name: "Product Name 8", price: "$65.00" },
  { src: Productitem9, alt: "Product Name 9", name: "Product Name 9", price: "$70.00" },
  { src: Productitem10, alt: "Product Name 10", name: "Product Name 10", price: "$75.00" },
  { src: Productitem11, alt: "Product Name 11", name: "Product Name 11", price: "$80.00" },
  { src: Productitem12, alt: "Product Name 12", name: "Product Name 12", price: "$85.00" },
];

const Selling = () => (
  <div className="container1">
    <div className="header">
      <h1>Best Selling Products</h1>
      <div className="categories">
        <a href="#">All</a>
        <a href="#">Shoes</a>
        <a href="#">Tshirts</a>
        <a href="#">Pants</a>
        <a href="#">Hoodies</a>
        <a href="#">Outer</a>
        <a href="#">Jackets</a>
        <a href="#">Accessories</a>
      </div>
    </div>
    <div className="row1">
      {productData.map((product, index) => (
        <div key={index} className="card1">
          <img src={product.src} className="card1-img-top" alt={product.alt} />
          <div className="card1-body">
            <a href="#" className="btn-primary">{product.name}</a>
            <p className="card1-text">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Selling;
