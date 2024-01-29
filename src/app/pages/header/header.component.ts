import { Component, Input, SimpleChange, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product-model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({required:true}) products : Product[] = [];
  hideCartMenu = signal(true);
  total = signal(0);

  ngOnChanges(change: SimpleChange){
      this.total.set(this.getTotal());
  }

  toogleCartMenu(){
    this.hideCartMenu.update(previousValue => !previousValue);
  }

  private getTotal(){

    console.log("Calculando total");
    return this.products.reduce((total, product) => total + Number.parseInt(product.price), 0);

  }

}
