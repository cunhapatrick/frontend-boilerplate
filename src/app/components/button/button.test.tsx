import React from "react";
import { shallow, mount } from "enzyme";

import Button from "./button";

describe("Example Component Tests", () => {
  it("Should render the text properly element", () => {
    const wrapper = shallow(<div>Example</div>);
    expect(wrapper.text()).toBe("Example");
  });

  it("Should contain a specific class name", () => {
    const wrapper = shallow(<div className="test">Example</div>);
    expect(wrapper.find(".test")).toBeTruthy();
  });

  it("Should render the antd component properly", () => {
    const wrapper = mount(<Button />);
    expect(wrapper.text()).toBe("Button Example");
  });
});
