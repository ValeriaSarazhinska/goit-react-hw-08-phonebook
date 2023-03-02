import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Rings
      height='180'
      width='180'
      color='orangered'
      radius='6'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
      ariaLabel='rings-loading'
      position= 'fixed'
      display='flex'
      align-items='center'
      justify-content='center'

    />
  );
};
export default Loader;
