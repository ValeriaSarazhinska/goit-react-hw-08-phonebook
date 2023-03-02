import { useAuth } from '../../hooks';
import styled from '@mui/material/styles/styled';

const Link = styled('NavLink')({
  display: 'inline-block',
  textDecoration: 'none',
  padding: '12px',
  fontWeight: 700,
  color: 'midnightblue',
});
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn && (
        <Link to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
};
