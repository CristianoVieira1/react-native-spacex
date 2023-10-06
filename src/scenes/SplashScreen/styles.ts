import * as Animatable from "react-native-animatable";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  width: ${({ theme }) => theme.device.width}px;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const Logo = styled(Animatable.View)`
  align-items: center;
  justify-content: center;
`;
