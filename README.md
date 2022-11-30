---
description: React가 탄생한 이유에 대해 살펴보며, React의 중요한 특징들을 알아봅니다.
---

# What is React?

## <mark style="background-color:yellow;">왜 React가 탄생했을까?</mark>

1\~20년 전의 웹사이트를 생각해봅시다.&#x20;

버튼을 클릭하여 페이지를 이동하면, 새로고침이 발생하면서 페이지를 새로 불러오는 모습이 그려집니다. &#x20;

<figure><img src=".gitbook/assets/스크린샷 2022-11-30 오후 5.25.51.png" alt=""><figcaption><p>MPA 방식으로 개발된 초등학교 웹사이트</p></figcaption></figure>

이렇게 여러 개의 페이지로 구성되어 있고, 새로운 페이지를 요청할 때마다 각 페이지를 위한 리소스들을 다운로드하여 화면의 표현하는 방식을 MPA(**Multiple Page Application**)라고 합니다.&#x20;



### MPA의 특징

* 여러 개(Multiple)의 Page로 구성된 Application.
* 새로운 페이지를 요청할 때마다 서버에서 렌더링된 정적 리소스(html, css, javascript)가 다운로드된다.&#x20;
* 페이지를 이동하거나 새로고침하면 전체 페이지를 다시 렌더링한다.

<figure><img src=".gitbook/assets/스크린샷 2022-11-30 오후 5.35.09.png" alt=""><figcaption></figcaption></figure>



### MPA의 단점

인터넷과 스마트폰의 발전으로 인해, 웹은 기존과는 다른 역할을 담당하게 됩니다.&#x20;

기존에는 일방적인 정보전달이 목적이었다면, 이제는 유저와의 Interaction이 굉장히 중요한 요소로 작용합니다.&#x20;

유저가 웹을 통해 데이터를 전달하고, 요청하는 등 이벤트를 발생시키는 경우가 많아졌다는 뜻입니다.&#x20;

> 데이터를 가져와 클라이언트가 다시 화면을 그리는 동안 사용자는 빈 화면만 보고 기다려야 하네...?\
> \
> 우리가 원하는 UX(유저경험)가 아니야!&#x20;

이러한 단점을 개선하기 위해, SNS의 선두주자였던 Facebook에서 React를 개발하게 됩니다.&#x20;



## <mark style="background-color:yellow;">React란?</mark>

* 페이스북이 만든 Javascript 기반의 라이브러리.
* 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 라이브러리.
* **'Component'**라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성하도록 도움.
  * 쉽게 얘기하면, 작은 부품들을 조립하여 하나의 어플리케이션을 만들 수 있게 해줌.&#x20;
* **JSX**라는 Javascript 확장문법을 사용하여 javascript 파일에 html을 작성할 수 있게 해줌.&#x20;

> 지속해서 데이터가 변화하는 대규모 애플리케이션을 구축하기 위해 React를 만들었습니다.&#x20;

<figure><img src=".gitbook/assets/스크린샷 2022-11-30 오후 5.46.24.png" alt=""><figcaption></figcaption></figure>



### React의 주요 특징 1 : SPA

React는 **SPA(Single Page Application)** 개발 라이브러리입니다.&#x20;

* 한 개(Single)의 Page로 구성된 Application.
* 하나의 html 파일을 가지고, 나머지는 javascript를 이용하여 동적으로 화면을 구성
* 단 한 번만 리소스(HTML, CSS, JavaScript)를 로딩하며, 그 후에는 데이터를 받아올 때만 서버와 통신한다.
* 즉, 최초 페이지를 로딩한 시점부터는 페이지 리로딩 없이 필요한 부분만 서버로 부터 받아서 화면을 갱신한다.

> 새로고침을 통한 페이지 리로딩을 최소화하기 때문에, 네이티브 앱과 유사한 UX을 제공할 수 있어!!&#x20;

<figure><img src=".gitbook/assets/스크린샷 2022-11-30 오후 6.01.26.png" alt=""><figcaption></figcaption></figure>



### React의 주요 특징 2 : 단방향 데이터 바인딩

데이터 바인딩 : **화면상에 보여지는 데이터(View)**와 **브라우저 메모리에 있는 데이터(Model)**를 묶어서(Binding) 서로 간의 데이터를 동기화하는 것

<figure><img src=".gitbook/assets/스크린샷 2022-11-30 오후 6.08.33.png" alt=""><figcaption><p>단방향의 컴포넌트 내 데이터 플로우</p></figcaption></figure>

<figure><img src=".gitbook/assets/스크린샷 2022-11-30 오후 6.06.48.png" alt=""><figcaption><p>부모 -> 자식 방향의 컴포넌트간 데이터 플로우</p></figcaption></figure>



