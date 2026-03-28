// src/components/JokeApp.jsx
import React, { useState, useEffect } from "react";

function Loop() {
  const [joke, setJoke] = useState("");
  const [copy, setCopy] = useState(false);

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke(
        "Failed to Joke beacuse You are humorless and please check your connection"
      );
    }
  };

  const encodedJoke = encodeURIComponent(joke);
  const whatsappUrl = `https://wa.me/?text=${encodedJoke}`;
  const isError = joke.includes("Failed to Joke");

  const copyText = () => {
    navigator.clipboard
      .writeText(joke)
      .then(() => {
        setCopy(true);
        alert("Copied to Clipboard");
        setTimeout(() => setCopy(false), 1000);
      })
      .catch(() => {
        alert("Failed to copy the text. Please try again later.");
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-50 border-4 border-yellow-400 shadow-xl rounded-xl p-10 transform transition-transform duration-300 hover:scale-[1.05] max-w-3xl w-full mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-yellow-500 animate-bounce select-none">
          Random Joke Generator Using Api
                  </h2>

        <p
          className={`mb-8 text-2xl font-semibold text-gray-800 leading-relaxed ${
            isError ? "text-red-500 font-extrabold" : ""
          }`}
        >
          {joke}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={fetchJoke}
            className="bg-blue-600 font-semibold cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Get another Joke
          </button>

          <button
            onClick={copyText}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition"
          >
            Copy this Joke
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
            onClick={fetchJoke}
            className="bg-blue-600 text-white p-4 px-8 rounded-xl mb-4 hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default Loop;
