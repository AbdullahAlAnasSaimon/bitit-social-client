import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const InformationModal = ({setModalStatus}) => {
  const { user, updateUserInfo, updateUserEmail } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [processing, setprocessing] = useState(false);

  let storeUserEmail = JSON.stringify(user?.email);

  const handleUserInfoEdit = (data) => {
    setprocessing(true);
    updateUserInfo({ displayName: data?.displayName })
      .then(() => { })
      .catch(err => {
        toast.error(err.message);
        setprocessing(false);
        setModalStatus(false);
      })


    fetch(`http://localhost:5000/users?email=${storeUserEmail}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })

    updateUserEmail(data?.email)
      .then(() => {
        setprocessing(false)
        setModalStatus(false);
        toast.success('Information Updated');
      })
      .catch(err => {
        toast.error(err.message);
        setprocessing(false);
        setModalStatus(false);
      });

  }

  return (
    <div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="information-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          {/* <label htmlFor="information-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
          <form onSubmit={handleSubmit(handleUserInfoEdit)}>
            <div className='my-5'>
              <p className='my-2 text-sm'>Your Name</p>
              <input {...register("displayName", {required: true})} name="displayName" type="text" className="w-full input input-bordered rounded-lg bg-zinc-900 focus:outline-none focus:border focus:border-blue-500" />
            </div>
            <div className='my-5'>
              <p className='my-2 text-sm'>Your Email</p>
              <input {...register("email", {required: true})} name="email" type="email" className="w-full input input-bordered rounded-lg bg-zinc-900 focus:outline-none focus:border focus:border-blue-500" />
            </div>
            <div className='my-5'>
              <p className='my-2 text-sm'>University</p>
              <input {...register("university", {required: true})} name="university" type="text" className="w-full input input-bordered rounded-lg bg-zinc-900 focus:outline-none focus:border focus:border-blue-500" />
            </div>
            <div className='my-5'>
              <p className='my-2 text-sm'>Address</p>
              <input {...register("address", {required: true})} name="address" type="text" className="w-full input input-bordered rounded-lg bg-zinc-900 focus:outline-none focus:border focus:border-blue-500" />
            </div>
            <div className='mt-5'>
              <button className='px-5 py-1 rounded-full bg-blue-600 hover:bg-blue-700 duration-300 cursor-pointer mr-2' type="submit" disabled={processing}>{processing ? <>
                <div className="text-center">
                  <div role="status">
                    <svg className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-900 fill-blue-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </> : 'Save'}</button>
              <label htmlFor="information-modal" className="px-5 py-1 rounded-full bg-zinc-600 hover:bg-zinc-700 duration-300 cursor-pointer">Close</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InformationModal;