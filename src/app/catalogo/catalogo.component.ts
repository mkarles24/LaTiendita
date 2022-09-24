import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

// SERVICIOS
import { ProductosService } from "../services/productos.service";
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})



export class CatalogoComponent implements OnInit {

  constructor( 
    public arrProductos: ProductosService,
    public arrCart: CartService) { }

  ngOnInit(): void {
  }

  
  // FUNCIONES PARA REALIZAR EL SCROLL DE LAS CARDS
  @ViewChild('contenedorCards') contenedorCards!: ElementRef;

  scrollToLeft(): void{
    let asCards = this.contenedorCards.nativeElement;
    asCards.scroll(asCards.scrollLeft - 240,0);
  }

  scrollToRight(): void{
    let asCards = this.contenedorCards.nativeElement;
    asCards.scroll(asCards.scrollLeft + 240,0);
  }


  // SE OBTIENEN LOS DATOS DESDE UN SERVICIO
  productos = this.arrProductos.arregloProductos;

  // SE AGREGAN PRODUCTOS AL CARRITO
  addProductToCart(product: any){
    this.arrCart.addProduct(product);
  }

  // SE VERIFICA ESTADO DEL PRODUCTO
  productInCart(product: any){
    return this.arrCart.searchMatch(product)
  }

}