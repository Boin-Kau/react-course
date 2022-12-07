import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [pw, setPw] = useState('');
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if(nickname && pw) {
      setFlag(true);
      return;
    }
    setFlag(false);

  },[nickname, pw])

  const onClickRegister = () => {
    if(!nickname) {
      alert('닉네임을 입력해주세요.');
      return;
    }

    if (!pw) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    navigate("/", { state: nickname });
  }

  return (
    <div>
      <h3>회원가입</h3>
      <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      <input value={pw} onChange={(e) => setPw(e.target.value)} />
      <button onClick={onClickRegister} style={{color: flag ? 'blue' : 'gray'}}>가입</button>
    </div>
  );
}
