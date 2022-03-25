import React, { useContext } from "react";
import { RobotsContext } from "../../../contexts/robots.context";

const NewArrivalRobots = () => {
  const { robots } = useContext(RobotsContext);
  console.log("data==>", robots);

  return <div>test</div>;
};

export default NewArrivalRobots;
