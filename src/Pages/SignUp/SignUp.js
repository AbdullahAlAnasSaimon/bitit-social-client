import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
  const { userSignUp, updateUserInfo, logOut } = useContext(AuthContext);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    setProcessing(true);
    userSignUp(data?.email, data?.password)
    .then(result =>{
      toast.success('Account Created Successfully');
      setProcessing(false);
      logOut();
      navigate('/login');
      const userProfile = {
        displayName: data?.name,
        photoURL: data?.photo
      }
      updateUserInfo(userProfile)
      .then(() => {})
      .catch(err => toast.error(err.message));
    })
    .catch(err => {
      toast.error(err.message);
      setProcessing(false);
    });
  }

  return (
    <div className='max-w-sm mx-auto my-10'>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <h2 className='text-3xl font-bold mb-8'>Sign Up</h2>

        <div className="form-control w-full max-w-sm my-5">
          <p className='mb-2 text-sm'>Your Name</p>
          <input {...register('name', { required: 'Name is required' })} type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-sm rounded-lg focus:outline-none focus:border focus:border-blue-500" />
          {errors.name && <p className="text-red-500"><small>*{errors?.name?.message}</small></p>}
        </div>

        <div className="form-control w-full max-w-sm my-5">
          <p className='mb-2 text-sm'>Your Email</p>
          <input {...register('email', { required: 'Email is required' })} type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-sm rounded-lg focus:outline-none focus:border focus:border-blue-500" />
          {errors.email && <p className="text-red-500"><small>*{errors?.email?.message}</small></p>}
        </div>

        <div className="form-control w-full max-w-sm my-5">
          <p className='mb-2 text-sm'>Your Password</p>
          <input {...register('password', { required: 'Password is required', pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password should contain 1 Uppercase, 1 number, 1 special character' }, minLength: { value: 6, message: 'Password must be 6 character or longer' } })} type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-sm rounded-lg focus:outline-none focus:border focus:border-blue-500" />
          {errors.password && <p className="text-red-500"><small>*{errors?.password?.message}</small></p>}
        </div>

        <div className="form-control w-full max-w-sm my-5">
          <p className='mb-2 text-sm'>Your Photo</p>
          <input {...register('photo', { required: 'Photo is required' })} type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full max-w-sm rounded-lg focus:outline-none focus:border focus:border-blue-500" />
          {errors.photo && <p className="text-red-500"><small>*{errors?.photo?.message}</small></p>}
        </div>

        <button className='bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white mt-5 w-full font-semibold h-[45px] rounded-lg duration-300' type="submit" disabled={processing}>{processing ? <>
          <div className="text-center">
            <div role="status">
              <svg className="inline mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-900 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </> : 'Sign Up'}</button>
        <p className='text-center mt-5'>Already have an account? <Link to='/login' className='text-blue-500 underline'>Log In</Link></p>
      </form>
    </div>
  );
};

export default SignUp;