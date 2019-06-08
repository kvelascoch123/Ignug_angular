import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleCarreraComponent } from './pages/detalle-carrera/detalle-carrera.component';
import { PorTipoCarreraComponent } from './pages/por-tipo-carrera/por-tipo-carrera.component';

const routes: Routes = [
  {path: '', component: PorTipoCarreraComponent},
  {path: 'detalleCarrera/:name', component: DetalleCarreraComponent },
  {path: '**', pathMatch: 'full', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
