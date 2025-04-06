import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FichaPersonal from './FichaPersonal';

// Objeto de prueba para simular una persona
const dummyPersona = {
  picture: { large: 'dummy-url.jpg' },
  name: { first: 'John', last: 'Doe' },
  email: 'john.doe@example.com',
  location: { country: 'USA' },
  phone: '123-456-7890'
};

describe('FichaPersonal', () => {
  it('debe mostrar mensaje cuando no hay datos de persona', () => {
    render(<FichaPersonal persona={null} volver={jest.fn()} />);
    const mensaje = screen.getByText(/No hay datos para mostrar/i);
    expect(mensaje).toBeInTheDocument();
  });

  it('debe renderizar correctamente los datos de la persona', () => {
    render(<FichaPersonal persona={dummyPersona} volver={jest.fn()} />);
    
    // Verifica que aparezca el título
    expect(screen.getByText(/Ficha Personal/i)).toBeInTheDocument();

    // Verifica que se muestre la imagen con el src correcto
    const imagen = screen.getByAltText(/Foto de perfil/i);
    expect(imagen).toBeInTheDocument();
    expect(imagen).toHaveAttribute('src', dummyPersona.picture.large);

    // Verifica los datos personales
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/USA/i)).toBeInTheDocument();
    expect(screen.getByText(/123-456-7890/i)).toBeInTheDocument();
  });

  it('debe ejecutar la función "volver" al hacer clic en el botón Volver', () => {
    const volverMock = jest.fn();
    render(<FichaPersonal persona={dummyPersona} volver={volverMock} />);
    
    const btnVolver = screen.getByRole('button', { name: /Volver/i });
    fireEvent.click(btnVolver);
    
    expect(volverMock).toHaveBeenCalledTimes(1);
  });
});
