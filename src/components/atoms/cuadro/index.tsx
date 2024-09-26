import React from 'react'

const index = ({ title, text }: { title: string, text: string }) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
  <img src="/ruta/a/tu/imagen.png" alt="icono desarrollo" className="mx-auto mb-4 w-16 h-16" />
  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
  <p className="text-gray-500 mt-2">{text}</p>
    </div>
  );
}
export default index;
