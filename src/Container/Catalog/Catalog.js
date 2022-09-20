import React from 'react';
import { NavLink } from 'react-router-dom';
  function Catalog(props) {
  return (
  <main id='main'>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Minishop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog</a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
                <NavLink exact to={""} className="dropdown-item" href="shop.html">Shop</NavLink>
                <NavLink exact to={""} className="dropdown-item" href="product-single.html">Single Product</NavLink>
                <NavLink exact to={""} className="dropdown-item" href="cart.html">Cart</NavLink>
                <NavLink exact to={""} className="dropdown-item" href="checkout.html">Checkout</NavLink>
              </div>
            </li>
            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
            <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart" />[0]</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </main>
  );
}
  export default Catalog;

