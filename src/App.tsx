import React from 'react';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home/Home';

const App: React.FC = () => (
  <>
    <Navbar />

    <div className="pages">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="#about" Component={Home} />
        <Route path="#galery" Component={Home} />
        <Route path="#contact" Component={Home} />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </div>
  </>
);

export default App;
