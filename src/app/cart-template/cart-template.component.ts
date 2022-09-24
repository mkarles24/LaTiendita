import { Component, OnInit } from '@angular/core';

// SERVICIOS
import { ProductosService } from "../services/productos.service";
import { CartService } from "../services/cart.service";


@Component({
  selector: 'app-cart-template',
  templateUrl: './cart-template.component.html',
  styleUrls: ['./cart-template.component.css']
})
export class CartTemplateComponent implements OnInit {

  constructor( public arrCart: CartService ) { }

  ngOnInit(): void {
  }

  // SE OBTIENEN LOS DATOS DE LOS PRODUCTOS EN EL CARRITO
  dataCart$ = this.arrCart.dataCart$

  // CONFIGURACIÓN DE LAS COLUMNAS DE LA MAT TABLE
  displayedColumns: string[] = ['urlImagenCard','nombreProducto','precio','cantidad','acciones'];

}
