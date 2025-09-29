import { PAGESLOGIN, PAGESLOGOUT } from '@/constants';
import useLogin from '@/hooks/useLogin';
import { dispatch, signOut } from '@/store';
import { Box, Container, Stack, styled, Link } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = styled(Stack)({
  padding: '1.5rem 0.75rem',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export default function Header() {
  const navigate = useNavigate();
  const isLogin = useLogin();

  const pages = isLogin ? PAGESLOGIN : PAGESLOGOUT;

  const handleNavLinkClick = (endpoint: string) => {
    navigate(endpoint);
  };

  const handleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <Box
      component='header'
      sx={{
        backgroundColor: '#141414'
      }}
    >
      <Container>
        <Navbar>
          {pages.map(page => (
            <Link
              color='textSecondary'
              variant='h5'
              key={'headerKey' + page.caption}
              onClick={() => {
                handleNavLinkClick(page.url);
              }}
            >
              {page.caption}
            </Link>
          ))}
          {isLogin && (
            <RouteLink
              onClick={handleLogOut}
              to='/login'
              style={{
                textDecoration: 'none'
              }}
            >
              <Link component='span' variant='h5' color='textSecondary'>
                Logout
              </Link>
            </RouteLink>
          )}
        </Navbar>
      </Container>
    </Box>
  );
}
