import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'movimiento', loadChildren: () => import('./movimiento/movimiento.module').then(m => m.MovimientoPageModule) },
  { path: 'historial', loadChildren: () => import('./historial/historial.module').then(m => m.HistorialPageModule) },
  { path: 'meta', loadChildren: () => import('./meta/meta.module').then(m => m.MetaPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
