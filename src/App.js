import React from "react";
import "./App.css";
import Title from './components/Title';
import TopContext from "./components/TopContext";
import PersonalInfo from "./components/PersonalInfo";
import Quote from "./components/Quote";
import Languages from "./components/Languages";


function App() {
  return (
    <div className="App">
      {/* <Title></Title> */}
      <TopContext></TopContext>
      <Quote></Quote>
      <PersonalInfo></PersonalInfo>
      <Languages></Languages>
      
    </div>
  );
}
export default App;
