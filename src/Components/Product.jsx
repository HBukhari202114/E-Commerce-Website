import React, { useEffect, useState } from 'react';
import './product.css';
import Productcard from './Productcard';

const Product = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = async() =>{
    try{
      const result = await fetch('https://fakestoreapi.com/products?limit=20')
      
      if(result.ok){
        const products = await result.json();
        setProducts(products)
      }

    }catch(err){
  console.log(err.message)
    }
  }

  useEffect(()=>{
    fetchProducts()
  }, [])

  return (
    <div className="container">
      <h1>Featured Products</h1>
      <a href="#">
        View All Products
        <i className="fa-solid fa-arrow-right"></i>
      </a>
      <div className="row">
        {
         products && products.map((item, index) =>{
            return(
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={item.id}>
              <Productcard title={item.title} price={item.price} img={item.image}/>
             </div>
            )
          })
        }
       
      
       </div>
    </div>
  );
};

export default Product;
