import React from "react";

export default function FechaHora() {
  const fechaHoraActual = new Date().toLocaleString();

  return (
    <div className="App">
      <h2>Fecha y Hora Actual</h2>
      <p>{fechaHoraActual}</p>
    </div>
  );
}
