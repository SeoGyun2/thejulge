import { SignupForm } from '@/widgets/signup';
import { Logo } from '@/components/auth';
import { PageLayout } from '@/components/auth';
import * as S from './index.styled';
import Link from 'next/link';


const index = () => {
  return (
    <PageLayout>
      <Logo />
      <SignupForm />
      <S.SignupLink>
        이미 회원이신가요?&nbsp;&nbsp;
        <Link href="/signin">
        <span>
          <span>로그인하기</span>
        </span>
        </Link>
      </S.SignupLink>
    </PageLayout>
  );
};

export default index;
