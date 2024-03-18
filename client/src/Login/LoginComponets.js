import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import HandleapiLogin from './HandleLogin';

const LoginComponent = () => {
  const { handleSubmit } = useForm();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loginSuccess, setLoginSuccess] = useState(false);

  const mutation = useMutation(HandleapiLogin, {
    onSuccess: () => {
      setLoginSuccess(true);
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = () => {
    mutation.mutate(formData);
  };

  return (
    <div className="max-w-sm mx-auto flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      {loginSuccess ? (
        <p className="text-green-500 mb-4">Login Successful!</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginComponent;
