import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResetButton from './ResetButton';

describe('ResetButton Component', () => {
  it('debe renderizar el botón con el texto "Resetear Resultados"', () => {
    render(<ResetButton onReset={() => {}} />);
    const buttonElement = screen.getByText(/Resetear Resultados/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('debe ejecutar la función onReset cuando se hace clic en el botón', () => {
    const onResetMock = jest.fn();
    render(<ResetButton onReset={onResetMock} />);
    const buttonElement = screen.getByText(/Resetear Resultados/i);
    fireEvent.click(buttonElement);
    expect(onResetMock).toHaveBeenCalledTimes(1);
  });
});
