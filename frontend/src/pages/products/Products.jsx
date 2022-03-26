import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { groupBy } from "../../utils/groupBy";
import { RobotsContext } from "../../contexts/robots.context";
import AllProductsGrid from "./components/AllProductsGrid";

const Products = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const history = useHistory();

  const [material, setMaterial] = useState(query.get("material") || "");

  const { robots, isLoading } = useContext(RobotsContext);
  const data = groupBy(robots, "material");
  const materialOptions = Object.keys(data);

  return (
    <div className="container px-4 py-5">
      <div className="row gap-4">
        <div className="col-2">
          <h5 className="card-title my-4">Material Type</h5>

          {materialOptions?.map((option) => (
            <label className="list-group-item" key={option}>
              <input
                onChange={(e) => {
                  if (e.target.checked) {
                    setMaterial(option);
                    history.push(`/products?material=${option}`);
                  }
                }}
                className="form-check-input me-3"
                type="radio"
                name={option}
                id={option}
                value={option}
                checked={option === material && search ? true : false}
              />
              {option}
            </label>
          ))}
        </div>
        <div className="col-9">
          {material && search ? (
            <AllProductsGrid
              data={data[material]}
              isLoading={isLoading}
              onViewAll={() => history.push("/products")}
              filter={search ? true : false}
              material={material}
            />
          ) : (
            <AllProductsGrid
              data={robots}
              isLoading={isLoading}
              filter={search ? true : false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
