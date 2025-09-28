import { logIn } from '@/services';
import { Button, Container, Paper, Stack, styled, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { LoginUserInfo } from '@/types';
import { dispatch, signIn } from '@/store';
import { errorToast, successToast } from '@/util/toast';
import { useNavigate } from 'react-router-dom';

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

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginUser = async () => {
    try {
      const newUser: LoginUserInfo = {
        email,
        password
      };
      const { user, token } = await logIn(newUser);

      dispatch(signIn({ user, token }));
      successToast(`${user.username}!, Login Successed`);
      navigate('/profile');
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
              Login
            </Typography>
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
            <Button color='primary' variant='contained' size='large' onClick={() => handleLoginUser()}>
              Login
            </Button>
          </Stack>
        </DemoPaper>
      </DialogContainer>
    </Container>
  );
}
