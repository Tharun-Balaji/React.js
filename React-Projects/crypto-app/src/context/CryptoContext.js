import { createContext, useEffect, useState } from "react";

// Create a new context Object
export const CryptoContext = createContext({});

// Create Provider Component
export function CryptoProvider({ children }) {
  const [CryptoData, setCryptoData] = useState([]);
  const [searchData, setSearchData] = useState();

  async function getData() {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&x_cg_demo_api_key=CG-xPTDuU1xWf9V99UybnaCu79t`
      )
        .then((res) => res.json())
        .then((json) => json);

      setCryptoData(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getSearchResult(query) {
    console.log(query);
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      )
        .then((res) => res.json())
        .then((json) => json);

      setSearchData(data.coins);
      console.log(data.coins);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <CryptoContext.Provider value={{CryptoData, searchData, getSearchResult}}>{children}</CryptoContext.Provider>;
}
