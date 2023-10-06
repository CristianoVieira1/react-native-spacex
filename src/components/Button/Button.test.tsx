import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import Button from ".";
import { withTheme } from "../../theme/withTheme";

describe("Button Component", () => {
  it("render Load", () => {
    const renderComponent = render(
      withTheme(<Button title="teste" type="accept" onPress={() => {}} />)
    );
    expect(renderComponent.toJSON()).toMatchSnapshot();
  });

  it("Button onClick accept", () => {
    const buttonIconOnly = render(
      withTheme(
        <Button
          title="Teste"
          loading={false}
          size="small"
          type="accept"
          onPress={() => {
            return "teste";
          }}
        />
      )
    );

    const buttonClick = buttonIconOnly.getByTestId("component-button");
    fireEvent.press(buttonClick);
  });

  it("Button onClick youtube ", () => {
    const buttonIconOnly = render(
      withTheme(
        <Button
          title="Teste"
          loading={false}
          size="small"
          type="youtube"
          onPress={() => {
            return "teste";
          }}
        />
      )
    );

    const buttonClick = buttonIconOnly.getByTestId("component-button");
    fireEvent.press(buttonClick);
  });

  it("Button onClick link", () => {
    const buttonIconOnly = render(
      withTheme(
        <Button
          title="Teste"
          loading={false}
          size="small"
          type="link"
          onPress={() => {
            return "teste";
          }}
        />
      )
    );

    const buttonClick = buttonIconOnly.getByTestId("component-button");
    fireEvent.press(buttonClick);
  });
});
