import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// SERVICIOS
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( 
    public arrCart: CartService) { }

  ngOnInit(): void {
  }
  
  // FUNCIONES PARA ABRIR EL SID MENU
  @Output() opened = new EventEmitter<boolean>();
  abrirSide() {
    this.opened.emit(true);
  }

  // SE OBTIENEN LOS PRODUCTOS EN EL CARRITO
  productosEnElCarrito:number = 0;
  dataCart$ = this.arrCart.dataCart$;

}
