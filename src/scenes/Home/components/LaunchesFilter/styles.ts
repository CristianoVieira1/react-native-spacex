import styled from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
  padding: 0 20px;
`;

export const SearchView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-radius: 6px;
  padding: 0 30px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled.TextInput`
  height: 56px;
  padding: 0 19px;
`;

export const ButtonClear = styled.TouchableOpacity``;
