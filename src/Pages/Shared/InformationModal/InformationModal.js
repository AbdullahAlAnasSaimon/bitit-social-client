import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const InformationModal = () => {
  const { user, updateUserInfo, updateUserEmail } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const handleUserInfoEdit = (data) => {
    updateUserInfo({ displayName: data?.displayName })
      .then(() => { })
      .catch(err => toast.error(err.message))
    
    updateUserEmail(data?.email)
      .then(() => { })
      .catch(err => toast.error(err.message));
  }

  return (
    <div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="information-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          {/* <label htmlFor="information-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
          <form onSubmit={handleSubmit(handleUserInfoEdit)}>
            <div>
              <p className='my-2 text-sm'>Your Name</p>
              <input {...register("displayName")} name="displayName" type="text" className="w-full input input-bordered" />
            </div>
            <div>
              <p className='my-2 text-sm'>Your Email</p>
              <input {...register("email")} name="email" type="email" className="w-full input input-bordered" />
            </div>
            <div className='mt-5'>
              <button type="submit" className="px-5 py-1 rounded-full bg-blue-600 hover:bg-blue-700 duration-300 cursor-pointer mr-2">Save</button>
              <label htmlFor="information-modal" className="px-5 py-1 rounded-full bg-zinc-600 hover:bg-zinc-700 duration-300 cursor-pointer">Close</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InformationModal;