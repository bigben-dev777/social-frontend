import { signUp } from '@/services';
import { User } from '@/types';
import { errorToast, successToast } from '@/util/toast';
import { Button, Container, Paper, Stack, styled, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '400px',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center'
}));

const DialogContainer = styled(Stack)({
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh'
});

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpUser = async () => {
    try {
      const newUser: Omit<User, '_id'> = {
        username,
        email,
        password
      };

      await signUp(newUser);
      successToast(`Success create user.${username}`);
    } catch (error) {
      errorToast(`${error}`);
    }
  };

  return (
    <Container>
      <DialogContainer>
        <DemoPaper elevation={3}>
          <Stack gap={2}>
            <Typography variant='h4' color='primary'>
              Register
            </Typography>
            <TextField
              color='primary'
              variant='outlined'
              placeholder='username'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              color='primary'
              variant='outlined'
              placeholder='email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              color='primary'
              variant='outlined'
              placeholder='password'
              type='password'
              autoComplete='current-password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button color='primary' variant='contained' size='large' onClick={() => handleSignUpUser()}>
              Register
            </Button>
          </Stack>
        </DemoPaper>
      </DialogContainer>
    </Container>
  );
}
