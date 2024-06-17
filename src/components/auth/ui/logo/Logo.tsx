import Image from 'next/image';
import * as S from './Logo.styled';
import logo from '../../../../../public/logo.svg';

export function Logo() {
  return (
    <S.Logo>
      <Image src={logo} alt="logo" />
    </S.Logo>
  );
}
