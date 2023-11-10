import { Component } from '@angular/core';
import { CarritoService } from '../core/services/carrito.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public carritoService: CarritoService) {}
  
    cambiarCantidad(cantidad:number, idProducto:number){
      console.log(cantidad,idProducto)
      this.carritoService.modificarCantidadProducto(idProducto,cantidad);
    }

}

