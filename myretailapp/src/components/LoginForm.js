import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css'; 

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === data.email && u.password === data.password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Log In</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
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
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;