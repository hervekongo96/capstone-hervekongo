import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form'
import { FaUser, FaCamera } from 'react-icons/fa'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { createCompteAdmin } from '../../api/apiRequest';
    
function SignUpFormAdmin() {
      const { register, handleSubmit, formState: { errors } } = useForm();
      const fileInput = useRef(null);
      const [profilePic, setProfilePic] = useState(null);
    
      const handleProfilePicClick = () => {
        fileInput.current.click();
      }
    
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setProfilePic(url);
    
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'qjc0htof');
            axios.post('https://api.cloudinary.com/v1_1/dz9l48ezl/image/upload', formData)
                .then(response => {
                    const imageUrl = response.data.secure_url;
                    setProfilePic(imageUrl);
                })
                .catch(error => {
                    console.error(error);
                });
        }
      }
    
      const onSubmit = (data) => {
        data.profilePic = profilePic;
        createCompteAdmin(data);
      }
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3 flex justify-center">
                <div onClick={handleProfilePicClick} className='w-24 h-24 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer'>
                    {profilePic ? <img src={profilePic} alt="Profile" className='rounded-full' /> : <FaCamera size={32} />}
                </div>
                <input type="file" ref={fileInput} onChange={handleFileChange} className='hidden' />
          </div>
          <div className="mb-3 flex justify-between">
                <div className="w-1/2 pr-2">
                    <label className="font-medium mb-2">Name</label>
                    <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                        <input {...register('nom', { required: true })} type="text" placeholder='The author name' className='w-48 ml-2 flex-grow focus:outline-none' />
                        {errors.nom && <p className="text-red-500 mt-2">{errors.nom.message}</p>}
                    </div>
                </div>
                <div className="w-1/2 pl-2">
                    <label className="font-medium mb-2">Middlename</label>
                    <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                        <input {...register('postnom', { required: true })} type="text" placeholder='The members teams' className='w-48 ml-2 flex-grow focus:outline-none' />
                        {errors.postnom && <p className="text-red-500 mt-2">{errors.postnom.message}</p>}
                    </div>
                </div>
            </div>
            <div className="mb-3 flex justify-between">
                <div className="w-1/2 pr-2">
                    <label className="font-medium mb-2">Lastname</label>
                    <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                        <input {...register('prenom', { required: true })} type="text" placeholder='Your hebeger link project' className='w-48 ml-2 flex-grow focus:outline-none' />
                        {errors.prenom && <p className="text-red-500 mt-2">{errors.prenom.message}</p>}
                    </div>
                </div>
                <div className="w-1/2 pl-2">
                    <label className="font-medium mb-2">Gender</label>
                    <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                        <input {...register('sexe', { required: true })} type="text" placeholder='Your public link github project' className='w-48 ml-2 flex-grow focus:outline-none' />
                        {errors.sexe && <p className="text-red-500 mt-2">{errors.sexe.message}</p>}
                    </div>
                </div>
            </div>
            <div className="mb-3 flex justify-between">
                <div className="w-1/2 pr-2">
                    <label className="font-medium mb-2">Email</label>
                    <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                        <input {...register('email', { required: true })} type="text" placeholder='Your email' className='w-48 ml-2 flex-grow focus:outline-none' />
                        {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
                    </div>
                </div>
                <div className="w-1/2 pl-2">
                    <label className="font-medium mb-2">Phone</label>
                    <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                        <input {...register('phone', { required: true })} type="text" placeholder='Your phone' className='w-48 ml-2 flex-grow focus:outline-none' />
                        {errors.phone && <p className="text-red-500 mt-2">{errors.phone.message}</p>}
                    </div>
                </div>
            </div>
            <div className="mb-6 flex justify-between">
                <div className="w-1/2 pr-2">
                    <label className="font-medium mb-2">Password</label>
                    <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                        <input {...register('password', { required: true })} type="password" placeholder='Your password' className='w-48 ml-2 flex-grow focus:outline-none' />
                        {errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>}
                    </div>
                </div>
                <div className="w-1/2 pl-2">
                    <label className="font-medium mb-2">Password Confirm</label>
                    <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                        <input {...register('passwordConfirm', { required: true })} type="password" placeholder='Your password confirm' className='w-48 ml-2 flex-grow focus:outline-none' />
                        {errors.passwordConfirm && <p className="text-red-500 mt-2">{errors.passwordConfirm.message}</p>}
                    </div>
                </div>
            </div>
            <button className='block bg-blue-700 hover:bg-blue-800 text-white w-full py-2 px rounded flex justify-center items-center'>
              <FaUser />
              <span className='ml-2'>Sign Up</span>
            </button>
            <div className="mt-4 text-center">
                Already have an account? <span className='text-blue-700 cursor-pointer'><Link to={'/sign-in'}>Sign in</Link></span>
            </div>
        </form>
      )
}
        

export default SignUpFormAdmin