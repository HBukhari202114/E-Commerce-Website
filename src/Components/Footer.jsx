import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="newsletter">
      <div className="newsletter-left">
        <h2>Subscribe to our Newsletter</h2>
      </div>
      <div className="newsletter-right">
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
    <div className="footer-content">
      <div className="footer-main">
        <h2>Ultras</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus quo et dignissimos veniam laborum!</p>
        <div className="social-link">
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-tiktok"></i></a>
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        </div>
      </div>
      <div className="links">
        <h3>Customer Services</h3>
        <a href="#" className="link">Our Company</a>
        <a href="#" className="link">About Us</a>
        <a href="#" className="link">Blog</a>
      </div>
      <div className="links">
        <h3>Contact Us</h3>
        <a href="#" className="link">Services</a>
        <a href="#" className="link">Support</a>
        <a href="#" className="link">Terms & Conditions</a>
      </div>
      <div className="links">
        <h3>Forever 2018</h3>
        <a href="#" className="link">Home</a>
        <a href="#" className="link">About</a>
        <a href="#" className="link">Contact</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
