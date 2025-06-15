import { Component } from '@angular/core';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.page.html',
  styleUrls: ['./movimiento.page.scss'],
  standalone: false,
})
export class MovimientoPage {
  categorias = ['Comida', 'Transporte', 'Educación'];
  fecha = new Date().toISOString();
  ahorroActivo = false;
  movimientos = [
    { tipo: 'Ingreso', monto: 50000, fecha: '2025-06-01' },
    { tipo: 'Gasto', monto: -15000, fecha: '2025-06-05' }
  ];
}
