// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import AdPosting from './Components/AdPosting';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/AdPosting" element={<AdPosting />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
