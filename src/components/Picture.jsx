import React, { useEffect, useState } from "react";

function Picture() {
  const [data, setData] = useState("");
  const [dateValue, setDateValue] = useState("");

  const api = import.meta.env.VITE_API_KEY;

  const handleSubmit = () => {
    fetch(
      `https://api.nasa.gov/planetary/apod?date=${dateValue}&api_key=${api}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
    setDateValue("");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="">
      <h1 className="text-center m-4 text-2xl uppercase">
        Imagen astronómica del día
      </h1>
      <div className="flex justify-center">
        <label className="mb-2 font-thin">
          Busca por fecha:
          <input
            type="date"
            min="1995-06-16"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            className="mt-3 bg-white text-black block rounded-md w-60"
          ></input>
        </label>
      </div>
      <div className="flex justify-center m-2">
        <button
          className="bg-indigo-700"
          onClick={() => {
            setData("");
            handleSubmit();
          }}
        >
          Consultar
        </button>
      </div>

      {!data ? (
        <div className="">
          <h1 className="text-center">
            "Las imágenes se registraron desde el 16 de junio de 1995"{" "}
          </h1>
        </div>
      ) : (
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-xl shadow-indigo-500/50 mb-10">
          {data.media_type === "video" ? (
            <iframe
              className="w-full mt-2 rounded-3xl"
              src={data.url}
              width="560"
              height="315"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              className="w-full mt-2 rounded-3xl"
              src={data.url}
              width="300"
              height="200"
            ></img>
          )}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.title}</div>
            <p className="text-white text-base">{data.explanation}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">
              {data.date}
            </span>
            {data.copyright ? <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">
              {data.copyright?.replace(/\n/g, "")}
            </span> : <span></span>}
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Picture;
