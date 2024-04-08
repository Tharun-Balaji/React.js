import { createContext, useEffect, useState } from "react";

// Create a new context Object
export const CryptoContext = createContext({});

// Create Provider Component
export function CryptoProvider({ children }) {
  const [CryptoData, setCryptoData] = useState();
  const [searchData, setSearchData] = useState();
  const [coinSearch, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [ totalPages, setTotalPages] = useState(250);
  const [perPage, setPerPage] = useState(10)
  const [ coinData, setCoinData] = useState()

  

  async function getData() {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/exchanges/list&x_cg_demo_api_key=CG-xPTDuU1xWf9V99UybnaCu79t`
      )
        .then((res) => res.json())
        .then((json) => json);

      setTotalPages(data.length);
    } catch (error) {
      console.log(error);
    }
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&x_cg_demo_api_key=CG-xPTDuU1xWf9V99UybnaCu79t`
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

  function resetFunction(){
    setPage(1);
    setCoinSearch("");
  }

  async function getCoinData(coinId) {
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false&x_cg_demo_api_key=CG-xPTDuU1xWf9V99UybnaCu79t`
      )
        .then((res) => res.json())
        .then((json) => json);

      // console.log("CoinData", data);
      setCoinData(data);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getData();
  }, [coinSearch, currency, sortBy,page, perPage]);
  
  return (
    <CryptoContext.Provider
      value={{
        CryptoData,
        searchData,
        getSearchResult,
        setSearchData,
        setCoinSearch,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        page,
        setPage,
        totalPages,
        resetFunction,
        setPerPage,
        perPage,
        coinData,
        getCoinData,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
}
