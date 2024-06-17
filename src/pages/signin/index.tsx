import Link from 'next/link';
import { SigninForm } from '@/widgets/signin';
import { Logo, PageLayout } from '@/components/auth';

import * as S from '@/styles/signin.styled';

const index = () => (
  <PageLayout>
    <Logo />
    <SigninForm />
    <S.SigninLink>
      회원이 아니신가요?&nbsp;&nbsp;
      <Link href="/signup">
        <span>
          회원가입하기
        </span>
      </Link>
    </S.SigninLink>
  </PageLayout>
);

export default index;
