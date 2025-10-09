import { signUp } from '@/services';
import { IUser } from '@/types';
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

const registerSchema = Yup.object({
  username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

export default function Register() {
  const navigate = useNavigate();
  // ✅ Formik setup
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: registerSchema,
    onSubmit: async values => {
      try {
        const newUser: Omit<IUser, '_id'> = {
          name: values.username,
          email: values.email,
          password: values.password
        };

        await signUp(newUser);
        successToast(`✅ Successfully created user: ${values.username}`);
        navigate('/login');
      } catch (error) {
        errorToast(`${error}`);
      }
    }
  });

  return (
    <Container>
      <DialogContainer>
        <DemoPaper elevation={3}>
          {/* ✅ Attach Formik’s submit handler */}
          <Stack gap={2} component='form' onSubmit={formik.handleSubmit}>
            <Typography variant='h4' color='primary'>
              Register
            </Typography>

            {/* Username */}
            <TextField
              name='username'
              variant='outlined'
              placeholder='username'
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />

            {/* Email */}
            <TextField
              name='email'
              variant='outlined'
              type='email'
              placeholder='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            {/* Password */}
            <TextField
              name='password'
              variant='outlined'
              type='password'
              placeholder='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            {/* Submit Button */}
            <Button color='primary' variant='contained' size='large' type='submit'>
              Register
            </Button>
          </Stack>
        </DemoPaper>
      </DialogContainer>
    </Container>
  );
}
