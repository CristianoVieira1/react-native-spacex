import styled from "styled-components/native";

export const Container = styled.View`
  width: ${({ theme }) => theme.device.width}px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 32px;
  padding: 32px;
`;

export const Logo = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;
