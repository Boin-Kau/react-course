---
description: Promise, async/await 등 자바스크립트 비동기와 관련된 내용들을 알아봅시다.
---

# 자바스크립트 비동기

## 동기 vs 비동기

자바스크립트는 기본적으로 Synchronous-nonblocking으로 동작합니다.&#x20;

<figure><img src="../.gitbook/assets/스크린샷 2022-10-15 오전 9.46.48.png" alt=""><figcaption></figcaption></figure>

## Promise

* 비동기 기능/연산에 사용하는 자바스크립트 객체
* 연산이 실행은 되었지만 결과를 아직 반환하지 않은 객체
* then을 붙이면 결과를 반환함. (resolve 콜백 함수의 리턴값을 받음)
* catch를 붙이면 에러를 반환함. (reject 콜백 함수의 리턴값을 받음)

<figure><img src="../.gitbook/assets/promise.svg" alt=""><figcaption><p>Promise의 상태</p></figcaption></figure>

```jsx
const promise = new Promise((resolve, reject) => {
	if (condition) {
	  resolve("성공"); // then으로 연결
	} else {
	  reject("실패"); // catch로 연결
	}
})

const onClickButton = () => {
  promise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}
```



## **async & await**

* Promise를 좀 더 쉽게 사용할 수 있는 방법
* 가장 최근에 나온 JS 비동기 처리 문법
* 꼬리에 꼬리를 무는 then() 지옥에서 탈출할 수 있다.
* **async** 함수의 return 값은 **Promise**
* **await** 은 **Promise가 끝날 때까지 기다리라**는 뜻!
* await은 async 함수 안에서만 동작한다. (top-level await의 경우에는 예외)

```jsx
const asyncDemo = async () => {
  if (condition) return "성공";
  else throw new Error("실패");
}

const onClickButton2 = () => {
  const promise = asyncDemo();
    promise
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.log(error);
      });
}
```

```jsx
const [users, setUsers] = useState([]);

useEffect(() => {
	getUsers();
},[]);

const getUsers = async () => {
	const data = await axios.get('/users',...);
	console.log(data);
	setUsers(data.result.userList);
}

return (
	users.length > 0 &&
	users.map(user => (
		<div>{user......}</div>
	)
);
```

