/// <reference types="react-scripts" />

interface IStockSymbol {
  id: number;
  stockSymbol: string;
}

interface ITrade {
  stockSymbol: string;
  price: number;
  quantity: number;
  timestamp: string;
}
