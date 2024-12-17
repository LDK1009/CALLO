'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  // 로그인 처리 함수
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // 에러 메시지 초기화
    // async function signInWithEmail() {
    //     console.log("data : ", data);
    //   }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log('로그인 성공');
      router.push('/'); // 로그인 성공 후 홈으로 이동
    } catch (err: any) {
      console.error('로그인 실패:', err.message);
      setErrorMessage(err.message || '로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <label>이메일</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@email.com"
        />

        <label>비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="비밀번호 입력"
        />

        {errorMessage && <p>{errorMessage}</p>}

        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
