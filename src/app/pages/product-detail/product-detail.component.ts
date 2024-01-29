import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product-model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  //@Input({required:true}) img: string = 'https://picsum.photos/200/300?r=1';
  //@Input({required:true}) title: string = '';
  //@Input({required:true}) price: number = 0;
  //@Input({required:true}) price: string = '0';
  @Input({required:true}) product!: Product;
  @Output() addToCart = new EventEmitter();

  addToCartHandler(){

    console.log('Adding to cart ' + this.product.title);
    this.addToCart.emit(this.product); //llama al evento padre

  }

}
