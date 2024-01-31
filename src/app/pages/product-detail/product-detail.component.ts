import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@models/product-model';
import { ShoppingCartServiceService } from '@services/shopping-cart-service.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  //@Input({required:true}) img: string = 'https://picsum.photos/200/300?r=1';
  //@Input({required:true}) title: string = '';
  //@Input({required:true}) price: number = 0;
  //@Input({required:true}) price: string = '0';
  @Input({required:true}) product!: Product;
  //@Output() addToCart = new EventEmitter();
  private shoppingCartService = inject(ShoppingCartServiceService);

  addToCartHandler(){

    console.log('Adding to cart ' + this.product.title);
    //this.addToCart.emit(this.product); //llama al evento padre
    this.shoppingCartService.addToShoppingCart(this.product);

  }

}
