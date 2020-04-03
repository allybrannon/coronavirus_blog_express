import React from "react";
import CoronaBlog from "./components/Coronablog";
import OneBlog from "./components/OneBlog";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Coronavirus Bloggin'</h1>
      <Router>
        <Route path="/" exact component={CoronaBlog} />
        <Route path="/blog/:id" component={OneBlog} />
      </Router>
    </div>
  );
}

export default App;
