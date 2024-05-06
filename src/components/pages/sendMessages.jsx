import React from 'react'
import SendMessageForm from '../forms/sendmessageform'

function SendMessages() {
  return (
    <div className='flex flex-col flex-auto w-full h-screen'>
        <div className="h-full">
            <div className="grid grid-cols-1 h-full">
                <div className="col-span-2 flex justify-center items-center">
                    <div className="w-auto px-8">
                        <SendMessageForm />
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendMessages