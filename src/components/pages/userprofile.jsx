import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="p-4 bg-white shadow-md rounded-md w-96">
        <div className="flex justify-center">
          <img className="w-48 h-48 rounded-full mb-4" src={"https://s1.lprs1.fr/images/2021/07/07/8433506_mode-homme.jpg"} alt="Profile" />
        </div>
        <hr className="mb-4"/>
        <h5 className="text-2xl font-bold mb-2">Detail user</h5>
        <p className="text-gray-500">{'user.email'}</p>
        <p className="mt-2 text-gray-700">Sexe: {'user.sexe'}</p>
        <p className="mt-2 text-gray-700">Rôle: {'user.role'}</p>
        <p className="mt-4 text-gray-700">{'user.bio'}</p>
      </div>
    </div>
  );
};

export default UserProfile;
