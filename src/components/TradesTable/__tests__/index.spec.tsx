import React from "react";
import { shallow } from "enzyme";

import TradesTable from "../";

const colDefs = [
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
];

const rowData = [
  {
    stockSymbol: "stockSymbol",
    price: 100,
    quantity: 2000,
    timestamp: "09/03/2020"
  }
];

describe("TradesTable component", () => {
  describe("When required props are empty", () => {
    it("should match snapshot", () => {
      const component = shallow(<TradesTable rowData={[]} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe("When required props are complete", () => {
    it("should match snapshot", () => {
      const component = shallow(<TradesTable rowData={rowData} />);
      expect(component).toMatchSnapshot();
    });
  });
});
