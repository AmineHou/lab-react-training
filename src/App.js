import React from "react";
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

function App() {
  return (
    <div className="App">

      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toDateString()} />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Pablo</Greetings>
      <Greetings lang="en">John</Greetings>

      <Random min={1} max={2} />
      <Random min={2} max={4} />
      <Random min={7} max={17} />
      <Random min={30} max={60} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>
  );
}

export default App;
