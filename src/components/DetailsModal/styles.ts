import styled from "styled-components/native";
import { heightPercentageToDP } from "../../utils/DeviceResolution";

export const ModalBackground = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const Container = styled.View`
  padding: ${heightPercentageToDP("2%")}px 0;
  flex: 1;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacings.medium};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fonts.sizes.xsmall};
  line-height: 32px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  line-height: 26px;
  text-align: justify;
  margin-bottom: ${({ theme }) => theme.fonts.sizes.xsmall};
`;

export const Header = styled.View`
  padding: 20px;
`;

export const Image = styled.Image`
  border-radius: 20px;
  width: 80%;
  height: 60px;
`;

export const ButtonsViews = styled.View`
  padding: 20px;
`;

export const FooterContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const VideoView = styled.View`
  width: 100%;
`;

export const Overlay = styled.View`
  position: absolute;
  z-index: 999999;
  right: 16px;
  top: ${heightPercentageToDP("8%")}px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Youtube = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
`;
