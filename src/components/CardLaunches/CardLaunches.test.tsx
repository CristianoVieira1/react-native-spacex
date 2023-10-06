import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import CardLaunches from ".";
import { withTheme } from "../../theme/withTheme";

describe("CardLaunches Component", () => {
  const mockProps = {
    name: "Launch",
    image: "https://example.com/test-image.jpg",
    date_utc: "2023-10-05T12:00:00Z",
    onAction: jest.fn(),
  };

  it("renders the CardLaunches component with correct data", () => {
    const { getByText, getByTestId } = render(
      withTheme(<CardLaunches {...mockProps} />)
    );

    const launchText = getByText("LAUNCH");
    const nameText = getByText("Launch");
    const dateText = getByText("05/10/2023");
    const container = getByTestId("component-CardLaunches");

    expect(launchText).toBeTruthy();
    expect(nameText).toBeTruthy();
    expect(dateText).toBeTruthy();
    expect(container).toBeTruthy();
  });

  it("calls the onAction callback when pressed", () => {
    const { getByTestId } = render(withTheme(<CardLaunches {...mockProps} />));
    const container = getByTestId("component-CardLaunches");

    fireEvent.press(container);

    expect(mockProps.onAction).toHaveBeenCalled();
  });
});
