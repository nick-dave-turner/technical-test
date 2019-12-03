import React from "react";
import { shallow } from "enzyme";

import Header from "../";

describe("Header component", () => {
  it("should match snapshot", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
