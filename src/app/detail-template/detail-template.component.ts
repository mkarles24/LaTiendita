import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// SERVICIOS
import { ProductosService } from "../services/productos.service";
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-detail-template',
  templateUrl: './detail-template.component.html',
  styleUrls: ['./detail-template.component.css']
})
export class DetailTemplateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    public arrProductos: ProductosService,
    public arrCart: CartService) { }

    // PARAMETRO DE RUTA
    productoId:any;
    
    ngOnInit(): void {
      this.getParametroRuta();
    }

    // SE OBTIENE PATAMETRO DE LA RUTA
    getParametroRuta(){
      const id = this.route.snapshot.paramMap.get('id');
      this.productoId = id;
    }
  
    // SE OBTIENEN LOS DATOS DESDE UN SERVICIO
    productos = this.arrProductos.arregloProductos;
  
    // SE AGREGAN PRODUCTOS AL CARRITO
    addProductToCart(product: any){
      this.arrCart.addProduct(product);
    }
  
    // SE VERIFICA ESTADO DEL PRODUCTO (SI ESTÁ AGREGADO)
    productInCart(product: any){
      return this.arrCart.searchMatch(product)
    }

}
