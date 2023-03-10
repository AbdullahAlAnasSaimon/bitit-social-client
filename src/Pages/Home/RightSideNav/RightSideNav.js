import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const RightSideNav = () => {
  const { googleSignIn, setUser, user } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        saveUserToDb(user?.displayName, user?.email, user?.photoURL);
        toast.success('Log In Successfull');
        navigate('/');
      })
      .catch(err => {
        toast.error(err.message);
      });
  }

  const saveUserToDb = (name, email, photo) => {
    const userInfo = {
      name,
      email,
      photo,
      address: '',
      university: ''
    };
    fetch('https://bitit-server.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(() => { })
  }

  return (
    <>
      {
        user ? <p></p> : <div className='w-11/12 border border-zinc-700 p-3 rounded-lg hidden lg:block'>
          <h2 className='text-xl font-bold mb-5 text-white'>New to Bitit?</h2>
          <button onClick={handleGoogleSignIn} className='bg-white hover:bg-gray-200 text-zinc-700 w-full font-semibold text-sm h-[40px] rounded-full mb-3 duration-300' type="submit">Continue With Google</button>
          <Link to='/signup'><button className='bg-white hover:bg-gray-200 text-zinc-700 w-full font-semibold text-sm h-[40px] rounded-full duration-300' type="submit">Sign Up with Email And Password</button></Link>
        </div>
      }
    </>
  );
};

export default RightSideNav;