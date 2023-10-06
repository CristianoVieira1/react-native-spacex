import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.shadowColor} 3px 5px 5px;
  border-radius: ${({ theme }) => theme.spacings.small};
  padding: ${({ theme }) => theme.spacings.xlarge};
  margin-bottom: ${({ theme }) => theme.spacings.small};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  elevation: 5;
`;

export const CardContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const CardImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;

export const Launch = styled.Text`
  line-height: 24px;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
`;

export const CardName = styled.Text`
  line-height: 22px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
`;

export const CardDate = styled.Text`
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
`;
