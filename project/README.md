함수 명명규칙
아키텍쳐 특성 상 sevice의 함수를 hooks에서 호출하여 사용하기 때문에 명명 규칙을 세웠다.

service 폴더 내 함수들은 모두 DB와 직접적인 통신을 한다.
따라서, 함수명을 [ HTTP 메서드 + 함수명 ]으로 정의한다.
ex) 로그인 함수 = postSignIn(email, password){...}

hooks 폴더의 커스텀훅 내부의 메서드들의 함수명은 상태를 변경한다.
따라서, 함수명을 [ handel + 함수명 ]으로 정의한다.
ex) 로그인 메서드 = handleSignIn(email, password){...}
