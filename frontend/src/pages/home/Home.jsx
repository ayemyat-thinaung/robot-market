import React from "react";
import BestSellerRobots from "./components/BestSellerRobots";
import Landing from "./components/Landing";
import NewArrivalRobots from "./components/NewArrivalRobots";
import Services from "./components/Services";

const Home = () => (
  <>
    <Landing />
    <NewArrivalRobots />
    <Services />
    <BestSellerRobots />
  </>
);

export default Home;
