import { useCallback } from "react";
import Feather from "react-native-vector-icons/FontAwesome";
import Theme from "../../../../theme";
import * as S from "./styles";

interface ICardLaunchesProps {
  name: string;
  updateLaunchesName: (eventName: string) => void;
}

const LaunchesFilter = ({ name, updateLaunchesName }: ICardLaunchesProps) => {
  function searchHasStarted(): boolean {
    return name?.length > 0;
  }

  function onClearSearch(): void {
    if (name !== undefined) {
      updateLaunchesName("");
    }
  }

  function onEventNameChange(name: string): void {
    updateLaunchesName(name);
  }

  const SearchIcon = useCallback(() => {
    if (!searchHasStarted()) {
      return <Feather name="search" size={24} color={Theme.colors.gray} />;
    }

    return (
      <S.ButtonClear onPress={onClearSearch}>
        <Feather name="times" size={24} color={Theme.colors.gray} />
      </S.ButtonClear>
    );
  }, [name]);

  return (
    <S.Container>
      <S.SearchView>
        <S.Input
          value={name}
          onChangeText={onEventNameChange}
          placeholder="Search your Launcher"
        />
        <SearchIcon />
      </S.SearchView>
    </S.Container>
  );
};

export default LaunchesFilter;
