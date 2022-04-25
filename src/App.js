import React from "react";
import "./App.css";
import Title from './components/Title';
import TopContext from "./components/TopContext";
import PersonalInfo from "./components/PersonalInfo";


function App() {
  return (
    <div className="App">
      <Title></Title>
      <TopContext></TopContext>
      <PersonalInfo></PersonalInfo>
    </div>
  );
}
export default App;
