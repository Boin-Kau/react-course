---
description: >-
  React 프로젝트를 간단한 명령어만으로 시작할 수 있는 CRA 툴체인으로 프로젝트를 생성하고, 오늘 배운 개념들을 실습을 통해 더 자세히
  알아봅니다.
---

# CRA(Create-React-App)으로 React 시작하기

## **CRA(create-react-app) 프로젝트 만들기**

* node -v : v16
* npm -v : 8

```bash
npx create-react-app study-demo1
```

**주요 파일**

* public/index.html
* src/index.js
* src/App.js



**참고!!**

* JSX 문법에서는 무조건 루트 요소는 1개여야 한다.
* 컴포넌트 첫글자는 무조건 대문자로 작성해줘야 한다.
* 컴포넌트를 생성한 파일명은 첫글자를 대문자로 작성해주는 것이 좋고, js vs jsx 확장자 사용은 본인의 선택!
* 컴포넌트 기본코드 자동완성 익스텐션 : **VS Code ES7+ React/Redux/React-Native/JS snippets**
