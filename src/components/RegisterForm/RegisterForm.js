import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styled from '@mui/material/styles/styled';

const Form = styled('form')({
  width: '320px',
});

const Label = styled('label')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
});

const Button = styled('button')({
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
const Input = styled('input')({
  marginTop: '5px',
  backgroundColor: 'ghostwhite',
  border: '1px solid darkblue',
  fontSize: '14px',
  height: '20px',
  lineHeight: '1.14',
  borderRadius: '5px',
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete='off'>
      <Label>
        Username
        <Input type='text' name='name' />
      </Label>
      <Label>
        Email
        <Input type='email' name='email' />
      </Label>
      <Label>
        Password
        <Input type='password' name='password' />
      </Label>
      <Button type='submit'>Register</Button>
    </Form>
  );
};
