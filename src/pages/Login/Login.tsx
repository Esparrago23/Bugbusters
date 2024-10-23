import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-4xl rounded shadow-md flex">
        {/* Sección del formulario de Login */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Iniciar Sesión</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Usuario
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="12345"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#439775] text-white py-2 rounded hover:bg-teal-600 transition duration-300"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>

        {/* Sección de imagen/información */}
        <div className="w-1/2 bg-teal-500 text-white p-8 flex items-center justify-center">
          {/* Aquí puedes colocar la imagen o el contenido informativo */}
          <div>
            <h3 className="text-3xl font-semibold mb-4">Bienvenido de nuevo!</h3>
            <p className="text-lg">Ingresa tus credenciales para acceder a la plataforma.</p>
            {/* También puedes agregar una imagen */}
            {/* <img src="ruta-de-tu-imagen" alt="Descripción de la imagen" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
