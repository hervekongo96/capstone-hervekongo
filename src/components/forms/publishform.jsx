import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCamera } from 'react-icons/fa';
import axios from 'axios';
import { useAuth } from '../../provider/authprovider';
import { publicationOevreByApprenant } from '../../api/apiRequest';


function PublishForm() {

  const { user, token } = useAuth();
  const { register, handleSubmit, formState: { errors }, reset} = useForm();

  const fileInput1 = useRef(null);
  const fileInput2 = useRef(null);
  const fileInput3 = useRef(null);

  const [profilePic1, setProfilePic1] = useState(null);
  const [profilePic2, setProfilePic2] = useState(null);
  const [profilePic3, setProfilePic3] = useState(null);

  const handleProfilePicClick = (setPic, inputRef) => () => {
    inputRef.current.click();
  }

  const handleFileChange = (setPic) => (event) => {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        setPic(url);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'qjc0htof');
        axios.post('https://api.cloudinary.com/v1_1/dz9l48ezl/image/upload', formData)
            .then(response => {
                const imageUrl = response.data.secure_url;
                setPic(imageUrl);
            })
            .catch(error => {
                console.error(error);
            });
    }
  }
  
  const onSubmit = (data) => {
    
    data.profile1 = profilePic1;
    data.profile2 = profilePic2;
    data.profile3 = profilePic3;
    data.date_publication = new Date();
    data.CompteId = user.id;
    data.profile_auteur = user.profileImage;
    data.like = 1,
    data.share = 1,
    publicationOevreByApprenant(data, token)
    .then(() => {
        reset();
      })
      .catch(error => {
        console.error('Une erreur est survenue :', error);
      });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 flex justify-between">
            <div className="w-1/2 pr-2">
                <label className="font-medium mb-2">Author</label>
                <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                    <input {...register('auteur', { required: 'c\'est requis' })} type="text" placeholder='The author name' className='w-48 ml-2 flex-grow focus:outline-none' />
                </div>
                    {errors.auteur && <p className="text-red-500 mt-2">{errors.auteur.message}</p>}
            </div>
            <div className="w-1/2 pl-2">
                <label className="font-medium mb-2">Details</label>
                <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                    <input {...register('detail', { required: 'c\'est requis' })} type="text" placeholder='The members teams' className='w-48 ml-2 flex-grow focus:outline-none' />
                </div>
                    {errors.detail && <p className="text-red-500 mt-2">{errors.detail.message}</p>}
            </div>
        </div>
        <div className="mb-3 flex justify-between">
            <div className="w-1/2 pr-2">
                <label className="font-medium mb-2">Link work</label>
                <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                    <input {...register('hebergerlink', { required: 'c\'est requis' })} type="text" placeholder='Your hebeger link project' className='w-48 ml-2 flex-grow focus:outline-none' />
                </div>
                    {errors.hebergerlink && <p className="text-red-500 mt-2">{errors.hebergerlink.message}</p>}
            </div>
            <div className="w-1/2 pl-2">
                <label className="font-medium mb-2">Link github</label>
                <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                    <input {...register('githublink', { required: 'c\'est requis' })} type="text" placeholder='Your public link github project' className='w-48 ml-2 flex-grow focus:outline-none' />
                </div>
                    {errors.githublink && <p className="text-red-500 mt-2">{errors.githublink.message}</p>}
            </div>
        </div>
        <div className="mb-3 flex justify-between">
            <div className="w-1/2 pr-2">
                <label className="font-medium mb-2">Type project</label>
                <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                    <input {...register('type', { required: 'c\'est requis' })} type="text" placeholder='The typeof project' className='w-48 ml-2 flex-grow focus:outline-none' />
                </div>
                    {errors.type && <p className="text-red-500 mt-2">{errors.type.message}</p>}
            </div>
            <div className="w-1/2 pl-2">
                <label className="font-medium mb-2">Maket link</label>
                <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                    <input {...register('figmalink', { required: 'c\'est requis' })} type="text" placeholder='Your public link maket this project' className='w-48 ml-2 flex-grow focus:outline-none' />
                </div>
                    {errors.figmalink && <p className="text-red-500 mt-2">{errors.figmalink.message}</p>}
            </div>
        </div>
        <div className="mb-3">
            <label className="font-medium mb-2">Email</label>
            <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                <input type="email" {...register('email', { required: 'L\'adresse e-mail est requise' })} placeholder='Enter your email' className='w-48 ml-2 flex-grow focus:outline-none' />
            </div>
            {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
        </div>
        <label className="font-medium mb-2">Select a projet images to publish</label>
        <div className="mb-3 mt-3 flex justify-center gap-4">
            <div onClick={handleProfilePicClick(setProfilePic1, fileInput1)} className='w-28 h-24 rounded-md border border-gray-400 flex items-center justify-center cursor-pointer'>
                {profilePic1 ? <img src={profilePic1} alt="Profile" className='rounded-md' /> : <FaCamera size={32} />}
            </div>
            <input {...register('profile1')} type="file" ref={fileInput1} onChange={handleFileChange(setProfilePic1)} className='hidden' />

            <div onClick={handleProfilePicClick(setProfilePic2, fileInput2)} className='w-28 h-24 rounded-md border border-gray-400 flex items-center justify-center cursor-pointer'>
                {profilePic2 ? <img src={profilePic2} alt="Profile" className='rounded-md' /> : <FaCamera size={32} />}
            </div>
            <input {...register('profile2')} type="file" ref={fileInput2} onChange={handleFileChange(setProfilePic2)} className='hidden' />

            <div onClick={handleProfilePicClick(setProfilePic3, fileInput3)} className='w-28 h-24 rounded-md border border-gray-400 flex items-center justify-center cursor-pointer'>
                {profilePic3 ? <img src={profilePic3} alt="Profile" className='rounded-md' /> : <FaCamera size={32} />}
            </div>
            <input {...register('profile3')} type="file" ref={fileInput3} onChange={handleFileChange(setProfilePic3)} className='hidden' />
            
        </div>
        <button className='block bg-blue-700 hover:bg-blue-800 text-white w-full py-2 px rounded flex justify-center items-center'>
           <span className='ml-2'>Publish</span>
        </button>
    </form>
  )
}

export default PublishForm