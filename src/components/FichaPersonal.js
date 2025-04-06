import React from "react";

export default function FichaPersonal({ persona, volver }) {
  if (!persona) return <h2>No hay datos para mostrar</h2>;

  return (
    <div className="App">
      <h1>Ficha Personal</h1>
      <img
        src={persona.picture.large}
        alt="Foto de perfil"
        className="profile-picture"
      />
      <p><strong>Nombre:</strong> {persona.name.first} {persona.name.last}</p>
      <p><strong>Correo:</strong> {persona.email}</p>
      <p><strong>País:</strong> {persona.location.country}</p>
      <p><strong>Teléfono:</strong> {persona.phone}</p>
      <button className="btn" onClick={volver}>Volver</button>
    </div>
  );
}
