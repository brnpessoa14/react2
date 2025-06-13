import React from 'react';
import SecaoHero from '../components/SecaoHero';
import SecaoSobre from '../components/SecaoSobre';
import SecaoCronograma from '../components/SecaoCronograma';
import SecaoRegras from '../components/SecaoRegras';
import SecaoInscricao from '../components/SecaoInscricao';
import SecaoContato from '../components/SecaoContato';

function Home() {
  return (
    <main className="container corpo">
      <SecaoHero />
      <SecaoSobre />
      <SecaoCronograma />
      <SecaoRegras />
      <SecaoInscricao />
      <SecaoContato />
    </main>
  );
}

export default Home;