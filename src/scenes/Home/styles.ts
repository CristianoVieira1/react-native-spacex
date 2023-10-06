import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@utils/DeviceResolution";
import { ImageBackground } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import styled from "styled-components/native";
import Theme from "../../theme";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  padding-top: 40px;
`;

export const Filter = styled.View`
  position: absolute;
  z-index: 5;
  width: 100%;
  top: ${heightPercentageToDP("-2%")}px;
`;

export const Background = styled(ImageBackground).attrs(() => ({}))`
  z-index: -1;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: getBottomSpace() + 10,
    paddingBottom: getBottomSpace() + 160,
    flexGrow: 1,
  },
})`
  width: 100%;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: ${getBottomSpace() + 120}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Loading = styled.View`
  position: absolute;
  width: 10%;
  height: 10%;
  left: ${widthPercentageToDP("45%")}px;
  top: ${heightPercentageToDP("25%")}px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.disabled ? Theme.colors.lightGray : Theme.colors.buttonActive};
  border-radius: 4px;
  margin: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${(props) =>
    props.disabled ? Theme.colors.lightGray : Theme.colors.white};
`;
