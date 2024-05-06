import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/authprovider';

const Logout = () => {

  let navigate = useNavigate();
  const { logout } = useAuth();

  const handleBack = () => {
    logout()
    navigate('/sign-in');
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Voullez-vous se deconnecté ?
          </h2>
        </div>
        <div className="mt-6">
          <button
            onClick={handleBack}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Deconnexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
