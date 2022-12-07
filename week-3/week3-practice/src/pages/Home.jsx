import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Home() {

  const { state } = useLocation();
  

  return (
    <div>
      <h3>홈화면입니다.</h3>
      <div>안녕하세요 {state}님</div>
    </div>
  )
}
