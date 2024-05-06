import React from 'react'
import SignInForm from '../forms/signinform'

function SignIn() {
    
  return (
    <div className='flex flex-col flex-auto w-full h-screen'>
       <div className="h-full">
            <div className="grid grid-cols-1 h-full">
                        <div className="col-span-2 flex justify-center items-center">
                            <div className="min-w-[500] px-8">
                                <div className="mb-8">
                                    <h1 className="text-3xl font-medium">Welcom To the wall Application</h1>
                                    <div className='flex items-center justify-center mt-3'>
                                        <p className='text-center'>Please enter your credentials to sign in!</p>
                                    </div>
                                </div>
                                <SignInForm />
                            </div>
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default SignIn