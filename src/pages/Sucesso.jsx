import React from 'react';
import Botao from '../components/Botao';

function Sucesso() {
  return (
    <main className="container corpo">
      <section className="info-section success-message">
        <h2>Inscrição Enviada com Sucesso!</h2>
        <p>Obrigado por se inscrever no CanSat Ibmec. Em breve entraremos em contato com mais informações.</p>
        <Botao to="/">Voltar para a Página Inicial</Botao>
      </section>
    </main>
  );
}

export default Sucesso;