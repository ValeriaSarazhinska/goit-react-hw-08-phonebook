import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Notify } from 'notiflix';
import { getError, getIsLoading } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';

export default function Login() {

  const error = useSelector(getError);

  useEffect(()=>{
    if (error) return Notify.failure(`${error}`);
  },[error])

  const loading = useSelector(getIsLoading);

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {loading? <Loader/> : <LoginForm />}
    </div>
  );
}
