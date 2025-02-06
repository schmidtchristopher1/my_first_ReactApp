import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
