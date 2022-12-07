---
description: 함수형 Component과 관련된 핵심 기술인 React Hooks에 대해 알아봅시다.
---

# React Hooks

## React Hooks라는 기술은 왜 등장했을까?

React Hooks는 클래스형 Component를 사용하지 않고도 state를 사용할 수 있는 기술입니다. 좀 더 자세히 알아봅시다.&#x20;

### <mark style="background-color:yellow;">클래스형 Component -> 함수형 Component</mark>

클래스형 Component의 단점을 개선하여 함수형 Componenet가 탄생하였습니다.&#x20;

**함수형 Component**는 클래스형 Component에 비해 **더 짧고 심플한 코드 작성**이 가능했으며, **성능 또한 더 좋습니다**.&#x20;

{% code title="클래스형 Component 예시" %}
```javascript
import React, { Component } from 'react';

export default class ClassCpnt extends Component {
 render() {
   return (
     <div>Hello</div>
   )
 }
}
```
{% endcode %}

{% code title="함수형 Component 예시" %}
```javascript
import React from 'react';

export default function FunctionCpnt() {
    return (
        <div>Hello</div>
    )
}
```
{% endcode %}



하지만, 함수형 Component에서는 클래스형 Component에서 사용했었던 **state**와 **Lifecycle Method**을 사용할 수 없었습니다. 그래서 Hooks 탄생 전에는 울며 겨자먹기로 클래스형 Component를 사용하는 경우가 종종 있었습니다.&#x20;

<figure><img src="../.gitbook/assets/스크린샷 2022-12-07 오후 5.54.24.png" alt=""><figcaption><p>React Component의 생명주기</p></figcaption></figure>

{% hint style="info" %}
React Class Component는 **3가지 생명주기 함수**를 갖습니다.&#x20;

* componentDidMount : Component가 Mount된 직후 호출됨
* componentDidUpdate : Component가 갱신되었을 때 호출됨
* componentWillUnmount : Component가 제거되기 직전에 호출됨
{% endhint %}



이러한 문제점들을 해결하고자 React 16.8에서 **함수형 Component에 state와 Lifecycle Method 기능을 제공**해주는 **React Hooks**라는 기술이 추가됩니다.&#x20;

(hook into == 연동하다 / React Hooks는 함수형 Component에서 state와 Lifecycle Method을 연동할 수 있게 해주는 함수)&#x20;



## 대표적인 React Hooks, useState와 useEffect

### <mark style="background-color:yellow;">useState와 비교해보기</mark>

{% code title="클래스형 Component에서의 state 활용" %}
```javascript
class Card extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      darkMode: true
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({ darkMode: !this.state.darkMode });
  }
  
  render() {
    const { title } = this.props;
    return (
      ...
    )
  }
}
```
{% endcode %}

<pre class="language-javascript" data-title="함수형 Component에서의 state 활용"><code class="lang-javascript"><strong>const Card = ({ title }) => {
</strong>    const [darkMode, setDarkMode] = useState(true);
    
    const handleChange = (event) => {
        setDarkMode(!darkMode);
    }
    
    return (
        ...
    )
}
</code></pre>



### <mark style="background-color:yellow;">useEffect와 비교해보기</mark>

{% code title="클래스형 Component에서의 생명주기 " %}
```javascript
class Card extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      name: ""
    }
  }
  
  componentDidMount() {
    axios.get(url)
      .then(res => {
        this.setState({ name: res.data.name })
      })
  }
  
  
  render() {
    return (
      <div>
        이름: {this.state.name}
      </div>
    )
  }
}
```
{% endcode %}

{% code title="함수형 Component에서의 생명주기 " %}
```javascript
const Card = () => {
    const [name, setName] = useState("");
    
    useEffect(() => {
        axios.get(url)
          .then(res => setName(res.data.name))
    },[]);
    
    return (
        <div>
            이름: {name}
        </div>
    )
}
```
{% endcode %}



### <mark style="background-color:yellow;">useEffect로 표한한 3가지 Lifecycle Method</mark>

클래스형 Component에서 componentDidMount, componentDidUpdate, componentWillUnmount가 제공해주는 생명주기 기능을 **함수형 Component**에서는 **useEffect** Hook 하나로 구현할 수 있다.&#x20;

```javascript
useEffect(() => {
// 데이터 조회하기
// 자동로그인 판별

// 컴포넌트가 화면에 가장 처음 렌더링됐을 때에만 실행하고 싶을 때
},[]);

useEffect(() => {
	if(email && password) {
		setFlag(true);
		return;
	}
	setFlag(false);
// 특정 값이 업데이트될 때마다 실행하고 싶을 때
},[email, password]); // 옆의 배열을 useEffect의 dependency array라고 부름

useEffect(() => {
	return () => {
		// 컴포넌트가 사라지기 직전에 특정 코드를 실행하고 싶을 때
	};
},[]);
```



