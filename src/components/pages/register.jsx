import React from 'react'
import SignUpForm from '../forms/signupform'

function Register() {
    return (
        <div className='flex flex-col flex-auto w-full h-screen'>
           <div className="h-full">
                <div className="grid grid-cols-1 h-full">
                            <div className="col-span-2 flex justify-center items-center">
                                <div className="min-w-[500] px-8">
                                    <div className="mb-6 flex flex-col justify-center items-center">
                                        <h1 className="text-3xl font-medium">Create a learner account</h1>
                                        <span>In the wall website</span>
                                        <p>please fill in the fields below with your information!</p>
                                    </div>
                                    <SignUpForm />         
                                </div>
                            </div>
                        </div>
                </div>
        </div>
      )
}
  
export default Register