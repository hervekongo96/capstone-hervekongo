import React from 'react';
import { useForm } from 'react-hook-form';

const SendMessageForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Envoi du message:', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="to" className="block font-medium mb-2">
          À :
        </label>
        <input
          type="email"
          id="to"
          className={`border rounded-md px-3 py-2 w-full ${errors.to ? 'border-red-500' : 'border-gray-300'}`}
          {...register('to', { required: 'L\'adresse e-mail est requise' })}
        />
        {errors.to && <p className="text-red-500 mt-2">{errors.to.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block font-medium mb-2">
          Sujet :
        </label>
        <input
          type="text"
          id="subject"
          className={`border rounded-md px-3 py-2 w-full ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
          {...register('subject', { required: 'Le sujet est requis' })}
        />
        {errors.subject && <p className="text-red-500 mt-2">{errors.subject.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-2">
          Message :
        </label>
        <textarea
          id="message"
          className={`border rounded-md px-3 py-2 w-full h-32 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          {...register('message', { required: 'Le message est requis' })}
        ></textarea>
        {errors.message && <p className="text-red-500 mt-2">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
      >
        Envoyer
      </button>
    </form>
  );
};

export default SendMessageForm;
