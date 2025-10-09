import { logIn } from '@/services';
import { dispatch, signIn } from '@/store';
import { IUserInput } from '@/types';
import { errorToast, successToast } from '@/util/toast';
import { Button, Container, Paper, Stack, styled, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

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

const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

export default function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async values => {
      try {
        const newUser: IUserInput = {
          email: values.email,
          password: values.password
        };
        const { user, token } = await logIn(newUser);
        dispatch(signIn({ user, token }));
        successToast(`${user.name}! Login Successful`);
        navigate('/profile');
      } catch (error) {
        errorToast(`${error}`);
      }
    }
  });

  return (
    <Container>
      <DialogContainer>
        <DemoPaper elevation={3}>
          <Stack gap={2} onSubmit={formik.handleSubmit} component='form'>
            <Typography variant='h4' color='primary'>
              Login
            </Typography>

            <TextField
              name='email'
              color='primary'
              variant='outlined'
              placeholder='Email'
              type='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              name='password'
              color='primary'
              variant='outlined'
              placeholder='Password'
              type='password'
              autoComplete='current-password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button color='primary' variant='contained' size='large' type='submit'>
              Login
            </Button>
          </Stack>
        </DemoPaper>
      </DialogContainer>
    </Container>
  );
}
