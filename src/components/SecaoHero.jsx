import React from 'react';
import Botao from './Botao';

function SecaoHero() {
  return (
    <section id="home" className="hero">
      <h1>Engenharia espacial ao alcance dos estudantes</h1>
      <p>Desenvolva, construa e lance seu próprio satélite em miniatura!</p>
      
      {/* CORREÇÃO: Troque 'href' por 'to' */}
      <Botao to="/inscricao">Inscreva sua equipe</Botao>
    </section>
  );
}

export default SecaoHero;