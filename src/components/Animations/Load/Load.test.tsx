import { render } from "@testing-library/react-native";
import React from "react";
import Load from ".";

describe("Load Component", () => {
  it("renders the loading indicator with the correct color", () => {
    const { getByTestId } = render(<Load />);
    const loadingIndicator = getByTestId("loading-indicator");
    const colorActive = loadingIndicator.props.color;

    expect(colorActive).toBe("#FF8200");
  });

  it("render Load", () => {
    const renderComponent = render(<Load />);
    expect(renderComponent.toJSON()).toMatchSnapshot();
  });
});
