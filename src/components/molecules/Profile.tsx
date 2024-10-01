import React from 'react'

const Profile = () => {
    return (
      <div className="flex flex-col items-center w-[150px] h-[242px] text-center">
        <div className="relative">
          <img src="/images/Perfil.jpeg" alt="Imagen Perfil" className="w-[150px] h-[150px] rounded-full object-cover mb-8" />
        </div>
        <h1 className="mt-2 text-[16px] font-bold text-gray-800">Sebastián Castellanos Mejía</h1>
        <h2 className="text-[14px] text-gray-500">Front-End Developer</h2>
      </div>
    );
  };
  
  export default Profile;
  