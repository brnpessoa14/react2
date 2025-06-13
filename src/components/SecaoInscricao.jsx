import React from 'react';
import Botao from './Botao';

function SecaoInscricao() {
  return (
    <section id="inscricao" className="info-section bg-light">
      <h2>Inscrição</h2>
      <p>Formulário de inscrição disponível no link abaixo. Cada equipe deve conter de 3 a 6 membros.</p>
      <Botao to="/inscricao" className="btn-secondary">Preencher Inscrição</Botao>
    </section>
  );
}

export default SecaoInscricao;