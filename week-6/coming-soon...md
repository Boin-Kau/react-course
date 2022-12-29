---
description: Recoil selector, suspense 등 비동기 처리와 관련된 개념들을 알아봅시다.
---

# Recoil 비동기 처리

[Recoil Selectors 공식문서](https://recoiljs.org/ko/docs/basic-tutorial/selectors/)

[사용할 API](https://jsonplaceholder.typicode.com/)

**recoil/todo.js**

```javascript
import axios from "axios";
import { atom, selector } from "recoil";

export const todoIdState = atom({
  key: "todoIdState",
  default: 1
});

export const todoItemQuery = selector({
  key: "todoItemQuery",
  get: async ({get}) => {
    const id = get(todoIdState)
    
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      return response;
    } catch (err) {
      throw err;
    }
  }
})
```

**index.js**

```javascript
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(
  document.getElementById('root') 
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div>Loading</div>}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
```

**App.js**

```javascript
function App() {
  const data = useRecoilValue(todoItemQuery);

  return (
    <div>
      {data.title}
    </div>
  );
}

export default App;
```
