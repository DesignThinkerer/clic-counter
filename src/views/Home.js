import React from 'react';

function Home({
  onIncrement,
  onDecrement, // Assurez-vous que cela est défini
  counter,
}) {
  return (
    <div>
      <button onClick={onIncrement}>Incrémenter</button>
      <button onClick={onDecrement} disabled={counter === 0}>Décrémenter</button>
      <p>Vous avez cliqué {counter} fois</p>
    </div>
  );
};

export default Home;
