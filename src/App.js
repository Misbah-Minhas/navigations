import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';

import About from './components/about';
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

      <Router>
        <Routes>
          <Route path='/child' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
