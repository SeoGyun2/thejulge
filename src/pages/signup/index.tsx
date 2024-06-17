import Link from 'next/link';
import { SignupForm } from '@/widgets/signup/ui/signupForm/SignupForm';
import { Logo, PageLayout } from '@/components/auth';

import * as S from '@/styles/signup.styled';

const index = () => (
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

export default index;
