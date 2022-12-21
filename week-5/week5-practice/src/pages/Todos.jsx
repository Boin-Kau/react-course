import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Todo = ({id, title}) => {
  return <li>{title}</li>;
}

export default function Todos() {

  const [todoData, setTodoData] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getTodos();
  },[])

  const getTodos = async () => {
    const result = await axios({
      method: "GET",
      url: "/todos"
    })
    console.log(result.data)

    setTodoData(result.data);
  }

  const onClickAddTodo = async () => {
    if(!keyword) {
      alert("Todo를 입력해주세요");
      return;
    }

    const result = await axios({
      method: "POST",
      url: "/todos",
      data: {
        id: 3, 
        title: keyword
      }
    })
    if (result.status === 200) {
      await getTodos();
    }
  }

  return (
    <LoginWrapper>
      <LeftWrapper>
        <div>
          <ul>
            {todoData.map((data) => (
              <Todo key={data.id} title={data.title}/>
            ))}

          </ul>

        </div>
        <div>
          <input type='text' value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
          <button onClick={onClickAddTodo}>추가</button>
        </div>
      </LeftWrapper>
      <RightWrapper>
        b

      </RightWrapper>
    </LoginWrapper>
  )
}


const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
`

const LeftWrapper = styled.div`
  flex: 1;
  border: 1px solid red;
`

const RightWrapper = styled.div`
  flex: 1;
  border: 1px solid blue;
`;