import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { cartNumState } from "./recoil/cart";

function App() {

  return (
    <ParentWrapper>
      <Child1 />
      <Child2/>
    </ParentWrapper>
  );
}

export default App;

const Child1 = () => {

  const [num, setNum] = useRecoilState(cartNumState);

  const [name, setName] = useState('');

  return (
    <Wrapper>
      <h1>Child1</h1>
      <div>
        <button onClick={() => setNum(num - 1)}>-</button>
        <span>{num}</span>
        <button onClick={() => setNum(num + 1)}>+</button>
      </div>
    </Wrapper>
  );
}

const Child2 = () => {

  const num = useRecoilValue(cartNumState);
  const setNum = useSetRecoilState(cartNumState);

  return (
    <Wrapper>
      <h1>Child2</h1>
      <div>
        <span>{num}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid red;
  background-color: white;
`

const ParentWrapper = styled(Wrapper)`
  background-color: yellow;
  padding: 16px
`;

