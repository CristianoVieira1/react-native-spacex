import moment from "moment";
import "moment/locale/pt-br";
import * as S from "./styles";

interface ICardLaunchesProps {
  name: string;
  image: string;
  date_utc: string;
  onAction?: () => void;
}

const CardLaunches: React.FC<ICardLaunchesProps> = ({
  name,
  image,
  date_utc,
  onAction,
}) => {
  const imageDefault = "https://images2.imgbox.com/f9/4a/ZboXReNb_o.png";
  const dateDefault = "Date not available";

  return (
    <S.Container
      onPress={onAction}
      activeOpacity={0.7}
      testID="component-CardLaunches"
    >
      <S.Card>
        <S.CardImage
          source={{
            uri: image || imageDefault,
          }}
          alt={name}
        />
        <S.CardContent>
          <S.Launch>LAUNCH</S.Launch>
          <S.CardName>{`${name.slice(0, 22)} ${
            name.length > 22 ? "..." : ""
          }`}</S.CardName>
          <S.CardDate>
            {moment(date_utc).format("DD/MM/YYYY") || dateDefault}
          </S.CardDate>
        </S.CardContent>
      </S.Card>
    </S.Container>
  );
};

export default CardLaunches;
