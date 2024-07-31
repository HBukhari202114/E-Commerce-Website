import react from "react";
import logo from './images/logo.png'
import "./Navbar2.css";
function Navbar2(){
    return(
<div>  
        
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="Logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Home V2(Pro)</a></li>
            <li><a className="dropdown-item" href="#">Home V2(Pro)</a></li>
            <li className="nav-item">
        </li>
  </ul>
       
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Shop Slider(Pro)</a></li>
            <li><a className="dropdown-item" href="#">Shop Grid(Pro)</a></li>
            <li><a className="dropdown-item" href="#">Shop Fit(Pro)</a></li>
            
            <li className="nav-item">
        </li>
  </ul>
       
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Coming Soon(Pro)</a></li>
            <li><a className="dropdown-item" href="#">Login(Pro)</a></li>
            <li><a className="dropdown-item" href="#">Faqs(Pro)</a></li>
            <li><a className="dropdown-item" href="#">Styles</a></li>
            <li><a className="dropdown-item" href="#">Thank You</a></li>
            <li><a className="dropdown-item" href="#">Error Page(Pro)</a></li>
            
            <li className="nav-item">
        </li>
  
  </ul>
  
       
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blogs
          </a>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Coming Soon(Pro)</a></li>
            <li><a className="dropdown-item" href="#">Login(Pro)</a></li>
            <li><a className="dropdown-item" href="#">Faqs(Pro)</a></li>
            <li><a className="dropdown-item" href="#">Styles</a></li>
            <li><a className="dropdown-item" href="#">Thank You</a></li>
            <li><a className="dropdown-item" href="#">Error Page(Pro)</a></li>
            
            <li className="nav-item">
        </li>
  
  </ul>
  
       
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
    </div>

  </div>
</nav>          </div>
     
      
    
    
    
       )
    }
    export default Navbar2;
