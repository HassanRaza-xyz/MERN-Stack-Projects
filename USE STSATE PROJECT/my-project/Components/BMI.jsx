    import React, { useState } from "react";

    const BMICalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState("");

    const calculateBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100; // cm to meters

        if (!w || !h) {
        setResult("❌ Please enter valid weight and height.");
        return;
        }

        const bmi = w / (h * h);
        let category = "";

        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 25) category = "Normal weight";
        else if (bmi < 30) category = "Overweight";
        else category = "Obese";

        setResult(`✅ Your BMI is ${bmi.toFixed(2)} (${category})`);
    };
    return (
        <div className="min-h-screen px-4 bg-green-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Calculate Your BMI</h1>

        <input
            type="text"
            placeholder="Enter Your Weight in kg"
            className="mb-2 text-2xl px-4 bg-gray-400 py-2 border rounded"
            onChange={(e) => setWeight(e.target.value)}
        />

        <input
            type="text"
            placeholder="Enter Your height in cm"
            className="mb-4 px-4 text-2xl py-2 bg-gray-400 border rounded"
            onChange={(e) => setHeight(e.target.value)}
        />

        <button
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
            onClick={calculateBMI}
        >
            Calculate Your BMI
        </button>

        {result && <p className="mt-4 text-xl text-gray-700">{result}</p>}
        </div>
    );
    };

    export default BMICalculator;
