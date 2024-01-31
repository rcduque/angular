import { Component, Input, signal, inject } from '@angular/core';
import { Product } from '@models/product-model';
import { ProductService } from '@services/product.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  @Input() id?: string;
  productService = inject(ProductService);
  readonly product = signal<Product>({id:0, images:[],price:0, title:"" });

  ngOnInit(){

    console.log("OnInit " + this.id)
    if(this.id){
      this.productService.getProduct(this.id)
      .subscribe({
        next: (product) => this.product.set(product),
        error: (error) => console.log(error)
      });
    }
  }

}
