import React, { useContext } from "react";
import { RobotsContext } from "../../../contexts/robots.context";
import Section from "../../../components/section/Section";
import Card from "../../../components/card/Card";

const NewArrivalRobots = ({ data }) => {
  const { robots, isLoading } = useContext(RobotsContext);

  return (
    <Section
      heading="New Arrivals"
      subHeading="What products you love to order?"
    >
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {robots?.slice(0, 8).map((item) => (
            <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3" key={item?.id}>
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default NewArrivalRobots;
