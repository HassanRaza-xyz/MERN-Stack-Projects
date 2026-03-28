import React, { useState } from "react";

const Captions = [
  "Dog is on its way! Scroll Down to See",
  "Dog is Coming Scroll Down to See",
  "Here comes the dog! Scroll Down to See",
  "Wait for the dog to arrive Scroll Down to see",
];
export default function Movie() {
  const [dogImage, setDogImage] = useState("");
  const [caption, setCaption] = useState("");

  const fetchDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setCaption(Captions[Math.floor(Math.random() * Captions.length)]);

      setDogImage(data.message);
    } catch (error) {
      console.error("Error in fetching Dog ", error);
    }
  };
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold mb-4">Dog Image Generator 🐶</h1>

      <button
        onClick={fetchDog}
        className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
      >
      Click here to see the Dog
      </button>

      <p
        className="mt-6 text-3xl min-h-screen font-bold
       text-yellow-500 "
      >
        {caption}
      </p>
      {dogImage && (
        <div className="mt-6 flex justify-center">
          <img
            src={dogImage}
            alt="Random Dog"
            className="max-w-md rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
