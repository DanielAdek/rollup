import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NumberRollup from "./pages/number/NumberColumn";
import NumbersColumn2 from "./pages/number/NumberColumn2";

function App() {
  return (
    <div className="App">
      {/* <NumberRollup /> */}
      <NumbersColumn2 />
    </div>
  );
}

export default App;
