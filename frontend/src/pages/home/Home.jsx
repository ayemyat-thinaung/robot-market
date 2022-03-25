import React from "react";
import BestSellerRobots from "./components/BestSellerRobots";
import Landing from "./components/Landing";
import NewArrivalRobots from "./components/NewArrivalRobots";

const Home = () => (
  <>
    <Landing />
    <NewArrivalRobots />
    <BestSellerRobots />
  </>
);

export default Home;
