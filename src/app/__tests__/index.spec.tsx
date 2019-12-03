import React from "react";
import { mount } from "enzyme";

import App from "../";
import Root from "../../routes";

describe("App", () => {
  let component: any;

  beforeEach(() => {
    component = mount(<App />);
  });

  it("should show Root component", () => {
    expect(component.find(Root)).toHaveLength(1);
  });
});
