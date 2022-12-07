import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Course() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState('');

  const dummy = [
    {
      id: 1,
      name: "리액트 강의",
    },
    {
      id: 2,
      name: "알고리즘 강의",
    },
    {
      id: 3,
      name: "백엔드 강의",
    },
  ];

  const onClickSearch = () => {
    navigate(`/result?s=${keyword}`);
  }

  return (
    <div>
      <h3>강의화면입니다.</h3>
      <div>
        <input 
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={onClickSearch}>확인</button>
      </div>
      {dummy.map((item, index) => (
        <div 
          onClick={() => navigate(`/courses/${item.id}`)} 
          key={item.id}>{item.name}
        </div>
      ))
      }


    </div>
  )
}
