import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.page.html',
  styleUrls: ['./movimiento.page.scss'],
  standalone: false,
})
export class MovimientoPage implements OnInit {
  movimientoForm: FormGroup;
  movimientos: any[] = [];

  constructor(private fb: FormBuilder, private storage: Storage) {
    this.movimientoForm = this.fb.group({
      tipo: ['Ingreso', Validators.required],
      monto: ['', Validators.required],
      fecha: [new Date().toISOString(), Validators.required],
      ubicacion: ['']
    });
  }

async ngOnInit() {
  try {
    console.log('Inicializando almacenamiento...');
    await this.storage.create();
    const data = await this.storage.get('movimientos');
    this.movimientos = Array.isArray(data) ? data : [];
    console.log('Movimientos cargados:', this.movimientos);
  } catch (err) {
    console.error('Error al inicializar almacenamiento:', err);
    this.movimientos = [];
  }
}


  async guardarMovimiento() {
    if (this.movimientoForm.valid) {
      const nuevo = this.movimientoForm.value;
      this.movimientos.push(nuevo);
      await this.storage.set('movimientos', this.movimientos);
      this.movimientoForm.reset({
        tipo: 'Ingreso',
        fecha: new Date().toISOString(),
        monto: '',
        ubicacion: ''
      });
    }
  }

  async eliminarMovimiento(index: number) {
    this.movimientos.splice(index, 1);
    await this.storage.set('movimientos', this.movimientos);
  }

  async obtenerUbicacion() {
    try {
      const position = await Geolocation.getCurrentPosition();
      const coords = `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`;
      this.movimientoForm.patchValue({ ubicacion: coords });
      alert('Ubicación guardada correctamente');
    } catch (err) {
      console.error('Error al obtener ubicación:', err);
      alert('No se pudo obtener la ubicación');
    }
  }
}
