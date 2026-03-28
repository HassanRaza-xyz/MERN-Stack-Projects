// src/components/JokeCard.jsx
import React, { useState } from "react";

function JokeCard({ joke, fetchjoke }) {
  const encodedJoke = encodeURIComponent(joke);
  const whatsappUrl = `https://wa.me/?text=${encodedJoke}`;
  const isError = joke.includes("Failed to Joke");
  const [copy, setCopy] = useState(false);
  const copytext = () => {
    navigator.clipboard
      .writeText(joke)
      .then(() => {
        setCopy(true);
alert("Copy that to the Clip board")
        setTimeout(() => setCopy(false), 1000);
      })
      .catch(() => {
alert(" Failed to copy the Text Please try Again later After Some time")
    });
  };
  return (
    <div className="bg-gray-50 border-4 border-yellow-400 shadow-xl rounded-xl p-10 transform transition-transform duration-300 hover:scale-[1.05] max-w-3xl w-full mx-auto">
      <h2 className="text-4xl font-extrabold mb-6 text-yellow-500 animate-bounce select-none">
Random JOke Generator Using Api      </h2>
      <p
        className={`mb-8 text-2xl font-semibold text-gray-800 leading-relaxed ${
          isError ? "text-red-500 font-extrabold" : ""
        }`}
      >
        {joke}
      </p>
      <div className="flex flex-col justify center items-center gap-6">
        <button
          onClick={fetchjoke}
          className="bg-blue-600 font-semibold cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
            Get Another Joke
        </button>
        <button
          onClick={copytext}
          className="bg-green-600 hover:bg-amber-50 text-white px-6 py-3 rounded-xl transition duration-600"
        >
          Copy This Joke
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 flex gap-3 items-center px-6 py-3 rounded-lg text-white hover:bg-green-700 transition select-none"
        >
          <img src="/Wa.png" alt="WhatsApp" className="h-7 w-7" />
          Share on WhatsApp
        </a>
       <button
  onClick={fetchjoke}
  className="bg-blue-600 text-white p-4 rounded-xl mb-4 hover:bg-blue-700"
>
Refresh the Interface Again </button>

      </div>
    </div>
  );
}

export default JokeCard;
