import React, { useState } from 'react';

function MyComponent() {
  const [dateValue, setDateValue] = useState('');

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Fecha seleccionada:', dateValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <label className="block mb-2">
        Fecha:
        <input
          type="date"
          value={dateValue}
          onChange={handleDateChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </label>
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Enviar
      </button>
    </form>
  );
}

export default MyComponent;
