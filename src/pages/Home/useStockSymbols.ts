import React, { useEffect } from "react";

import { getStockSymbols } from "../../_MOCKS_";

const useStockSymbols = () => {
  const [stockSymbols, updateStockSymbols] = React.useState<
    Array<IStockSymbol>
  >([]);

  // Simulate loading of stocks from an API.
  useEffect(() => {
    getStockSymbols()
      .then((result: Array<IStockSymbol>) => updateStockSymbols(result))
      .catch(error => console.log("Error retrieving stock symbols"));
  }, []);

  return { stockSymbols };
};

export default useStockSymbols;
