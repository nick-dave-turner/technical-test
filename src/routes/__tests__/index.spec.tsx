import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import Routes from "../";
import Home from "../../pages/Home";

describe("Routes", () => {
  let component: any;

  beforeEach(() => {
    component = mount(
      <MemoryRouter initialEntries={["/"]}>
        <Routes />
      </MemoryRouter>
    );
  });

  it("should show Home component from /", () => {
    expect(component.find(Home)).toHaveLength(1);
  });
});
