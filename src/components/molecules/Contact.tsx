import React from 'react'

const Contact = ({ toggleModal }: { toggleModal: () => void }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-[400px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-primary text-lg">Formulario de Contacto</h2>
            <button onClick={toggleModal} className="text-primary text-xl">X</button>
          </div>
          <form className="flex flex-col gap-4">
            <input className="border p-2 rounded" type="text" placeholder="INGRESA TU NOMBRE" />
            <input className="border p-2 rounded" type="email" placeholder="INGRESA TU EMAIL" />
            <textarea className="border p-2 rounded" placeholder="MENSAJE"/>
            <button className="bg-primary text-secondary p-2 rounded mt-4">
              ENVIAR 
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contact;