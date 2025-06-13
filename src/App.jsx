import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inscricao from './pages/Inscricao';
import Sucesso from './pages/Sucesso';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import './App.css'; 

function App() {
  return (
    <Router>
      <Header />
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/sobre">Sobre</Link> |{' '}
        <Link to="/contato">Contato</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscricao" element={<Inscricao />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;