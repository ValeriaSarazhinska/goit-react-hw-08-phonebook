import { NavLink } from 'react-router-dom';
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';

const Link = styled(NavLink)(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  padding: '12px',
  fontWeight: '700',
  color: 'midnightblue',
  '&.active': {
    color: 'darkorange',
  },
}));

export const AuthNav = () => {
  return (
    <Box>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Box>
  );
};
