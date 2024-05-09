import React from 'react'
import SendMessageForm from '../forms/sendmessageform'

function SendMessages() {
  return (
    <div className='w-full px-[30rem]'>
      <div className="mt-4 p-6">
        <h2 className="text-2xl font-bold mb-4">Nouveau message</h2>
        <SendMessageForm />
      </div>               
    </div>
  )
}

export default SendMessages