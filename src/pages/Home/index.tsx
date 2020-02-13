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

const TRADES_DATA: Array<ITrade> = [];

const Home: React.FC = () => {
  const { stockSymbols } = useStockSymbols();

  return (
    <Grid>
      <SideBar>
        <TradeForm symbols={stockSymbols} />
      </SideBar>
      <TradesTableContainer>
        <TradesTable rowData={TRADES_DATA} />
      </TradesTableContainer>
    </Grid>
  );
};

export default Home;
