import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

  const { register, formState: {errors}, handleSubmit } = useForm();

  const handleLogin = (data) =>{
    console.log(data);
  }

  return (
    <div className='max-w-sm mx-auto my-10'>
      <form onSubmit={handleSubmit(handleLogin)}>
        <h2 className='text-3xl font-bold mb-8'>Sign Up</h2>

        <div className="form-control w-full max-w-sm my-5">
          <p className='mb-2 text-sm'>Your Name</p>
          <input {...register('name', {required: 'Name is required'})} type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-sm rounded-lg" required/>
          {errors.name && <p className="text-red-500"><small>*{errors?.name?.message}</small></p>}
        </div>
        
        <div className="form-control w-full max-w-sm my-5">
          <p className='mb-2 text-sm'>Your Email</p>
          <input {...register('email', {required: 'Email is required'})} type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-sm rounded-lg" required/>
          {errors.email && <p className="text-red-500"><small>*{errors?.email?.message}</small></p>}
        </div>

        <div className="form-control w-full max-w-sm my-5">
          <p className='mb-2 text-sm'>Your Password</p>
          <input {...register('password', {required: 'Password is required'})} type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-sm rounded-lg" required/>
          {errors.password && <p className="text-red-500"><small>*{errors?.password?.message}</small></p>}
        </div>

        <div className="form-control w-full max-w-sm my-5">
          <p className='mb-2 text-sm'>Your Photo</p>
          <input {...register('photo', {required: 'Photo is required'})} type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full max-w-sm rounded-lg" required/>
          {errors.photo && <p className="text-red-500"><small>*{errors?.photo?.message}</small></p>}
        </div>

        <button className='bg-blue-500 hover:bg-blue-600 text-white mt-5 w-full font-semibold h-[45px] rounded-lg duration-300' type="submit">Sign Up</button>
        <p className='text-center mt-5'>Already have an account? <Link to='/login' className='text-blue-500 underline'>Log In</Link></p>
      </form>
    </div>
  );
};

export default SignUp;