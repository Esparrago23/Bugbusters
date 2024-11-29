import React from 'react';

interface FieldFormProps {
  placeholder: string;
  mensaje: string;
  value?: string; // El valor controlado del input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Manejador de cambios
}

const FieldForm: React.FC<FieldFormProps> = ({ placeholder, mensaje, value, onChange }) => {
  return (
    <div className="flex flex-col w-full mb-4">
      <label className="text-gray-700 mb-2">{mensaje}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded-lg w-full"
        value={value} // El valor del input se controla desde el estado del padre
        onChange={onChange} // Llamamos a la función onChange cuando el usuario escribe
      />
    </div>
  );
};

export default FieldForm;
