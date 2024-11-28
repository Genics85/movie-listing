import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route path="name" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
