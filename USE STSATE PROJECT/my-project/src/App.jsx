import React, { useEffect } from "react";

import Counter      from "../Components/UseState";
import ButtonChange from "../Components/buttonclick";
import ToggleName from "../Components/toggle";
import Likes from "../Components/Likes";
import Welcome from "../Components/light";
import UserProfileCard from "../Components/profile card";
import GreetingCard from "../Components/result";
import Evenodd from "../Components/evenodd";
import TemperatureChecker from "../Components/temp";
import BMICalculator from "../Components/BMI";
import PasswordChecker from "../Components/Passowrd";
import CounterApp from "../Components/Numbercounter";
import AirPodsScroll from "../Components/onscroll";
import OverlayCard from "../Components/fadein";
import HassanUltimateTail from "../Components/onscroll";
function App() {
  useEffect(() => {
    console.log("✅ useEffect is working!");
  }, []);

  return (
    <div>
      <Counter/>
     <ButtonChange/>
     <ToggleName/>
     <Likes/>
     <Welcome/>
     <UserProfileCard/>
     <GreetingCard/>
     <Evenodd/>
     {/* <PasswordChecker/> */}
     <TemperatureChecker/>
     <BMICalculator/>
     <CounterApp/>
     <OverlayCard/>
    </div>
  );
}

export default App;
