import React from "react";

const Footer = () => (
  <footer>
    <div className="py-5">
      <div className="container rounded-default bg-asset3 p-5">
        <div className="row gx-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <h4 className="text-asset1 ls-1">Robot Market</h4>
            <p className="text-break text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. t
              deleniti? Iure ipsa.
            </p>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-2">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-secondary">
                  Our Products
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-secondary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-2">
            <h5>Customer Care</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="/" className="text-secondary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/" className="text-secondary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/" className="text-secondary">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="/" className="text-secondary">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-6 col-xl-5">
            <h5>Subscribe for Product Updates</h5>
            <div className="input-group my-4">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                aria-label="Your Email"
                aria-describedby="btnGroupAddon"
              />
              <button
                type="button"
                className="input-group-text bg-asset1 text-white"
                id="btnGroupAddon"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid p-4 text-center text-secondary bg-asset2">
      Copyright &copy; 2022 Robot Market. All rights reserved.
    </div>
  </footer>
);

export default Footer;
