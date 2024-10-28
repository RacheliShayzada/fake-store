import logo from './logo.png';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import ShowItems from './Components/ShowItems/ShowItems';

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
          <li><Link to="/Books">Books</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jewlary" element={<ShowItems category="jewelery" />} />
        <Route path="/Electronic" element={<ShowItems category="electronics" />} />
        <Route path="/Books" element={<ShowItems category="books" />} />
      </Routes>
    </div>
  );
}

export default App;
