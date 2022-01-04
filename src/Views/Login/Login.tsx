import axios from 'axios';
import { FormEvent, ReactElement, useState } from 'react';
import './Login.css';
import { TOKEN } from '../../Constants';
import { useNavigate } from 'react-router-dom';

export default function Login(): ReactElement {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await axios.post('https://localhost:44328/api/token', {
      email: email,
      password: password,
    });
    if (result && result.data) {
      localStorage.setItem(TOKEN, result.data.token);
      console.dir(result.data.token);
      navigate('/');
    }
  };

  return (
    <div className='blue-container'>
      <div className='signup-form pt-5'>
        <form action='/' method='post' onSubmit={loginUser}>
          <h2>Login</h2>
          <p>Enter your email and password to login</p>
          <hr />
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary btn-lg'>
              Login
            </button>
          </div>
        </form>
        <div className='hint-text'>Need an account? Sign up here</div>
      </div>
    </div>
  );
}
