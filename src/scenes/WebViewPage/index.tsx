import Header from "@components/Header";
import { RouteProp } from "@react-navigation/native";
import { WebView } from "react-native-webview";
import * as S from "./styles";

interface IProps {
  route: RouteProp<{ params: { url: string } }, "params">;
}

const WebViewPage = (props: IProps) => {
  return (
    <S.Container>
      <Header />
      <WebView source={{ uri: props.route?.params?.url }} />
    </S.Container>
  );
};

export default WebViewPage;
