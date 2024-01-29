import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {

  shoppingCart = signal<Product[]>([]);
  total = signal(0);

  constructor() { }

  addToShoppingCart(product:Product){

    this.shoppingCart.update(previous => previous.concat(product));
    this.total.update(previous => previous + Number.parseInt(product.price));
  }
}
