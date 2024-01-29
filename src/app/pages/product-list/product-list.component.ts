import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { HeaderComponent } from '../header/header.component';
import { Product } from '../../models/product-model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ CommonModule, ProductDetailComponent, HeaderComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = signal<Product[]>([]);
  shoppingCart = signal<Product[]>([]);

  constructor(){
    this.products.set([
        {price:"123",title:"Producto 1", img:"https://picsum.photos/200/100?r=2"},
        {price:"124",title:"Producto 2", img:"https://picsum.photos/200/100?r=3"},
        {price:"125",title:"Producto 3", img:"https://picsum.photos/200/100?r=4"},
        {price:"126",title:"Producto 4", img:"https://picsum.photos/200/100?r=5"},
        {price:"127",title:"Producto 5", img:"https://picsum.photos/200/100?r=6"}
    ]);
  }

  /*
  addToShoppingCartHandler(product: Product){

    console.log(this.shoppingCart().concat(product));

    this.shoppingCart.set(this.shoppingCart().concat(product));
    console.log("Numero de productos " + this.shoppingCart().length);
  }
  */

}
