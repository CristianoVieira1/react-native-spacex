import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "@utils/DeviceResolution";
import * as Animatable from "react-native-animatable";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  width: ${({ theme }) => theme.device.width}px;
  height: 100%;
`;

export const Logo = styled(Animatable.View)`
  position: absolute;
  left: ${widthPercentageToDP("22%")}px;
  top: ${heightPercentageToDP("45%")}px;
`;

export const Submit = styled(Animatable.View)`
  justify-content: center;
  align-items: center;
  padding-top: ${heightPercentageToDP("30%")}px;
  width: 100%;
`;
