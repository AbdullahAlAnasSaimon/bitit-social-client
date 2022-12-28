import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className='max-w-xs mx-auto my-10'>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <h2 className='text-3xl font-bold'>Log In</h2>
        <div className="form-control w-full max-w-xs my-5">
          <p className='mb-2 text-sm'>Your Email</p>
          <input {...register('email', {required: {message: 'Email is required'}})} type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs rounded-lg" />
        </div>
        <div className="form-control w-full max-w-xl my-5">
          <p className='mb-2 text-sm'>Your Password</p>
          <input {...register('password', {required: {message: 'Password is required'}})} type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs rounded-lg" />
        </div>
        <div>
        <p className='text-sm'>Forget Password</p>
        </div>
        <button className='bg-blue-500 hover:bg-blue-600 text-white mt-5 w-full font-semibold h-[45px] rounded-lg duration-300' type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;