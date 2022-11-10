import './Signup.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { User } from '../../Models/User';
import { signupUser } from '../../Api/UserManagement.Api';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userName: string;
  postalCode: string;
};

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await signupUser({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      userName: data.userName,
      password: data.password,
      postalCode: data.postalCode,
    } as User);
  };

  return (
    <div className='blue-container'>
      <div className='signup-form pt-5'>
        <form method='POST' onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account!</p>
          <hr />
          <div className='form-group'>
            <div className='row'>
              <div className='col'>
                <input
                  className='form-control'
                  placeholder='First Name'
                  {...register('firstName', {
                    required: 'FName is required',
                  })}
                />
                <div className='text-danger'>{errors?.firstName?.message}</div>
              </div>
              <div className='col'>
                <input
                  className='form-control'
                  placeholder='Last Name'
                  {...register('lastName', {
                    required: 'LName is required',
                  })}
                />
                <div className='text-danger'>{errors?.lastName?.message}</div>
              </div>
            </div>
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Username'
              {...register('userName', {
                required: 'User Name is required',
              })}
            />
            <div className='text-danger'>{errors?.userName?.message}</div>
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              {...register('email', {
                required: 'Email is required',
              })}
            />
            <div className='text-danger'>{errors?.email?.message}</div>
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              placeholder='Password'
              {...register('password', {
                required: 'Password is required',
              })}
            />
            <div className='text-danger'>{errors?.password?.message}</div>
          </div>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Postal Code'
              {...register('postalCode', {
                required: 'PostalCode is required',
              })}
            />
            <div className='text-danger'>{errors?.postalCode?.message}</div>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary btn-lg'>
              Sign Up
            </button>
          </div>
        </form>
        <div className='hint-text'>
          Already have an account? <a href='#'>Login here</a>
        </div>
      </div>
    </div>
  );
};
