import { useEffect, useState } from "react";

const useSessionStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return sessionStorage.getItem(key) || defaultValue;
  });

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      sessionStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useSessionStorage;
