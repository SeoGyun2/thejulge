import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './Header.styled';
import logo from '../../../../public/logo.svg';
import Search from './Search/Search';

function Header() {
  const [test, setTest] = useState('asd');
  const [testAlarm, setTestAlarm] = useState('');

  return (
    <S.Header>
      <S.HeaderContainer>
        <Image height={20} src={logo} alt="" className="logo" />
        <Search placeholder="가게 이름으로 찾아보세요." />
        <S.AuthContainer>
          <>
            <li>
              <a href="">로그인</a>
            </li>
            <li>
              <a href="">회원가입</a>
            </li>
            <li />
          </>
        </S.AuthContainer>
      </S.HeaderContainer>
    </S.Header>
  );
}

export default Header;
