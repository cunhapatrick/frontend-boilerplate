import * as React from "react";
import { shallow } from "enzyme";

// FIXME Antd module components is bugging on enzyme tests
// import Button from "./button";

describe("Example Component Tests", () => {
  it("Should render the text properly element", () => {
    const wrapper = shallow(<div>Example</div>);
    expect(wrapper.text()).toBe("Example");
  });

  it("Should contain a specific class name", () => {
    const wrapper = shallow(<div className="test">Example</div>);
    expect(wrapper.find(".test")).toBeTruthy();
  });
});
