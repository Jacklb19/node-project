import React from 'react';
import { render, screen } from '@testing-library/react';
import FechaHora from './FechaHora';

describe('FechaHora Component - Prueba adicional con fecha mockeada', () => {
  it('debe mostrar la fecha y hora fija cuando se simula una fecha determinada', () => {
    const fechaFija = new Date('2025-04-05T12:00:00Z');
    const RealDate = Date;

    global.Date = class extends RealDate {
      constructor(...args) {
        if (args.length) {
          return new RealDate(...args);
        }
        return fechaFija;
      }
      static now() {
        return fechaFija.getTime();
      }
    };

    render(<FechaHora />);
    const fechaHoraElement = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'p' && content.includes('2025');
    });

    expect(fechaHoraElement).toBeInTheDocument();

    global.Date = RealDate;
  });
});
