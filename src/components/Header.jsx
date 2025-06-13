import { useState } from 'react';
import IbmecLogo from '../assets/Ibmec_logo.png';

function Header() {
  // 1. Criamos um "estado" para saber se o menu está aberto ou não.
  // Começa como 'false' (fechado).
  const [isMenuOpen, setMenuOpen] = useState(false);

  // 2. Esta função inverte o estado do menu (de aberto para fechado e vice-versa).
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="container header-container">
          <a href="/" className="logo" aria-label="Página inicial do CanSat Ibmec">
            <img src={IbmecLogo} alt="Logotipo do Ibmec" className="logo-img" />
          </a>

          {/* 3. Adicionamos o evento de clique no botão para chamar nossa função. */}
          {/* A classe 'active' é adicionada dinamicamente quando o menu está aberto. */}
          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* 4. A classe 'active' também é adicionada aqui para mostrar/esconder o menu. */}
          <nav
            className={`main-nav ${isMenuOpen ? 'active' : ''}`}
            role="navigation"
            aria-label="Menu principal"
          >
            {/* Adicionamos o onClick aqui para fechar o menu ao clicar em um link */}
            <ul onClick={() => setMenuOpen(false)}>
              <li><a href="/#sobre">Sobre</a></li>
              <li><a href="/#cronograma">Cronograma</a></li>
              <li><a href="/#regras">Regras</a></li>
              <li><a href="/inscricao">Inscrição</a></li>
              <li><a href="/#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      {/* 5. A camada de overlay que escurece o fundo também é controlada pelo estado. */}
      <div
        className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
}

export default Header;