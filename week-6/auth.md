---
description: 쿠키-세션 방식, OAuth 방식, JWT 방식 총 3가지의 Auth 방식을 알아봅시다.
---

# Auth(사용자 인증) 방식

## **1) 쿠키, 세션 방식**

* “자유이용권을 주는 것.”
* 맨 처음 **클라이언트가 로그인**을 할 경우, 서버에서 **자유이용권 (토큰, 세션 ID)를 발급**한다. 이후에 클라이언트가 회원용 API를 호출 할 경우 **http 헤더에 이 세션 ID가 담겨서** 자유롭게 사용할 수 있다.
* 과정:
  * 클라이언트가 Id pw를 보내면, 사용자확인하고 세션 생성후 세션 저장소에 유저정보와 대응하는 고유한 세션id를 생성 및 저장한 뒤 클라이언트에 보냄
  * ab253bddfde 이란 이름의 folder를 만들고 각종 파일들을 담는다. 이때 이 ab253bddfde을 SID 라고 하고 서버가 갖고 있는 정보를 세션이라고 하고 클라이언트는 세션id를 쿠키를 통해 저장합니다.
  * 클라이언트는 통신마다 발급받은 세션id를(쿠키) 통해 매번통신하고 서버에서는 세션저장소에서 인증정보를 넘겨주는 구조입니다
* 세션이란 서버 입장에서의 스토리지 이름이다. **쿠키**라는 것은 **클라이언트 스토리지** 이름이다.
* 장점: **구현이 간단**하다.
* 단점: **세션 ID**가 노출되면 보안에 매우 취약하다. → Q. SID를 탈취해서 **session hijacking** 할 수 있으므로 꽤 위험하다.

{% hint style="warning" %}
**일부 권한**만 주면 괜찮지 않을까? 털려도 상관 없게 만들자! => **OAuth**로 연결
{% endhint %}

## **2) OAuth 방식**

* “Big-3 티켓을 주는 것”
* 사용자가 동의한 특정 행위에 대해서만 권한을 주는 것
* 카카오톡 회원가입을 할 때 **어떤 정보를 제공할지 체크**하는 것이 OAuth 방식 로그인의 대표적인 예시
* 로그인에 성공하면 서버에서 **토큰**을 보낸다. 단, 그전에 **퍼미션 리스트**도 함께 보낸다. 즉, 허용된 권한만 사용할 수 있게 하는 로그인 유지 방식이다.
  * 리프레시 토큰 : 한달 가량 유효 → 리프레시 토큰의 사용을 최소화하여 보안성을 높인다.
  * 엑세스 토큰 : 몇분 단위로 갱신 → 리프레시 토큰이 있어야 엑세스 토큰을 발급 받을 수 있다. 이 엑세스 토큰으로 회원용 API에 접근할 수 있다.
* 장점: 보안성이 우수 단점: 과정이 복잡한만큼 리소스가 많이 필요

## **3) JWT (Json Web Token)**

* “매번 놀이기구를 탈 때마다 권한을 검사하는 것”
* jwt 구성
  * header(헤더) : 토큰의 타입과 해시 암호화 알고리즘으로 구성
  * payload(내용)
  * signature(인증) : secret key를 포함하여 암호화. 헤더와 페이로드를 더한뒤 secret key로 암호화 한 값.
* Header, Payload는 인코딩될 뿐(16진수로 변경), 따로 암호화되지 않는다. 따라서 JWT 토큰에서 Header, Payload는 누구나 디코딩하여 확인할 수 있습니다. → Payload에는 유저의 중요한 정보(비밀번호)가 들어가면 쉽게 노출될 수 있다는 말!
*   클라이언트가 ID, PWD를 서버에 보낸다 → 서버는 이 정보를 인코딩하여 토큰(jwt)으로 만들어 클라이언트에 보낸다. → 클라이언트는 **로컬스토리지에 JWT를 저장**하여 사용

    ```jsx
    const postUser = async () => {
    	const body = {
    		email: email,
    		password: pw
    	}
    	
    	try {
    		const data = await axios({
    			method: 'post', 
    			url: ~~~
    			data: body 
    		})
    		
    		if(!data) return
    		if(data.code === 4001) {
    			console.log('Server Error);
    			return;
    		}

    		// jwt를 로컬스토리지에 저장
    		localStorage.setItem('jwt', data.result.token);

    	} catch (e) {

    	}
    };
    ```
*   회원용 API를 호출할 때, header에 jwt를 담아 API 호출

    ```jsx
    const instance = axios.create({
      baseURL: '<https://some-domain.com/api/>',
      timeout: 1000,
      headers: {
    		'X-ACCESS-TOKEN' : localStorage.getItem('jwt') 
    	}
    });
    ```
* JWT의 특징은
* 앞선것과 다른것은 의미가 담겨있지 않는다. 랜덤 일련번호 JWT는 토큰 자체에 의미가 담겨있음 2.별도의 서버 저장소가 필요 없다.

장점: 리소스가 적게 필요하다.&#x20;

단점: 보안에 취약하다. → HTTPS이 꼭 요구됨&#x20;

* 주소, API 시트, 프로토콜(HTTP + Security = HTTPS)&#x20;
* get, post, put, patch, delete&#x20;
* query string, path variable, body
