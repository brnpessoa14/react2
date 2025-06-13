import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importe o Link

// 2. Altere a propriedade 'href' para 'to' para corresponder ao que você está usando
function Botao({ to, children, className = '' }) {
  const finalClassName = `btn ${className}`.trim();

  // 3. Substitua a tag <a> pela tag <Link>
  return (
    <Link to={to} className={finalClassName}>
      {children}
    </Link>
  );
}

export default Botao;