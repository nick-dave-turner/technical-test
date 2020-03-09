import React from "react";

import Table from "../Table";
import Widget from "../Widget";

type TradesTableProps = {
  rowData: Array<ITrade>;
};

const TradesTable: React.FC<TradesTableProps> = ({ rowData }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Stock",
        accessor: "stockSymbol"
      },
      {
        Header: "Price",
        accessor: "price"
      },
      {
        Header: "No. Shares Purchased",
        accessor: "quantity"
      },

      {
        Header: "Transaction Date",
        accessor: "timestamp"
      }
    ],
    []
  );

  const data = React.useMemo(() => rowData, [rowData]);

  return (
    <Widget title="Recent Trades">
      <Table columns={columns} data={data} />
    </Widget>
  );
};

export default TradesTable;
