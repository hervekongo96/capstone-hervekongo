import React from 'react';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../provider/authprovider';



function SignInForm() {

    const { register, handleSubmit } = useForm();
    const {login} = useAuth();

    const navigate = useNavigate(); 

    const onSubmit = async (data) => {
        const isAuthenticated = await login(data); 
        if (isAuthenticated) {
        navigate('/dashboard'); 
        }
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label className="font-medium mb-2">Email</label>
            <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                <FaEnvelope />
                <input type="email" {...register('email', { required: true })} placeholder='Enter your email' className='ml-2 flex-grow' />
                {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
            </div>
        </div>
        <div className="mb-3">
            <label className="font-medium mb-2">Password</label>
            <div className='w-full border rounded-md bg-transparent border-gray-400 p-3 flex items-center'>
                <FaLock />
                <input type="password" {...register('password', { required: true })} placeholder='Enter your password' className='ml-2 flex-grow' />
                {errors.password && <p className="text-red-500 mt-2">{errors.password.message}</p>}
            </div>
        </div>
        <div className="flex justify-between mb-6">
            <label >
                <input type="checkbox" className='mr-2'/>
                Remeber me
            </label>
            <span>Forgot Password?</span>
        </div>
        <button className='block bg-blue-700 hover:bg-blue-800 text-white w-full py-2 px rounded flex justify-center items-center'> <FaSignInAlt /> <span className='ml-2'>Sign In</span></button>
        <div className="mt-4 text-center">
            Don't have account yet? <span className='text-blue-700 cursor-pointer'><Link to={'/sign-up'}>Sign up</Link></span>
        </div>
    </form>
  )
}

export default SignInForm