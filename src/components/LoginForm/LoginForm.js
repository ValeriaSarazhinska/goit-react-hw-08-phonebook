import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import styled from '@mui/material/styles/styled';

export const Form = styled('form')({
  display: 'inline-block',
  textDecoration: 'none',
  padding: '12px',
  fontWeight: 500,
  color: 'black',
});

export const Label = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 16,
  width: '320px',
  color: 'midnightblue'
});

export const Button = styled('button')({
  backgroundColor: 'midnightblue',
  border: 'none',
  color: '#fff',
  borderRadius: '5px',
  cursor: 'pointer',
  flexDirection: 'column',
  fontSize: '15px',
  fontWeight: 500,
  marginRight: '15px',
  padding: '5px 7px',
  textAlign: 'center',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: 'darkblue',
  },
});
export const Input = styled('input')({
  marginTop: '5px',
  backgroundColor: 'ghostwhite',
  border: '1px solid darkblue',
  fontSize: '14px',
  height: '20px',
  lineHeight: 1.14,
  borderRadius: '5px',
});


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete='off'>
      <Label>
        Email
        <Input type='email' name='email' required />
      </Label>
      <Label>
        Password
        <Input type='password' name='password' minLength={7} maxLength={20} required/>
      </Label>
      <Button type='submit'>Log In</Button>
    </Form>
  );
};
