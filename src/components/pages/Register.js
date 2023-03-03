import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from '../../redux/auth/selectors';
import { useEffect } from 'react';
import { Notify } from 'notiflix';
import Loader from '../Loader/Loader';

export default function Register() {

  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(()=>{
    if (error) return Notify.failure(`${error}`);
  },[error])



  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      {loading? <Loader/>: <RegisterForm />}
    </div>
  );
}
