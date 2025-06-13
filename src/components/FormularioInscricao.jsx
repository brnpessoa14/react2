import React from 'react';

function FormularioInscricao() {
  // Em um projeto real, você usaria o estado do React para controlar os inputs
  // e uma função para lidar com o envio do formulário.
  const handleSubmit = (event) => {
    event.preventDefault();
    // Redireciona para a página de sucesso
    window.location.href = '/sucesso';
  };

  return (
    <section className="info-section">
      <h2>Formulário de Inscrição</h2>
      <form onSubmit={handleSubmit} className="inscricao-form">
        <div className="form-group">
          <label htmlFor="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required />
        </div>
        <div className="form-group">
          <label htmlFor="grupo">Nome do Grupo:</label>
          <input type="text" id="grupo" name="grupo" required />
        </div>
        <button type="submit" className="btn">Enviar Inscrição</button>
      </form>
    </section>
  );
}

export default FormularioInscricao;