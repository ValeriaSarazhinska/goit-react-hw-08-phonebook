import styled from '@mui/material/styles/styled';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)({
  display: 'inline-block',
  textDecoration: 'none',
  padding: '12px',
  fontWeight: '700',
  color: 'midnightblue',
  '&.active': {
    color: 'darkorange',
  },
});

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};
