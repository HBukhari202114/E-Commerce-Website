import react from "react"
import "./navbar.css"


function NavBar(){
    return(
        <div>
        <nav className="nav-style">
        <div className="navbar">
          let's talk<b>+92307-9673728</b>
        </div>
        <div className="desc">
          <span>Free shipping on a purchase value of $200</span>
        </div>
        <div className="icone">
          <i class="fa-regular fa-user"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </nav>
      <hr />
</div>
 )
    }
    export default NavBar;