---
description: 깔끔하고 안전하게 리액트 코드를 작성할 수 있도록 자바스크립트, 특히 ES6 문법 중 자주 다루게 되는 부분들을 알아봅시다.
---

# Javascript Essentials 1

## \[변수] var를 지양하고, let과 const를 사용하자

<mark style="background-color:yellow;">**var의 문제점 1 : 재선언과 재할당이 모두 가능하다**</mark>

```javascript
var name = '찰스';
var name = '김보인';

console.log(name);
// 결과 : 에러가 발생하지 않고, '김보인'이 출력됨
```



<mark style="background-color:yellow;">**var의 문제점 2 : 함수 스코프(function scope)를 따른다.**</mark>&#x20;

```javascript
var global = '전역';

if (global === '전역') {
    var global = '지역';
    console.log(global); // '지역'이 출력됨
}
console.log(global); // 전역변수가 오염되어 '지역'이 출력됨
```



<mark style="background-color:yellow;">**var의 문제점 3 : 호이스팅 시 undefined로 변수를 초기화한다.**</mark>&#x20;

```javascript
console.log(num); // undefined가 출력됨
var num; // 선언 
num = 6; // 초기화
```

{% hint style="info" %}
**호이스팅(hoisting)**이란?

선언과 초기화를 분리한 후, 스코프 내 선언들을 모두 스코프의 최상위로 끌어올리는 것. 크게 변수 호이스팅과 함수 호이스팅으로 나뉜다.&#x20;

[참고자료](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)
{% endhint %}

{% hint style="warning" %}
**호이스팅**은 무조건 나쁜 것일까?

변수 호이스팅은 엄격히 지양된다. 함수 호이스팅과 관련해서는 아래의 예제를 보며 고민해보자.&#x20;
{% endhint %}

```javascript
function onClickButton () {
    getData();
}

function getData () {

}
```



<mark style="background-color:blue;">**let은 재선언은 불가, 재할당은 가능! const는 둘 다 불가**</mark>

```javascript
let name = '찰스';
let name = '김보인';
console.log(name); // 에러발생('name' has already been declared)

let num = 100;
num = 1;
console.log(num); // 1이 출력됨(let은 재할당 가능)

const num2 = 100;
num2 = 1;
console.log(num2); // 에러발생(Assignment to constant variable)
```

{% hint style="info" %}
const는 변수에 값을 재할당한느 것은 안되지만&#x20;

객체, 배열 등 레퍼런스 객체 내부의 값을 조정하는 것은 가능.
{% endhint %}

```javascript
const grade = {
    math: 100,
    korean: 85,
}
grade.math = 0;
grade.korean = 100;

console.log(grade); // {"math":0,"korean":100}이 출력됨
```



<mark style="background-color:blue;">**let과 const는 블록 스코프(block scope)를 따름**</mark>

```javascript
let global = '전역';

if (global === '전역') {
    let global = '지역';
    console.log(global); // '지역'이 출력됨
}
console.log(global); // '전역'이 출력됨

// const도 동일한 결과가 출력됨
```



<mark style="background-color:blue;">**let과 const는 변수 호이스팅 불가**</mark>

```javascript
console.log(num); // 에러발생(Cannot access 'num' before initialization)
let num;
num = 6;

// const도 동일한 결과가 출력됨
```

