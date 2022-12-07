import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

  const navigate = useNavigate();

  const onClickButton = () => {
    // 여러 로직 처리

    navigate('/');
  }

  return (
    <div>
      <h3>입력한 경로에 해당하는 페이지가 없습니다.</h3>
      <button onClick={onClickButton}>홈 화면으로 이동하기</button>
    </div>
  )
}
