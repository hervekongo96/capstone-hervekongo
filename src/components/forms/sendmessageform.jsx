import React, { useState } from 'react';

const SendMessageForm = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez gérer l'envoi du message
    console.log({ to, subject, message });
    setTo('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="flex flex-col p-6 bg-white rounded-md shadow-md">
      <h2 className="mb-4 text-lg font-semibold text-gray-700">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          className="mb-2 p-2 border rounded-md w-96"
          placeholder="À"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="text"
          className="mb-2 p-2 border rounded-md"
          placeholder="Sujet"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className="mb-4 p-2 border rounded-md"
          placeholder="Tapez votre message ici..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessageForm;