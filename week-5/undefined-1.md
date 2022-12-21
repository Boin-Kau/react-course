---
description: >-
  프론트엔드 프로젝트에서 백엔드 개발 없이도 데이터 패칭 과정을 경험할 수 있게 해주는 가짜 API 서버에 대해 알아봅시다. 그 중 현재 가장
  많이 사용되고 있는 MSW(Mocking Service Worker)에 대해 알아보겠습니다.
---

# 데이터 모킹 라이브러리

## json-server vs MSW

|  json-server  |      MSW      |
| :-----------: | :-----------: |
|    내장 라이브러리   |   별도 설치가 필요함  |
| (실무) 사용 빈도 낮음 | (실무) 사용 빈도 높음 |
|   환경설정 코드 적음  | 환경설정 코드 보다 많음 |

[참고자료](https://npmtrends.com/json-server-vs-msw)



## MSW란

MSW(Mock Service Worker)는 서비스 워커(Service Worker)를 사용하여 네트워크 호출을 가로채는 API 모킹(mocking) 라이브러리입니다. 백앤드 API인 척하면서 프런트앤드의 요청에 가짜 데이터를 응답해주는 역할을 합니다.&#x20;

* 백앤드 API 개발과 프런트앤드 UI 개발이 동시에 진행되야하는 경우 -> 백엔드 API 개발 생산성과 무관하게 mock API로 프론트 구현 가능
* 테스트 환경에서 실제 백엔드 API에 네트워크 호출을 하는 대신에 훨씬 빠르고 안정적인 가짜 API 서버를 구축하기 위해서&#x20;



### <mark style="background-color:yellow;">MSW 라이브러리 설치</mark>

```shell
npm i -D msw
```



### <mark style="background-color:yellow;">서비스 워커 코드 생성하기</mark> <a href="#undefined" id="undefined"></a>

```shell
npx msw init public/ --save
```

\-> public 폴더에 **mockServiceWorker.js** 파일 만들어짐



### <mark style="background-color:yellow;">handler 작성하기</mark>

가짜 API 개발을 위해 요청이 들어왔을 때 임의의 응답을 해주는 핸들러(handler) 코드를 작성해야 합니다.&#x20;

일반적으로 src 폴더 하위에 mocks 폴더를 만들어주고, handlers.js를 생성해줍니다.&#x20;

저희는 REST API 방식을 사용하겠습니다.&#x20;



### <mark style="background-color:yellow;">서비스 워커 생성하기</mark>

mocks 폴더에 browser.js를 생성해주세요.&#x20;

```javascript
// src/mocks/browser.js
import { setupWorker } from "msw";
import { handlers } from "./handlers";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
```



### <mark style="background-color:yellow;">entry point에 서비스 워커 삽입하기</mark>

src/index.js에 아래의 코드를 작성해주세요.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 삽입된 코드!!
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```





