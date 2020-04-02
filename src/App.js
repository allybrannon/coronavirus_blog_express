import React from "react";
import CoronaBlog from "./components/Coronablog";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>One step closer...yet so far away</h1>
      <Router>
        <Route path="/" exact component={CoronaBlog} />
      </Router>
    </div>
  );
}

export default App;
