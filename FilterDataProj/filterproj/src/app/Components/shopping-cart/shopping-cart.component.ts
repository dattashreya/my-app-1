import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  constructor() { }

  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();
  calcTotal() {
    return this.products.reduce((acc, prod) => acc+= prod.num ,0)
  }
  removeProduct(product) {
    this.productRemoved.emit(product)
  }

}
