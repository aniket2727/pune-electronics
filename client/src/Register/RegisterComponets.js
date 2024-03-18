import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import HandleapiRegister from './HandleapiRegister';

const RegisterComponent = () => {
  const { handleSubmit } = useForm();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const mutation = useMutation(HandleapiRegister, {
    onSuccess: () => {
      setRegistrationSuccess(true);
    },
    onError: (error) => {
      console.error('Registration failed:', error);
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
      <h1 className="text-2xl font-semibold mb-4">Register</h1>
      {registrationSuccess ? (
        <p className="text-green-500 mb-4">Registration Successful!</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
          />
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
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default RegisterComponent;
