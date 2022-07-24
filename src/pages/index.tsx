import { useState } from 'react';
import type { NextPage } from 'next';
import SampleModal from '@/components/modals/SampleModal';
import { useToast } from '@/components/common/toast';
import { useAlert } from '@/components/common/alert';

const Home: NextPage = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const { addToast } = useToast();
  const alert = useAlert();

  const onClickAlert = () => {
    alert({
      title: 'Successfully Purchased Cloud Server ECS!',
      content:
        'Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.',
      confirmAction: () => console.log('confirm click'),
      showOverlay: true,
      showCancel: true,
    });
  };

  return (
    <>
      <div>
        main
        <button type='button' onClick={() => setIsShow(true)}>
          모달열기 예제
        </button>
        <button type='button' onClick={() => addToast({ message: 'test message' })}>
          토스트 메세지
        </button>
        <button type='button' onClick={onClickAlert}>
          얼럿
        </button>
      </div>
      <SampleModal isShow={isShow} onClose={() => setIsShow(false)} />
    </>
  );
};

export default Home;
