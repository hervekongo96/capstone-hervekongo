import React from 'react';
import PublishForm from '../forms/publishform';


export default function Publish() {
  return (
    <div className='flex flex-col flex-auto w-full'>
       <div className="h-full">
            <div className="grid grid-cols-1 h-full">
                        <div className="col-span-2 flex justify-center items-center">
                            <div className="min-w-[500] px-8">
                                <div className="mb-8 flex flex-col justify-center items-center">
                                    <h1 className="text-3xl font-medium">Publish your project</h1>
                                    <span>In the wall website</span>
                                    <p>Please enter your credentails for publishing!</p>
                                </div>
                                <PublishForm />
                            </div>
                        </div>
                    </div>
            </div>
    </div>
  )
}
