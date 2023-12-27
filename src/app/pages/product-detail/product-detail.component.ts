import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input({required:true}) img: string = 'https://picsum.photos/200/300?r=1';
  @Input({required:true}) title: string = '';
  @Input({required:true}) price: number = 0;

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){

    console.log('Adding to cart ' + this.title);
    this.addToCart.emit('Hola soy tu hijo ' + this.title);

  }

}
