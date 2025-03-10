import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css'; 

const schema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = data => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === data.email);

    if (existingUser) {
      alert('Email already registered.');
      return;
    }

    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register('username')} />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register('password')} />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" {...register('confirmPassword')} />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;