import React from 'react';
import Counter from '../../components/Counter';

function Home(props) {
  return (
    <div>
      <h1>Page d'accueil</h1>
      <Counter {...props} />
    </div>
  );
}

export default Home;
