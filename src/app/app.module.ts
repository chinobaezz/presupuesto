import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './component/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './component/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresarGastosComponent } from './component/gastos/ingresar-gastos/ingresar-gastos.component';
import { ListarGastosComponent } from './component/gastos/listar-gastos/listar-gastos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarPresupuestoComponent,
    IngresarGastosComponent,
    ListarGastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
