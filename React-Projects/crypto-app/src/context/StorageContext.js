import { createContext, useLayoutEffect, useState } from "react";

export const StorageContext = createContext({});

export function StorageProvider({ children }) {
  const [allCoins, setAllCoins] = useState([]);

  useLayoutEffect(() => {
    // const isThere = JSON.parse(localStorage.getItem("coins")) || false;

    if (localStorage.getItem("coins")) {
      // set the state with value from local storage
      setAllCoins(JSON.parse(localStorage.getItem("coins")));
    } else {
      // set local storage with an Empty Array
      localStorage.setItem("coins", JSON.stringify([]));
    }
  }, []);

  function saveCoin(coinId) {
    const oldCoins = JSON.parse(localStorage.getItem("coins"));
    if (oldCoins.includes(coinId)) {
      return;
    } else {
      const newCoins = [...oldCoins, coinId];
      setAllCoins(newCoins);
      localStorage.setItem("coins", JSON.stringify(newCoins));
    }
  }

  function removeCoin(coinId) {
    const oldCoins = JSON.parse(localStorage.getItem("coins"));

    const newCoin = oldCoins.filter((coin) => coin !== coinId);

    setAllCoins(newCoin);
    localStorage.setItem("coins", JSON.stringify(newCoin));
  }

  return (
    <StorageContext.Provider
      value={{
        allCoins,
        setAllCoins,
        saveCoin,
        removeCoin,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
