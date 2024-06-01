import CustomButton from '@/shared/components/Button/CustomButton/CustomButton';
import GrayButton from '@/shared/components/Button/GrayButton/GrayButton';
import RedButton from '@/shared/components/Button/RedButton/RedButton';
import Modal from '@/shared/components/Modal/Modal';
import { useModal } from '@/shared/store/useModal';
import testImg from '@/assets/caution.svg';
import Image from 'next/image';
import Toast from '@/shared/components/Toast/Toast';
import { useToast } from '@/shared/store/useToast';
import Table from '@/shared/components/Table/Table';
import Input from '@/shared/components/Input/Input';

const index = () => {
  const { setIsOpen } = useModal();
  const { isToast, setOpenToast } = useToast();

  return (
    <>
      <RedButton
        text="로그인 하기"
        onClick={() => {
          console.log('login');
        }}
      />
      <hr />
      <GrayButton text="신청 불가" onClick={() => console.log('fail')} />
      <hr />
      <CustomButton
        text="여기에 text를 넣어주세요"
        color="#EA3C12"
        onClick={() => console.log('text')}
      />
      <hr />
      <button onClick={setIsOpen} style={{ background: 'red' }}>
        클릭하면 모달이 나타납니다
      </button>
      <Modal
        modalHeader={
          <>
            <Image src={testImg} alt="경고 표시" />
            <p>신청을 거절하시겠어요?</p>
          </>
        }
        modalFooter={
          <>
            <div style={{ width: '80px' }}>
              <CustomButton
                onClick={() => console.log('아니오')}
                text="아니오"
                color="#EA3C12"
              />
            </div>
            <div style={{ width: '80px' }}>
              <RedButton onClick={() => console.log('예')} text="예" />
            </div>
          </>
        }
      />
      <hr />
      <button onClick={setOpenToast} style={{ background: 'pink' }}>
        누르면 토스트가 나타납니다
      </button>
      {isToast && <Toast text="삭제 되었습니다." />}
      <Table />
      <hr />
      <Input label={'이메일'} type={'email'} />
      <hr />
      <Input label={'비밀번호'} type={'password'} />
      <hr />
      <Input label={'시급*'} type={'hourlyWage'} />
      <hr />
    </>
  );
};

export default index;
