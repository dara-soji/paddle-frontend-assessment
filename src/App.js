import './App.scss';

import { Navigate, Route, Routes } from 'react-router';
import { About, Blog, Comingsoon, Github } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/comingsoon" />}/>
        <Route  path="/comingsoon" element={<Comingsoon />}/>
        <Route  path="/about" element={<About />}/>
        <Route  path="/blog" element={<Blog />}/>
        <Route  path="/github" element={<Github />}/>
      </Routes>
     
    </div>
  );
}

export default App;
