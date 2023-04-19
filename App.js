import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './component/Home';
import { Projects } from './component/Projects';
import { Resume } from './component/Resume';
import { Aboutme } from './component/Aboutme';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Resume />} />
        <Route path='/' element={<Aboutme />} />
        <Route path='/projects' element={<Projects />} />
        
      </Routes>

    </div>
  );
}

export default App;
