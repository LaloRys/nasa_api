import React, { useEffect, useState } from "react";

function Picture() {
  const [data, setData] = useState("");
  const [dateValue, setDateValue] = useState("");

  const api = import.meta.env.VITE_API_KEY;

  const handleSubmit = () => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${dateValue}&api_key=${api}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
    setDateValue("")
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="">
      <h1 className="text-center m-4 text-2xl uppercase">Imagen astronómica del día</h1>
      <div className="flex justify-center">
        <label className="block mb-2 font-thin">
          Busca por fecha:
          <input
            type="date"
            min="1995-06-16"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            className="mt-3 bg-white text-black block w-full rounded-md"
          ></input>
        </label>
      </div>

      {!data ? (
        <div className="">
          <h1 className="text-center mt-2">"Las imágenes se registraron desde el 16 de junio de 1995" </h1>
        </div>
      ) : (
        <div className="max-w-sm rounded-3xl overflow-hidden m-5 shadow-xl shadow-indigo-500/50">
          <img className="w-full mt-5 rounded-3xl"src={data.url} width="300" height="200"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.title}</div>
            <p class="text-white text-base">{data.explanation}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">{data.date}</span>
          </div>
        </div>
        

      )}
      <div className="flex justify-center mt-9">
        <button onClick={handleSubmit}>Consultar</button>
      </div>
    </div>
  );
}

export default Picture;
