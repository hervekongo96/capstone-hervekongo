import React from 'react';
import { useAuth } from '../../provider/authprovider';


const UserProfile = () => {

  const { user } = useAuth();
  
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="p-4 bg-white shadow-md rounded-md w-96">
        <div className="flex justify-center">
          <img className="w-48 h-48 rounded-full mb-4" src={user.profileImage} alt="Profile" />
        </div>
        <hr className="mb-4"/>
        <h5 className="text-2xl font-bold mb-2">Detail Compte</h5>
        <p className="text-gray-500">Nom          : {user.nom}</p>
        <p className="mt-2 text-gray-700">Postnom : {user.postnom}</p>
        <p className="mt-2 text-gray-700">Prenom  : {user.prenom}</p>
        <p className="text-gray-500">Email        :{user.email}</p>
        <p className="mt-2 text-gray-700">Sexe    : {user.sexe}</p>
        <p className="mt-2 text-gray-700">Rôle    : {user.role}</p>
        <p className="mt-4 text-gray-700">Phone   :{user.phone}</p>
      </div>
    </div>
  );
};

export default UserProfile;