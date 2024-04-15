import { createContext, useEffect, useState } from "react";



export const TrendingContext = createContext({});


export function TrendingProvider({children}){
    const [trendData, setTrendData] = useState();

    async function getTrendData() {
      try {
        const data = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        )
          .then((res) => res.json())
          .then((json) => json);

        console.log(data);
        setTrendData(data.coins);
      } catch (error) {
        console.log(error);
      }
    }

    function resetTrendingResults() {
        getTrendData()
    }

    useEffect(() => {getTrendData()},[])

    return (
        <TrendingContext.Provider value={{trendData, resetTrendingResults}}>
            {children}
        </TrendingContext.Provider>
    )

}