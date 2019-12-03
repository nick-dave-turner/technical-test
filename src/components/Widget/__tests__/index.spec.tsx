import React from "react";
import { shallow } from "enzyme";

import Widget from "../";

describe("Widget component", () => {
  describe("When Widget title present", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <Widget>
          <h1>Hello World</h1>
        </Widget>
      );
      expect(component).toMatchSnapshot();
    });
  });

  describe("When Widget title not present", () => {
    it("should match snapshot", () => {
      const component = shallow(
        <Widget title="TESTING">
          <h1>Hello World</h1>
        </Widget>
      );
      expect(component).toMatchSnapshot();
    });
  });
});
