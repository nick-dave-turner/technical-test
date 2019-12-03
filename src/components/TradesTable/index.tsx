import React from "react";

import Table from "../Table";
import Widget from "../Widget";

type TradesTableProps = {
  rowData: Array<ITrade>;
};

const TradesTable: React.FC<TradesTableProps> = ({ rowData }) => {
  return (
    <Widget title="Recent Trades">
      <Table colDefs={COL_DEFS} rowData={rowData} />
    </Widget>
  );
};

const COL_DEFS: Array<string> = [
  "Transaction Date",
  "Stock",
  "Price",
  "No. Shares Purchased"
];

export default TradesTable;
