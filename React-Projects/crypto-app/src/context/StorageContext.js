import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  useEffect,
} from "react";
import { CryptoContext } from "./CryptoContext";

export const StorageContext = createContext({});

export function StorageProvider({ children }) {
  const [allCoins, setAllCoins] = useState([]);
  const [savedData, setSavedData] = useState();
  const { currency, sortBy } = useContext(CryptoContext);

  // console.log(currency)
//   console.log(allCoins)

  const saveCoin = (coinId) => {
    let oldCoins = JSON.parse(localStorage.getItem("coins"));

    if (oldCoins.includes(coinId)) {
      return null;
    } else {
      let newCoin = [...oldCoins, coinId];
      setAllCoins(newCoin);
      localStorage.setItem("coins", JSON.stringify(newCoin));
    }
  };

  const removeCoin = (coinId) => {
    let oldCoins = JSON.parse(localStorage.getItem("coins"));

    let newCoin = oldCoins.filter((coin) => coin !== coinId);

    setAllCoins(newCoin);
    localStorage.setItem("coins", JSON.stringify(newCoin));
  };

  const getSavedData = async (totalCoins = allCoins) => {
    console.log(totalCoins);
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${totalCoins.join(",")}&order=${sortBy}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&x_cg_demo_api_key=CG-xPTDuU1xWf9V99UybnaCu79t`
      )
        .then((res) => res.json())
        .then((json) => json);

      // console.log(data);
      setSavedData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetSavedResult = () => {
    getSavedData();
  };

  useEffect(() => {
    if (allCoins.length > 0) {
      getSavedData(allCoins);
    } else {
      setSavedData();
    }
  }, [allCoins]);

  useLayoutEffect(() => {
    let isThere = JSON.parse(localStorage.getItem("coins")) || false;

    if (!isThere) {
      //set the localstorage with empty array
      localStorage.setItem("coins", JSON.stringify([]));
    } else {
      //set the state with the current values from the local storage
      let totalCoins = JSON.parse(localStorage.getItem("coins"));
      setAllCoins(totalCoins);

      if (totalCoins.length > 0) {
        getSavedData(totalCoins);
      }
    }
  }, []);

  return (
    <StorageContext.Provider
      value={{
        allCoins,
        setAllCoins,
        saveCoin,
        removeCoin,
        savedData,
        resetSavedResult,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
