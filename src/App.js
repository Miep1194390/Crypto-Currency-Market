import React from "react";
import "./App.css";
import Title from './components/Title';
import TopContext from "./components/TopContext";
import PersonalInfo from "./components/PersonalInfo";
import Quote from "./components/Quote";


function App() {
  return (
    <div className="App">
      <Title></Title>
      <TopContext></TopContext>
      <PersonalInfo></PersonalInfo>
      <Quote></Quote>
    </div>
  );
}
export default App;
