import { Button } from "@mui/material";

type SignUpButtonProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // onClick 이벤트 핸들러 타입
};

const SignUpButton = ({ onClick }: SignUpButtonProps) => {
  return <Button type="submit" onClick={onClick}>회원가입</Button>;
};

export default SignUpButton;
