import { Component, Input, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product-model';
import { ShoppingCartServiceService } from '../../services/shopping-cart-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //@Input({required:true}) products : Product[] = [];
  private shoppingCartService = inject(ShoppingCartServiceService);
  products = this.shoppingCartService.shoppingCart;
  hideCartMenu = signal(true);
  total = this.shoppingCartService.total;

  ngOnChanges(change: SimpleChange){
      this.total.set(this.getTotal());
  }

  toogleCartMenu(){
    this.hideCartMenu.update(previousValue => !previousValue);
  }

  private getTotal(){

    console.log("Calculando total");
    return this.products().reduce((total, product) => total + Number.parseInt(product.price), 0);

  }

}
