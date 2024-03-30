import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Detail from './Routes/Detail'; 
import Contact from './Routes/Contact';
import Favs from './Routes/Favs'; 
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

