import React, { useState } from "react";
import { Link } from "react-router-dom";

const options = [
  "Concrete",
  "Cotton",
  "Fresh",
  "Frozen",
  "Granite",
  "Metal",
  "Plastic",
  "Rubber",
  "Soft",
  "Steel",
  "Wooden",
];

const Landing = () => {
  const [value, setValue] = useState("");

  return (
    <div className="py-5">
      <div className="container rounded-default bg-asset1 d-flex flex-column justify-content-center align-items-center p-5">
        <h1 className="text-center mt-5 display-6 fw-normal text-white">
          Changing your idea of what robots can do
        </h1>
        <div className="w-50 mt-4 mb-5 d-flex">
          <select
            placeholder="Search robots by material type..."
            className="form-select form-select-lg me-2"
            aria-label=".form-select-lg"
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="" key="search">
              Search robots by material type...
            </option>
            {options?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <button className="btn btn-light" type="button">
            <Link to={`/products?material=${value}`}>Search</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
