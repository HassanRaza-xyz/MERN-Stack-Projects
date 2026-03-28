import { useState, useEffect } from "react";

const AgeCalculator = () => {
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentMsg, setCurrentMsg] = useState("");
  const [emoji, setEmoji] = useState("");

  const funnyMessages = [
    "Asking grandma... 👵",
    "Watching Your Face... 🕯️",
    "Time-traveling... ⏳",
    "Checking star charts... ✨",
    "Asking to adam 🦄",
    "Consulting the Aliens 👽",
    "Eating Your Birthday Cake 🍰"
  ];

  const ageJokes = [
    "Don't worry, you still look young! 😎",
    "Wow, you're vintage! 🏺",
    "Perfect age to conquer the world! 🌍",
    "Finally old enough to be wise! 🤓"
  ];

  const emojis = ["🎉", "🎂", "🍕", "🦖", "💥", "😂", "🤯"];

  const handleEnter = (e) => {
    if (e.key === "Enter" && birthYear) {
      const year = parseInt(birthYear);
      if (year > new Date().getFullYear() || year < 1900) {
        // invalid year animation
        setCurrentMsg("Oops! Invalid year 😅");
        return;
      }

      setLoading(true);
      setAge(null);
      let i = 0;

      const msgInterval = setInterval(() => {
        setCurrentMsg(funnyMessages[i]);
        setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
        i++;
        if (i === funnyMessages.length) {
          clearInterval(msgInterval);
          const currentYear = new Date().getFullYear();
          setAge(currentYear - year);
          setLoading(false);
        }
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-200 p-6">
      <h1 className="text-3xl font-extrabold mb-6 animate-pulse text-center">
        Funny Age Calculator 🎉
      </h1>

      <input
        type="number"
        placeholder="Enter your birth year"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
        onKeyPress={handleEnter}
        className={`p-4 rounded-lg w-64 text-center font-bold ${
          age === null && birthYear && birthYear > new Date().getFullYear()
            ? "animate-shake border-red-500 border-2"
            : ""
        }`}
      />

      {loading && (
        <p className="mt-6 text-lg font-bold animate-pulse">
          {currentMsg} {emoji}
        </p>
      )}

      {!loading && age !== null && (
        <div className="mt-6 text-center">
          <p className="text-2xl font-extrabold">
            You are {age} years old! 🎂 {emojis[Math.floor(Math.random() * emojis.length)]}
          </p>
          <p className="mt-3 text-lg font-semibold">{ageJokes[Math.floor(Math.random() * ageJokes.length)]}</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
