import React from "react";

const Footer = () => (
  <footer>
    <div className="bg-asset3 py-5 px-4">
      <div className="container ">
        <div className="row gx-5">
          <div className="col">
            <h4 className="text-asset1">Robot Market</h4>
            <p className="text-break">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. t
              deleniti? Iure ipsa cupiditate fugit cum.
            </p>
          </div>

          <div className="col">
            <h5>Customer Care</h5>
            <ul className="list-unstyled px-2">
              <li>
                <a href="/">FAQs</a>
              </li>
              <li>
                <a href="/">Returns & Refunds</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col">
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