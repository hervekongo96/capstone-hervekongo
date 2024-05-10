import React from 'react'
import SendMessageForm from '../forms/sendmessageform'
import { Link } from 'react-router-dom'

function SendMessages() {
  return (
    <div className='w-full px-4 lg:px-[20rem]'>
      <div className="mt-4 p-6">
        <Link to={'/'}><button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 mb-4 rounded-md"> Retour </button></Link>
        <h2 className="text-2xl font-bold mb-4">Nouveau message</h2>
        <SendMessageForm />
      </div>               
    </div>
  )
}

export default SendMessages