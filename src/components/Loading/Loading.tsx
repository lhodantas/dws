import { IconLoading } from "components/Icons";
import DefaultStyles from "styles/default";
import * as S from "./Loading.styles";

const Loading = () => {
  return (
    <>
      <DefaultStyles />
      <S.Wrapper>
        <IconLoading size={80} />
      </S.Wrapper>
    </>
  );
};

export { Loading };
