import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;