import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-contador-cantidad',
  templateUrl: './contador-cantidad.component.html',
  styleUrls: ['./contador-cantidad.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ContadorCantidadComponent  implements OnInit {

  ngOnInit() {
    this.cantidad = this.cantidadInicial;
  }

  @Output() cantidadCambiada = new EventEmitter<number>();
  @Input() cantidadInicial:number = 1;

  cantidad=1;

  sumar(){
    this.cantidad = this.cantidad+1;
    this.cantidadCambiada.emit(this.cantidad);
  }

  restar(){
    if(this.cantidad > 1){
      this.cantidad = this.cantidad-1;
      this.cantidadCambiada.emit(this.cantidad);
    }
  }

}
