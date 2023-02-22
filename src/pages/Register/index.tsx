import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import userApi from '../../services/http/user';
import { toastOptions } from '../../utils/toastOptions';
import { CreateAccountButton, FormContainer, InputContainer, RegisterContainer } from './style';

export function Register() {
  const navigate = useNavigate();

  async function handleSubmit(values: typeof initialValues) {
    toast.loading('Waiting...', { ...toastOptions, toastId: 'register' });
    const register = await userApi.register(values);

    toast.dismiss('register');

    if (register.message === 'Account with this email already exists') {
      return toast.error('Email already exists', {
        ...toastOptions,
        toastId: 'errorRegister'
      });
    } else if (register.status !== 201) {
      return toast.error('Error', {
        ...toastOptions,
        toastId: 'errorRegister'
      });
    }
    toast.dismiss('errorRegister');
    toast.success('User Registered', { ...toastOptions, toastId: 'userRegistered' });
    return navigate('/login');
  }

  function handleLogin() {
    navigate('/login');
  }

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First name required')
      .min(5, 'Invalid fist name')
      .max(22, 'Invalid first name'),
    lastName: Yup.string()
      .required('Last name required')
      .min(5, 'Invalid last name')
      .max(22, 'Invalid last name'),
    email: Yup.string().email('Invalid email').required('Email required').max(122, 'Invalid email'),
    password: Yup.string()
      .required('Password required')
      .min(8, 'Invalid password')
      .max(32, 'Invalid password'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const formikProps = useFormik({
    onSubmit: (values) => handleSubmit(values),
    initialValues,
    validationSchema
  });

  return (
    <RegisterContainer>
      <FormContainer>
        <div className="title">
          <h3>REGISTER</h3>
        </div>
        <form onSubmit={formikProps.handleSubmit}>
          <InputContainer>
            <span>First Name</span>
            <input
              type="text"
              value={formikProps.values.firstName}
              name="firstName"
              onChange={formikProps.handleChange}
            />
          </InputContainer>
          <InputContainer>
            <span>Last Name</span>
            <input
              type="text"
              value={formikProps.values.lastName}
              name="lastName"
              onChange={formikProps.handleChange}
            />
          </InputContainer>
          <InputContainer>
            <span>Email</span>
            <input
              type="text"
              value={formikProps.values.email}
              name="email"
              onChange={formikProps.handleChange}
            />
          </InputContainer>
          <InputContainer>
            <span>Password</span>
            <input
              type="password"
              value={formikProps.values.password}
              name="password"
              onChange={formikProps.handleChange}
            />
          </InputContainer>
          <InputContainer>
            <span>Confirm Password</span>
            <input
              type="password"
              value={formikProps.values.confirmPassword}
              name="confirmPassword"
              onChange={formikProps.handleChange}
            />
          </InputContainer>
          <button type="submit">Enter</button>
        </form>

        <CreateAccountButton onClick={handleLogin}>
          Don't have an account yet? Register
        </CreateAccountButton>
      </FormContainer>
    </RegisterContainer>
  );
}
