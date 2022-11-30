---
description: React의 핵심 개념인 Component, JSX, Props, 그리고 State에 대해 알아봅니다.
---

# React의 핵심 개념

## <mark style="background-color:yellow;">사용자 정의 태그, Component 단위의 설계</mark>

* Component는 부품으로 사용됨. **재활용 가능한** UI 구성의 기본 단위
* 이 부품들을 모아서 하나의 화면을 만듦.&#x20;
  * 다른 화면들에서 재사용할 수도 있음
  * 타인에게 공유하거나 타인들이 만들어 놓은 것을 사용할 수도 있음(Open Source)
* Component를 통해 기존 html의 반복적인 코드사용과 유지보수에 대한 문제점을 해결할 수 있음.

참고자료 : [https://ko.reactjs.org/docs/components-and-props.html](https://ko.reactjs.org/docs/components-and-props.html)

<figure><img src="../.gitbook/assets/스크린샷 2022-11-30 오후 6.23.01.png" alt=""><figcaption></figcaption></figure>



## <mark style="background-color:yellow;">JSX 문법</mark>

* JSX(Javascript XML) : JS에 XML을 추가한 JS 확장 문법
* 쉽게 말해 **JS 함수 내**에 **html 문법**을 사용하는 것
*   브라우저가 이해할 수 없는 JSX 문법은 Babel을 통해 일반 JS 형태의 코드로 변환됨

    <figure><img src="../.gitbook/assets/스크린샷 2022-11-30 오후 6.26.08.png" alt=""><figcaption></figcaption></figure>

참고자료 : [https://ko.reactjs.org/docs/introducing-jsx.html](https://ko.reactjs.org/docs/introducing-jsx.html)



## <mark style="background-color:yellow;">Props</mark>

props는 3가지 관점에서 이해해볼 수 있다.&#x20;

### 1) Component에 전달되는 '데이터'

* 리액트의 데이터 전달 방향은 부모 -> 자식
* 리액트에서는 자식 컴포넌트에게 데이터를 **Props**라는 이름의 소포상자에 담아 전달해준다.&#x20;

### 2) Component의 Input

* 우리는 함수형 Component를 다룬다.&#x20;
* 함수에는 입력과 출력이 있다.&#x20;
* Props을 통해 입력된 데이터를 우리가 만든 Component가 처리하여 UI가 사용자에게 반환(return)된다.&#x20;

![](<../.gitbook/assets/스크린샷 2022-11-30 오후 6.32.40.png>)

### 3) Component를 사용하는 외부자를 위한 것

```html
<img src"./lion.png" alt="사자" />
```

* 우리는 html 태그의 src와 alt 속성(props)에 원하는 값을 입력하여 사용한다.
* 우리가 만들 Component, 즉 사용자 정의 태그도 마찬가지로 props를 통해 입력을 받을 수 있다.

참고자료 : [https://ko.reactjs.org/docs/components-and-props.html](https://ko.reactjs.org/docs/components-and-props.html)



## <mark style="background-color:yellow;">State</mark>

* Component의 내부(상태) 값. 당연히 각 Component 내부에서 관리됨.&#x20;
* 앱의 유동적이고 변화하는 데이터를 다루기 위해 사용.
* 함수형 Component에서는 **useState()** Hook을 통해 state를 생성하고 관리함.&#x20;

### useState

```javascript
const FunctionalComponent = () => {
    const [name, setName] = useState('');
    
    return (
        <div>
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
        </div>
    )
}

export default FunctionalComponent;
```

* const \[state 값 저장 변수, state 값 갱신 함수] = useState('초기값');
* 'state 값 갱신 함수' 네이밍은 일반적으로 state 값 앞에 set을 붙여서 지어줍니다.&#x20;
* state는 반드시 setState 함수로만 업데이트 해줘야합니다.&#x20;
* Component의 바로 아래 로컬 scope에 선언해주어야 합니다. (Component의 로컬 함수에서 선언 불가능)



### useState는 어떻게 동작하나요?

```javascript
const [num, setNum] = useState(0);

const plusNum = () => {
	setNum(num + 1);
	console.log(num);
}
// 어떤 값이 콘솔 로그로 찍히게 될까요?
```

* useState는 비동기
  * setState 함수는 화면에 렌더링된 state를 호출 즉시 변경하지 않는다.
  * state 변경사항을 대기열에 집어넣고, 컴포넌트에게 새로운 state를 사용하기 위해 re-render해야한다고 알리는 역할.
  * 리액트는 성능 향상을 위해서 setState를 연속 호출하면 배치(Batch) 처리하여 한 번에 렌더링
    * 배치(Batch) : React가 너 나은 성능을 위해 여러개의 state 업데이트를 하나의 리렌더링으로 묶는 것 React는 16ms 동안 변경된 상태 값들을 하나로 묶는다. (16ms 단위로 배치를 진행한다.)

```javascript
const [num, setNum] = useState(0);

const plusNum = () => {
	setNum(num + 1);
	setNum(num + 1);
	setNum(num + 1);
}
// +3 을 기대하는 로직이지만, +1씩만 증가함
```

setState 함수에 값을 인자로 바로 넘겨주는 것이 아닌, updator 함수를 넘겨줌으로써 이전의 state 값을 가져와 변경사항을 처리할 수 있다.&#x20;

```javascript
const [num, setNum] = useState(0);

const plusNum = () => {
	setNum((prev) => prev + 1);
	setNum((prev) => prev + 1);
	setNum((prev) => prev + 1);
}
```

