import React from 'react';
import './sales.css';
import product1 from './images/sales/selling-products1.jpg'; 
import product2 from './images/sales/selling-products2.jpg';
import product3 from './images/sales/selling-products3.jpg';
import product4 from './images/sales/selling-products4.jpg';
import SaleCard from './SaleCard';

const Sales = () => {
  return (
    <div className="container">
      <h1>Flash Sales</h1>
      <div className="row  row3">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
        <SaleCard badge="15% Off" title="Full Sleeve Cover Shirt - $40.00" img={product1}/>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
        <SaleCard badge="10% Off" title=" Sleeveless Cover Shirt - $30.00" img={product2}/>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
        <SaleCard badge="20% Off" title="Cover Shirt - $20.00" img={product3}/>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-4">
        <SaleCard badge="10% Off" title="Cover Shirt - $50.00" img={product4}/>
        </div>
      </div>
    </div>
  );
}

export default Sales;
