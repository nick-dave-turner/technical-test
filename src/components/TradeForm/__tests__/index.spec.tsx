import React from "react";
import { shallow } from "enzyme";

import TradeForm from "../";

const MOCK_SYMBOLS: Array<IStockSymbol> = [
  {
    id: 1,
    stockSymbol: "TEA"
  },
  {
    id: 2,
    stockSymbol: "POP"
  }
];

describe("TradeForm component", () => {
  describe("When required props are empty", () => {
    it("should match snapshot", () => {
      const component = shallow(<TradeForm symbols={[]} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe("When required props are complete", () => {
    it("should match snapshot", () => {
      const component = shallow(<TradeForm symbols={MOCK_SYMBOLS} />);
      expect(component).toMatchSnapshot();
    });
  });
});
