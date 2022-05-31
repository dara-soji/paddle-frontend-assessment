import './App.scss';

import { Navigate, Route, Routes } from 'react-router';
import { About, Blog, Comingsoon } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/comingsoon" />}/>
        <Route exact path="/comingsoon" element={<Comingsoon />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/blog" element={<Blog />}/>
      </Routes>
     
    </div>
  );
}

export default App;
