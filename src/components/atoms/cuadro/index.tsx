import React from 'react'

const index = ({ title, text, url }: { title: string, text: string, url: string}) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center w-[310px] h-[225px] top-[692px] left-[9px]">
  <img src={url} alt="icono desarrollo" className="mx-auto mb-4 w-16 h-16" />
  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
  <p className="text-gray-500 mt-2">{text}</p>
    </div>
  );
}
export default index;
