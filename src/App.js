import logo from './logo.png';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Jewlaries from './Components/Jewlaries/Jewlaries';
import Electronics from './Components/Electronics/Electronics';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
            </Link>
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Jewlary">Jewlary</Link></li>
          <li><Link to="/Electronic">Electronic</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jewlary" element={<Jewlaries />} />
        <Route path="/Electronic" element={<Electronics />} />
      </Routes>
    </div>
  );
}

export default App;
