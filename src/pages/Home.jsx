import React from 'react'
import Clousar from '../Components/Clousar';
import Collection from '../Components/Collection';
import Discount from '../Components/Discount';
import Footer from '../Components/Footer';
import Model from '../Components/Model';
import NavBar from '../Components/NavBar';
import Navbar2 from '../Components/Navbar2';
import Product from '../Components/Product';
import Reviews from '../Components/Reviews';
import Sales from '../Components/Sales';
import Selling from '../Components/Selling';
const Home = () => {
  return (
    <>
      <NavBar/>
   <Navbar2/>
   <Clousar/>
   <Product/>
   <Collection/>
   <Discount/>
   <Selling/>
   <Reviews/>
   <Sales/>
   <Model/>
   <Footer/>
    </>
  )
}

export default Home
