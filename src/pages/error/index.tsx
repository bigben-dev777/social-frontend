import { Box, Stack, Typography } from '@mui/material';

import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorBoundary() {
  return (
    <Box>
      <Stack alignItems='center' spacing={3} my={10}>
        <Typography variant='h1'>🔐 401 Unauthorized</Typography>
        <Typography variant='h3' color='error'>
          You need to be logged in to access this page.
        </Typography>
        <Typography variant='body1' color='info'>
          Please sign in with your account credentials.
          <Link to='/login'>Click here</Link>
        </Typography>
      </Stack>
    </Box>
  );
}
