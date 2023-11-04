import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Service from './Pages/Service';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/service" element={<Service />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;