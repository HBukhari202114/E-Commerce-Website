import react from "react";
import Productitem from './images/product-item1.jpg'
import Productitem2 from './images/product-item2.jpg'
import Productitem3 from './images/product-item3.jpg'
import "./clousar.css";

function Clousar(){
    return( 
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner ms-auto" >
    <div className="carousel-item active">
      <img src={Productitem} className="d-block w-100" alt="..."/>
      <h1 className="text">Summer Collection</h1>
      <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, totam!</p>
   <button>Shop it Now</button>
    </div>
    <div className="carousel-item">
      <img src={Productitem2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Productitem3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     )
}
export default Clousar;