import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // SE INSTANCIA EL OBSERVABLE
  private arrCartProducts: Array<any> = [];
  private dataCart = new BehaviorSubject<any>([]);
  public dataCart$ = this.dataCart.asObservable();

  constructor() { }

  // SE AGREGAN UN PRODUCTO AL CARRITO
  addProduct(product : any){
    if (!this.searchMatch(product)){
      this.arrCartProducts.push(product);
      this.dataCart.next(this.arrCartProducts);
    }
  }

  // SE VERIFICA QUE EL PRODUCTO NO ESTÉ EN EL CARRITO
  searchMatch(product : any){
    for(let i = 0; i < this.arrCartProducts.length; i++){
      if (this.arrCartProducts[i].idProducto == product.idProducto) {
        return true
      }
    }
    return false
  }

}
