import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent implements OnInit {
nombreGasto: string;
cantidad: number;
formularioIncorrecto: boolean;
textIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = '';
   }

  ngOnInit(): void {
  }
agregarGasto(){
  if(this.cantidad > this._presupuestoService.restante){
    this.formularioIncorrecto= true;
    this.textIncorrecto= 'cantidad mayor de presupuesto';
    return;
  }

  if(this.nombreGasto === '' || this.cantidad <=0){
    this.formularioIncorrecto = true;
    this.textIncorrecto='nombre o gasto incorrecto'
  }else{
    //creamos los objetos
    const GASTO ={
      nombre: this.nombreGasto,
      cantidad: this.cantidad
    }


    //enviamos el objeto a los subcriptores
    this._presupuestoService.agregarGasto(GASTO);

   //reseteo formulario
    this.formularioIncorrecto= false;
    this.nombreGasto='';
    this.cantidad=0;
  }
}
}
