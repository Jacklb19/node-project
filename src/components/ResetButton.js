import React from 'react';

export default function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} className="btn">
      Resetear Resultados
    </button>
  );
}
