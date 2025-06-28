import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MovimientoPageRoutingModule } from './movimiento-routing.module';
import { MovimientoPage } from './movimiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,   
    IonicModule,
    MovimientoPageRoutingModule
  ],
  declarations: [MovimientoPage]
})
export class MovimientoPageModule {}
