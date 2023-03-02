import { useAuth } from '../../hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import styled from '@mui/material/styles/styled';

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

const Username = styled('p')({
  fontWeight: 700,
  color:'black'
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

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
