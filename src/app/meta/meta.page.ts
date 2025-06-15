import { Component } from '@angular/core';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.page.html',
  styleUrls: ['./meta.page.scss'],
  standalone: false,
})
export class MetaPage {
  metas = [
    { nombre: 'Ahorrar para viaje', objetivo: 100000, actual: 25000 },
    { nombre: 'Fondo de emergencia', objetivo: 50000, actual: 10000 },
    { nombre: 'Nueva laptop', objetivo: 700000, actual: 350000 }
  ];
}
