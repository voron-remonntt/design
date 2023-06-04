import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

const App: React.FC = () => (
  <>
    <Navbar />

    <div className="pages">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/blog" Component={Blog} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  </>
);

export default App;
