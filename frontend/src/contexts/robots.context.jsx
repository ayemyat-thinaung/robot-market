import { createContext, useEffect, useState } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";

const RobotsContext = createContext();

const RobotsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [robots, setRobots] = useSessionStorage("robot-list", []);

  useEffect(() => {
    if (!robots?.length) {
      fetch("/api/robots")
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(true);
          setRobots(JSON.stringify(data));
          setIsLoading(false);
        })
        .catch((error) => console.log("error", error));
    }
  }, [robots?.length, setRobots]);

  return (
    <RobotsContext.Provider
      value={{
        robots: !robots?.length ? [] : JSON.parse(robots)?.data,
        setRobots,
        isLoading,
      }}
    >
      {children}
    </RobotsContext.Provider>
  );
};

export { RobotsContext, RobotsContextProvider };
