/* istanbul ignore file */
export const stockSymbols: Array<IStockSymbol> = [
  {
    id: 1,
    stockSymbol: "TEA"
  },
  {
    id: 2,
    stockSymbol: "POP"
  },
  {
    id: 3,
    stockSymbol: "ALE"
  },
  {
    id: 4,
    stockSymbol: "GIN"
  },
  {
    id: 5,
    stockSymbol: "JOE"
  }
];

const getStockSymbols = (): Promise<Array<IStockSymbol>> => {
  return new Promise(resolve => {
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve(stockSymbols);
    }, 500);
  });
};

export { getStockSymbols };
