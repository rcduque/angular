import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductDetailComponent } from '@components/product-detail/product-detail.component';
import { HeaderComponent } from '@components/header/header.component';
import { Product } from '@models/product-model';
import { ProductService } from '@services/product.service';

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
  private productService = inject(ProductService);

  ngOnInit(){

    this.productService.getProducts()
    .subscribe({
      next: (products) =>{
        this.products.set(products)
      },
      error: (error)=> console.log(error)
    });

  }

  /*
  addToShoppingCartHandler(product: Product){

    console.log(this.shoppingCart().concat(product));

    this.shoppingCart.set(this.shoppingCart().concat(product));
    console.log("Numero de productos " + this.shoppingCart().length);
  }
  */

}
