import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.page.html',
  styleUrls: ['./movimiento.page.scss'],
  standalone: false,
})
export class MovimientoPage implements OnInit {
  categorias = ['Comida', 'Transporte', 'Educación'];
  fecha = new Date().toISOString();
  ahorroActivo = false;
  movimientos: any[] = [];

  movimientoForm: FormGroup;

  constructor(private fb: FormBuilder, private storage: Storage) {
    this.movimientoForm = this.fb.group({
      tipo: ['Ingreso', Validators.required],
      monto: ['', Validators.required],
      fecha: [this.fecha, Validators.required]
    });
  }

  async ngOnInit() {
    await this.storage.create();
    this.movimientos = (await this.storage.get('movimientos')) || [];
  }

  async guardarMovimiento() {
    if (this.movimientoForm.valid) {
      const nuevo = this.movimientoForm.value;
      this.movimientos.push(nuevo);
      await this.storage.set('movimientos', this.movimientos);
      this.movimientoForm.reset({ tipo: 'Ingreso', fecha: this.fecha });
    }
  }

  async eliminarMovimiento(index: number) {
    this.movimientos.splice(index, 1);
    await this.storage.set('movimientos', this.movimientos);
  }
}
