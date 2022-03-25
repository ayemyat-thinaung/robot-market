import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";

const Card = ({ item }) => {
  const { name, material, stock, price, image, createdAt } = item;

  return (
    <div className="card position-relative shadow-sm">
      <div className="d-flex justify-content-center">
        <img
          src={image || "images/undraw_firmware.png"}
          alt={name || "Not Available"}
          height={120}
          width={120}
        />
      </div>
      <span className="badge bg-dark position-absolute top-0 start-0 text-white">
        {material}
      </span>
      <span className="badge bg-light position-absolute top-0 end-0 text-secondary">
        {new Date(createdAt).toLocaleDateString("en-gb")}
      </span>

      <div className="card-body ">
        <h6 className="card-title ">{name}</h6>
        <div className="d-flex justify-content-between mb-3">
          <div className="fw-bolder">{formatCurrency(price)}</div>
          <div className={stock ? "text-secondary" : "text-danger fw-bolder"}>
            {stock ? `${stock} Left` : "Out of Stock"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;