import React from "react";
import { shallow } from "enzyme";

import Layout from "../";

describe("Layout component", () => {
  it("should match snapshot", () => {
    const component = shallow(
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    );
    expect(component).toMatchSnapshot();
  });
});
