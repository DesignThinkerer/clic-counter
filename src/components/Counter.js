import React from 'react';

function Counter({ onIncrement, onDecrement, counter }) {
  return (
    <div>
      <button onClick={onIncrement} aria-label="Incrémenter le compteur">Incrémenter</button>
      <button onClick={onDecrement} disabled={counter === 0} aria-label="Décrémenter le compteur" aria-disabled={counter === 0}>Décrémenter</button>
      <p aria-live="polite">Vous avez cliqué {counter} fois</p>
    </div>
  );
}

export default Counter;