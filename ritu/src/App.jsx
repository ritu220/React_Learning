import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
     <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
   
  );
}


export default App;

