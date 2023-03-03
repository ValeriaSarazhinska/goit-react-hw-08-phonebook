import { useAuth } from '../../hooks';
import styled from '@mui/material/styles/styled';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)({
  display: 'inline-block',
  textDecoration: 'none',
  padding: '12px',
  fontWeight: 700,
  color: 'midnightblue',
  '&.active': {
    color: 'darkorange',
  },
});

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};
