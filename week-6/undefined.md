---
description: 국내에서 주로 사용하는 대표적인 소셜로그인인 카카오 소셜로그인 로직에 대해 알아봅시다.
---

# 소셜로그인

<figure><img src="../.gitbook/assets/스크린샷 2022-05-30 오후 9.10.34.png" alt=""><figcaption></figcaption></figure>

## **0-1) FE: 이벤트 발생**

```jsx
// Login.jsx
const KAKAO_AUTH_URL = `/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

<a href={KAKAO_AUTH_URL}>
	<KaKaoButton>
		<KakaoIcon/>
		<span className="kakaoBtnText">카카오로 시작하기</span>
	</KaKaoButton>
</a>
```

## **0-2) Redirect 라우팅 정의**

<figure><img src="../.gitbook/assets/스크린샷 2022-10-22 오후 2.56.39.png" alt=""><figcaption></figcaption></figure>

```jsx
<BrowseRouter>
	<Routes>
		<Route path="/auth/kakao-login" element={<KakaoRedirectHandler />} />
```

## **1. FE : 인증코드 요청 및 받기**

[Kakao Developers](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#request-code)

```jsx
// KakaoRedirectHandler.jsx
let params = new URL(document.location.toString()).searchParams;
let code = params.get('code'); // 인가코드 받는 부분
```

## **2. FE : 카카오서버로부터 받은 인증 코드를 BE로 전달**



## **3. BE : 인증코드로 토큰 요청 및 받기**

[Kakao Developers](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#request-token)

****

## **4. BE : 카카오서버로부터 받은 토큰으로 앱 자체 토큰(JWT) 재발행하여 FE로 전달**

****

## **5. FE : JWT에 따라서 회원가입/로그인 여부 판별 후 페이지 전환**
