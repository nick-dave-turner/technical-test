// @ts-nocheck

import React from "react";
import styled from "styled-components";

import TradeForm from "../../components/TradeForm/index";
import TradesTable from "../../components/TradesTable";

import useStockSymbols from "./useStockSymbols";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-areas: "sidebar tradesTable" "sidebar stocksTable";

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: "sidebar" "tradesTable" "stocksTable";
  }
`;

const SideBar = styled.aside`
  grid-area: sidebar;
`;

const TradesTableContainer = styled.section`
  grid-area: tradesTable;
`;

const Home: React.FC = () => {
  const { stockSymbols } = useStockSymbols();
  const [trades, updateTrades] = React.useState<Array<ITrade>>([]);

  const handleFormSubmit = (trade: any): void => {
    updateTrades(() => [...trades, { timestamp: new Date(), ...trade }]);
  };

  const formatTrades = (trades: Array<ITrade>): Array<ITrade> => {
    return trades
      .sort((a: ITrade, b: ITrade) => b.timestamp - a.timestamp)
      .map((trade: ITrade) => {
        return {
          timestamp: trade.timestamp.toLocaleString(),
          stockSymbol: trade.stockSymbol,
          price: trade.price,
          quantity: trade.quantity
        };
      });
  };

  return (
    <Grid>
      <SideBar>
        <TradeForm symbols={stockSymbols} onSubmit={handleFormSubmit} />
      </SideBar>
      <TradesTableContainer>
        <TradesTable rowData={formatTrades(trades)} />
      </TradesTableContainer>
    </Grid>
  );
};

export default Home;
