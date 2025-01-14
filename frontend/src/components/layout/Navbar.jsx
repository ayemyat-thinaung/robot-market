import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../contexts/cart/cart.context";
import Cart from "../cart/Cart";
import CartIcon from "../icon/CartIcon";

const Navbar = () => {
  const { totalItems } = useCart();
  const { pathname } = useLocation();

  return (
    <header className="sticky-top bg-white">
      <nav className="navbar py-3 shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="/">
            <h4 className="font-bold text-asset1">Robot Market</h4>
          </a>

          <ul className="nav">
            <li className="nav-item cursor-pointer">
              <a
                href="/products"
                className={`nav-link ${pathname === "/products" && "active"} `}
              >
                Our Products
              </a>
            </li>
            <li className="nav-item cursor-pointer">
              <a
                href="/contact-us"
                className={`nav-link ${
                  pathname === "/contact-us" && "active"
                } `}
              >
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-light position-relative cursor-pointer"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <CartIcon />
                {totalItems ? (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                ) : (
                  ""
                )}
              </button>
            </li>
          </ul>
        </div>
        <Cart />
      </nav>
    </header>
  );
};

export default Navbar;
