import Logo from "@assets/icons/logo.svg";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import theme from "../../theme";
import * as S from "./styles";

interface IHeaderProps {
  arrowDisabled?: boolean;
}

const Header = ({ arrowDisabled }: IHeaderProps) => {
  const navigation = useNavigation();

  function handleBackPage() {
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.Content>
        {arrowDisabled ?? (
          <Feather
            name="arrow-left"
            size={26}
            color={theme.colors.white}
            onPress={() => {
              handleBackPage();
            }}
          />
        )}
        <S.Logo>
          <Logo width={200} />
        </S.Logo>
      </S.Content>
    </S.Container>
  );
};

export default Header;
