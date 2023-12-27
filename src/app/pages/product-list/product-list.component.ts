import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  addToCartHandler(event: string){
    console.log('Me quieres decir algo? ');
    console.log(event);
  }

}
