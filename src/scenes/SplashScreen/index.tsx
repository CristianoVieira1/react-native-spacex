import React, { useEffect } from "react";

import Logo from "@assets/icons/logo.svg";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        handleNextRoute();
      }, 4000);
    }, 1700);
  }, []);

  async function handleNextRoute() {
    navigation.navigate("InitialAccess");
    return;
  }

  return (
    <S.Container testID="screen-splash">
      <S.Logo animation={"bounceInRight"} useNativeDriver duration={6000}>
        <Logo width={250} height={250} />
      </S.Logo>
    </S.Container>
  );
};

export default SplashScreen;
