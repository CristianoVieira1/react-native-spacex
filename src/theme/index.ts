import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  device: {
    width: width,
    height: height,
  },
  border: {
    radius: "12px",
  },
  fonts: {
    regular: "PublicSans_400Regular",
    medium: "PublicSans_500Medium",
    bold: "PublicSans_700Bold",
    sizes: {
      xxsmall: "10px",
      xsmall: "10px",
      small: "14px",
      medium: "18px",
      large: "24px",
      xlarge: "30px",
      xxlarge: "39px",
      xxxlarge: "64px",
    },
  },
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    orange: "#FF8200",
    border: "#C5CADA",
    red: "#FF0000",
    gray: "#808080",
    lightGray: "#9CA3AF",
    opacityBlack: "#575F69",
    buttonActive: "#007bff",
    darkGray: "#1F2937",
  },
  shadow: {
    shadowOpacity: 0.5,
    shadowOffset: { width: 5, height: 3 },
    shadowRadius: 2,
    elevation: 5,
    shadowColor: "#00000066",
  },
  spacings: {
    xxsmall: "6px",
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "24px",
    xxlarge: "34px",
    xxxlarge: "42px",
  },
};
