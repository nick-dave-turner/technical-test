import React from "react";
import { shallow } from "enzyme";

import Table from "../";

const columns = [
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

const data = [
  {
    stockSymbol: "stockSymbol",
    price: 100,
    quantity: 2000,
    timestamp: "09/03/2020"
  }
];

describe("Table component", () => {
  describe("When required props are empty", () => {
    it("should match snapshot", () => {
      const component = shallow(<Table columns={[]} data={[]} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe("When required props are complete", () => {
    it("should match snapshot", () => {
      const component = shallow(<Table columns={columns} data={data} />);
      expect(component).toMatchSnapshot();
    });
  });
});
