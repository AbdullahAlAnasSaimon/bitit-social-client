import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
  const {googleSignIn, setUser, userLogIn} = useContext(AuthContext);
  const { register, formState: {errors}, handleSubmit } = useForm();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = (data) =>{
    userLogIn(data?.email, data?.password)
    .then(result => {
      const user = result.user;
      setUser(user);
      toast.success('Log In Successfully');
    })
    .catch(err => toast.error(err.message))
  }

  const handleGoogleSignIn = () =>{
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
        toast.success('Log In Successfull');
      })
      .catch(err => toast.error(err.message));
  }

  return (
    <div className='max-w-sm mx-auto my-10'>
      <form onSubmit={handleSubmit(handleLogin)}>
        <h2 className='text-3xl font-bold mb-8'>Log In</h2>
        <div className="form-control w-full max-w-sm my-5">
          <p className='mb-2 text-sm'>Your Email</p>
          <input {...register('email', {required: 'Email is required'})} type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-sm rounded-lg focus:outline-none focus:border focus:border-blue-500" />
          {errors.email && <p className="text-red-500"><small>*{errors?.email?.message}</small></p>}
        </div>
        <div className="form-control w-full max-w-sm my-5">
          <p className='mb-2 text-sm'>Your Password</p>
          <input {...register('password', {required: 'Password is required'})} type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-sm rounded-lg focus:outline-none focus:border focus:border-blue-500" />
          {errors.password && <p className="text-red-500"><small>*{errors?.password?.message}</small></p>}
        </div>
        <div>
        <p className='text-sm'>Forget Password</p>
        </div>
        <button className='bg-blue-500 hover:bg-blue-600 text-white mt-5 w-full font-semibold h-[45px] rounded-lg duration-300' type="submit">Log In</button>
      </form>
        <p className='text-center mt-5'>New to Bitit? <Link to='/signup' className='text-blue-500 underline'>Create an account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className='bg-white hover:bg-gray-200 text-blue-500 mt-3 w-full font-semibold h-[45px] rounded-lg duration-300' type="submit">Continue With Google</button>
        
    </div>
  );
};

export default Login;