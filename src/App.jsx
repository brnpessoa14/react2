import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inscricao from './pages/Inscricao';
import Sucesso from './pages/Sucesso';
import './App.css'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscricao" element={<Inscricao />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;