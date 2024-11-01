import React from 'react';

function Counter({
  onIncrement,
  onDecrement,
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

export default Counter;
