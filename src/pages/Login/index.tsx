import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { login } from '../../services/http/user';
import { InputContainer, LoginContainer } from './style';

export function Login() {
  const navigate = useNavigate();
  async function handleSubmit(user: typeof initialValues) {
    const loginUser = await login(user);

    if (!loginUser.id) {
      return console.log('invalid');
    }
    return navigate('/home');
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
    </LoginContainer>
  );
}
