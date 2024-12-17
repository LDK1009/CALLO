"use client";

import { useState } from "react";

// Props 타입 정의
type SignInProps = {
    setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn = ({ setIsSignIn }: SignInProps) => {
    const [password, setPassword] = useState<string>("");

    // 비밀번호 제출(로그인 시도)
    const submit = () => {
        if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setIsSignIn(true);
        }
        else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    }


    return (
        <>
            <input type="password" placeholder="비밀번호를 입력하세요." value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={submit}>로그인</button>
        </>
    );
};

export default SignIn;