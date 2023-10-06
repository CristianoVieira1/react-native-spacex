import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: 29px;
  margin: ${({ theme }) => theme.spacings.xsmall} 0;
`;

export const ImageView = styled.View`
  width: 100%;
  height: 220px;
  align-items: center;
  justify-content: center;
`;
