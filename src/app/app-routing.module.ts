import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GastosComponent } from './component/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './component/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  { path: '', redirectTo: '/IngresarPresupuesto', pathMatch: 'full'},
  { path: "IngresarPresupuesto", component:IngresarPresupuestoComponent},
  { path: "Gastos", component: GastosComponent},
  { path: '**', redirectTo: '/IngresarPresupuesto', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
