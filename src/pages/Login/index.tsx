import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import userApi from '../../services/http/user';
import { toastOptions } from '../../utils/toastOptions';
import { CreateAccountButton, FormContainer, InputContainer, LoginContainer } from './style';

export function Login() {
  const navigate = useNavigate();
  async function handleSubmit(values: typeof initialValues) {
    toast.loading('Waiting...', { ...toastOptions, toastId: 'login' });
    const loginUser = await userApi.login(values);

    toast.dismiss('login');

    if (!loginUser.id) {
      return toast.error('Invalid email or password', { ...toastOptions, toastId: 'errorLogin' });
    }
    toast.dismiss('errorLogin');
    return navigate('/');
  }

  function handleRegister() {
    navigate('/register');
  }

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required().max(252, 'Invalid email')
  });

  const formikProps = useFormik({
    onSubmit: (values) => handleSubmit(values),
    initialValues,
    validationSchema
  });

  return (
    <LoginContainer>
      <FormContainer>
        <div className="title">
          <h3>LOGIN</h3>
        </div>
        <form onSubmit={formikProps.handleSubmit}>
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

          <button type="submit">Enter</button>
        </form>

        <CreateAccountButton onClick={handleRegister}>
          Don't have an account yet? Register
        </CreateAccountButton>
      </FormContainer>
    </LoginContainer>
  );
}
