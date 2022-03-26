import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RobotsContext } from "../../../contexts/robots.context";
import Section from "../../../components/section/Section";
import Card from "../../../components/card/Card";

const BestSellerRobots = ({ data }) => {
  const { robots, isLoading } = useContext(RobotsContext);

  return (
    <Section
      heading="Best Seller Products"
      subHeading="We provide best quality and service for your convenience"
    >
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {robots?.slice(9, 17).map((item) => (
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3" key={item?.id}>
              <Card item={item} />
            </div>
          ))}
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-light">
              <Link to="/products" className="nav-link">
                View All Products
              </Link>
            </button>
          </div>
        </div>
      )}
    </Section>
  );
};

export default BestSellerRobots;
