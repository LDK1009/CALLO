import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Preview = () => {
    const router = useRouter();
  return (
    <Container>
      <HeaderText>미리보기</HeaderText>
      <ImgWrap>
        <Img src={"/img/data-lab-preview1.png"} alt="미리보기 이미지" width={115} height={255} />
        <Img src={"/img/data-lab-preview2.png"} alt="미리보기 이미지" width={115} height={255} />
      </ImgWrap>
      <Explain>
        로그인 후 이용가능한 기능입니다.
        <br />
        데이터랩을 통해 상품간 영양성분을 비교해보세요!
      </Explain>
      <SignInButton onClick={() => {router.push("/sign-in")}} variant="contained" type="submit" disableElevation>
        로그인
      </SignInButton>
    </Container>
  );
};

export default Preview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: #eeeeee;
  padding: 24px 0px;
  margin-bottom: 40px;
`;

const Img = styled(Image)`
  border-radius: 12px;
`;

const HeaderText = styled.div`
  margin-top: 60px;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
`;

const Explain = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom:40px;
`;

const SignInButton = styled(Button)`
  width: 90%;
  height: 50px;
  border-radius:8px !important;
  font-size: 16px !important;
  background-color: var(--main-color) !important;
`;
