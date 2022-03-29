import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'
import Wishes from "./components/Wishes/Wishes.js"
import Wish from "./components/Wishes/Wish/Wish"
import Form from "./components/Form/Form"
import Career from "./components/Career/Career"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="wishes" element={<Wishes />} />
        <Route path="wish" element={<Wish />} />
        <Route path="form" element={<Form />} />
        <Route path="career" element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
