---
description: >-
  Pure css의 문제점에 대해 살펴보고, 해당 문제들을 해결해주면서 좀 더 리액트답게 styling 코드를 작성할 수 있도록 도와주는
  styled-components 라이브러리에 대해 배워봅시다.
---

# Styled-Components

## Problems with CSS at Scale

2014년 React 컨퍼런스에서 Facebook FE 개발자 vjeux는 **'CSS의 7가지 문제점'**에 대해 발표합니다. 문제점에 대한 솔루션으로 CSS 대신 JS를 통해서 style을 만들어서 inline-style을 넣어보자라고 하는 **CSS in JS**라는 개념을 소개 및 제안합니다. [(참고자료)](https://speakerdeck.com/vjeux/react-css-in-js?slide=2)

이를 시작으로 2017년도에 stylex라는 inline-style대신 atomic css를 만들어서 넣어주는 개념으로 발전했습니다.

이후 현재 우리가 사용하는 **styled-components** 라이브러리로 발전했습니다.&#x20;

_**1)Global Namespace**_

* css는 어디에 선언을 하건 import를 하건 **항상 global namespace**를 가짐
* 기존에 만들어진 스타일에 override를 하기 쉽다는 장점이 있었지만, 스타일 중첩을 막기 위해 css 이름을 길고 복잡하게 지어야하는 불편함이 훨씬 큼.

_**2)Dead Code Elimination**_

* 기능 추가, 변경, 삭제 과정에서 불필요한 CSS를 제거하기 어려운 문제
* (전임자가 작성한) 레거시 코드에서 어느 CSS는 사용하고 어느 CSS는 불필요한지 확인하기 쉽지 않음

_**3)Minification**_

* 클래스 이름의 최소화 문제

_**4)Breaking Isolation**_

* CSS의 외부 수정을 관리하기 어려운 문제(캡슐화)

_5)Dependencies_

_6)Sharing Constants_

_7)Non-deterministic Resolution_

__

## Styled-Components

대표적인 **CSS in JS** 라이브러리 : 스타일 정의를 CSS 파일이 아닌 JavaScript로 작성된 컴포넌트에 바로 삽입하는 스타일 기법

웹 애플리케이션을 여러 개의 재활용이 가능한 빌딩 블록으로 분리하여 개발하는 **'컴포넌트 기반 설계'**를 쉽게 구현할 수 있게 해줍니다.&#x20;

[통계) Styled-Components는 충분히 많이 사용되는 라이브러리일까?](https://2021.stateofcss.com/en-US/technologies/css-in-js/)

### <mark style="background-color:yellow;">설치하기</mark>

```shell
npm i styled-components
```

### <mark style="background-color:yellow;">주요특징</mark>

컴포넌트(사용자 정의 태그)와 마찬가지로, 원하는 스타일이 적용된 태그를 직접 만들어서 사용합니다.&#x20;

스타일드 컴포넌트도 일반 컴포넌트와 마찬가지로 첫 글자는 대문자로 작성해주어야 합니다.&#x20;

```jsx
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
```

<mark style="color:red;">(중요)</mark> props를 전달하여 조건부 스타일링이 가능합니다.&#x20;

```jsx
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

기존 스타일드 컴포넌트를 overriding 하여 사용할 수도 있습니다.&#x20;

```jsx
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
```

Link 태그도 커스텀이 가능합니다.&#x20;

```jsx
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

render(
  <div>
    <Link>Unstyled, boring Link</Link>
    <br />
    <StyledLink>Styled, exciting Link</StyledLink>
  </div>
);
```

Props 전달에는 다양한 패턴들이 있습니다. 아래와 같이 default 값을 세팅해놓는 것 또한 가능합니다.

```jsx
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

// Render a styled text input with the standard input color, and one with a custom input color
render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
);
```

스타일드 컴포넌트 안에서 className, id, tagName을 참조하여 스타일링을 입힐 수 있습니다.&#x20;

```jsx
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  
  .title {
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  }
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <h2 className="title">제목</div>
  </Wrapper>
);
```
