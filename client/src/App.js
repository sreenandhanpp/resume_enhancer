import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as you build more steps */}
      </Routes>
  );
}

export default App;
