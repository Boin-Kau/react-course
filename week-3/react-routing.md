---
description: >-
  SPA 방식의 어플리케이션에서 여러 페이지를 처리할 수 있도록 도와주는 react-router-dom 라이브러리를 활용해보며, 리액트
  라우팅에 대해 이해해봅시다.
---

# React Routing

## 라우팅(Routing)이란?

* 사용자가 요청한 URL(주소)에 맞는 페이지를 보여주는 것!
* 리액트 자체에는 라우팅 기능이 내장되어 있지 않음!
* 따라서, 라이브러리를 설치하여 라우팅 기능을 구현해주어야 함!



* 리액트는 SPA(Single Page Application) 방식으로 렌더링!
* 새로운 페이지를 로드하지 않고 **하나의 페이지 안에서 필요한 데이터만 가져오는 형태**를 가진다.
* <mark style="background-color:yellow;">**react-router-dom**</mark>은 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리!



## react-router-dom 활용하기

### <mark style="background-color:yellow;">설치하기</mark>

(주의) react-router-dom v5 버전이 아닌 **v6**를 사용합니다!!

```bash
npm i react-router-dom
```

v5 버전임을 어떻게 알 수 있을까요?

* useHistory Hook을 사용 ⇒ v6에서는 useNavigate Hook을 사용함
* \<Switch> ⇒ \<Routes>
* 등 둘의 차이점의 경우에 구글링 해보시면 좋을 것 같습니다.&#x20;
* [참고자료](https://velog.io/@yoosion030/react-router-dom-v6)



### <mark style="background-color:yellow;">라우트 정의하기</mark>

**\<BrowerRouter>**

* 라우터 역할 담당
* 새로고침 하지 않아도 새로운 컴포넌트를 렌더링 해주는 역할을 담당
* 라우팅에 포함시킬 페이지들은 모두 \<BrowserRouter> 컴포넌트로 감싸줘야 한다.

**\<Routes> & \<Route>**

* \<Routes> 컴포넌트는 여러 Route를 감싸서  그 중 경로가 일치하는 Route 단 하나만을 렌더링 시켜주는 역할을 함
* 모든 Route에 공통으로 들어가는 요소가 있다면, \<Routes> 밖으로 빼주면 됨. (ex. Header.jsx)
* \<Route> 태그의 path 속성에는 경로, element 속성에는 해당 경로에 띄워줄 컴포넌트를 넣어준다.
* 특정 컴포넌트에 여러 경로를 매칭하고 싶을 때에는, url 뒤에 \*을 붙여준다. (ex. NotFound.jsx)

```jsx
// src/App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Course from "./pages/Course";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/roadmaps" element={<Roadmap />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default 
```



### <mark style="background-color:yellow;">페이지 이동하기</mark>

페이지 이동은 크게 2가지 방법으로 수행할 수 있습니다.&#x20;

**\<Link>** 태그 사용하기

* \<Link>는 클릭 시 바로 이동하는 로직 구현 시에 사용 GOOD
*   DOM에서 a 태그로 변환

    ```jsx
    import { Link } from 'react-router-dom';

    <Link to="/">로고</Link>
    ```

**useNavigate** Hook 사용하기

* useNavigate는 페이지 전환 시 **추가로 처리해야 하는 로직**이 있을 경우 사용 GOOD
*   Hook이 반환해준 함수를 navigate 라는 변수에 저장 후, 해당 함수의 인자에 path 값을 넘겨주면 해당 경로로 이동

    * navigate(경로) : 해당 경로로 이동
    * navigate(-1) : 한 페이지 뒤로 가기
    * navigate(1) : 한 페이지 앞으로 가기

    ```jsx
    export default function Roadmap() {
      const navigate = useNavigate();

      return (
        <div>
          <h1>로드맵 화면입니다!!</h1>
          <button onClick={() => navigate('/')}>홈화면으로 이동하기</button>
        </div>
      );
    }
    ```

{% hint style="info" %}
**🤔 \<Link> 태그 대신 \<a> 태그는 사용할 수 없나요?**

두 태그의 차이점은 페이지 이동 시 페이지 **새로고침** 발생 유무입니다.

* \<Link>는 브라우저의 주소만 변경할 뿐 페이지 자체를 새로고침하지 않습니다.
* 반면, \<a>태그는 브라우저의 주소를 변경하면서 페이지를 새로고침합니다.



새로고침 발생 유무가 왜 중요한가요….?

* 페이지가 새로고침되면 현재 렌더링되어 있는 컴포넌트들이 모두 사라지고 새로 컴포넌트가 렌더링되게 됨!
* 이렇게 되면 기존 컴포넌트의 state 값들이 모두 날아가게 됨😅
* \<Link> 태그로는 페이지 이동 시에도 컴포넌트의 state 값 보존이 가능하지만, \<a> 태그는 그렇지 못함.
* 따라서! 프로젝트 내부 페이지 이동은 \<Link> 태그로, 외부 페이지로의 이동은 \<a> 태그로 수행하는 것이 적절함!
{% endhint %}

****

### <mark style="background-color:yellow;">**페이지 이동 시 데이터 전달하기**</mark>

👉🏻 **useNavigate로 props 전달하기 & useLocation으로 전달받은 props 꺼내기**

```jsx
// props 전달하기
// navigate(이동할 url, 전달할 인자)
navigate('/', { state: nickname })
```

```jsx
// props 값 꺼내기
const { state } = useLocation();
```

* hash: url의 # 문자열 뒤의 값
* key: location 객체의 고유 값
* **pathname: 현재 주소의 경로 (쿼리 스트링 제외)**
* **search: 맨 앞의 ? 문자를 포함한 쿼리 스트링 값**
* **state: 페이지 이동할 때 임의로 넣을 수 있는 상태 값**

👉🏻 **url 파라미터로 값 전달하고, useParams로 파라미터 값 꺼내기 (동적 라우팅)**

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/movie/:title" element={<MovieDetail />} />
  </Routes>
</BrowserRouter>
```

```jsx
// 값 전달하는 컴포넌트
import { useNavigate } from 'react-route-dom';

const navigate = useNavigate();

navigate(`/movie/${movieTitle}`)
```

```jsx
// 값 꺼내오는 컴포넌트
import { useParams } from 'react-route-dom';

const { title } = useParmas();
```

👉🏻 **쿼리 스트링으로 값 전달하기**

```jsx
// 값 전달하는 컴포넌트
import { useNavigate } from 'react-route-dom';

const navigate = useNavigate();

navigate(`/courses?s=${keyword}&author=찰스`);
```

```bash
// qs(쿼리스트링) 파싱 라이브러리 설치하기
npm i qs
```

```jsx
// 값 꺼내오는 컴포넌트
// 쿼리스트링 파싱에는 qs 라이브러리를 사용함(npm i qs)
import { useLocation } from 'react-router-dom'
import QueryString from "qs";

const location = useLocation();
const queryData = QueryString.parse(location.search, {
  ignoreQueryPrefix: true,
});
console.log(queryData.s);
```
