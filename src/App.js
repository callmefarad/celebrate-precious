import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import Wishes from "./components/Wishes/Wishes.js"
import Wish from "./components/Wishes/Wish/Wish"
import Form from "./components/Form/Form"



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="wishes" element={<Wishes />} />
        <Route path="wish" element={<Wish />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
