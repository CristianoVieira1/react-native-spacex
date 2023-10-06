import React from "react";
import { ActivityIndicator } from "react-native";
import Theme from "../../../theme";

function Load() {
  return (
    <ActivityIndicator
      color={Theme.colors.orange}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      testID="loading-indicator"
    />
  );
}

export default Load;
