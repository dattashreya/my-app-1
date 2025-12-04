import { Component } from '@angular/core';
import { Item } from './Interface/item';
import { DataService } from './Service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filterproj';
  titleFlagOff: boolean = false;
  items: Item[] = [];
  constructor(private dService: DataService) { }
  filteredItems: Item[] = [...this.items]; // Initialize with all items
  filterText: string = ''; // Input for filtering
  ngOnInit(): void {
    this.dService.getPosts().subscribe(
      (data) => {
        this.items = data;
        // console.log('Data from api....',this.items);
      });
  }

  onFilterChange(): void {
    const searchText = this.filterText.toLowerCase();
    this.filteredItems = this.items;
    // console.log('Filter to do.......',this.filteredItems);
    
    this.filteredItems =  this.filteredItems.filter(item =>
      item.name.toLowerCase().includes(searchText) ||
      item.id.toString().includes(searchText)
      // item.username.toLowerCase().includes(searchText)
    );
  }

  //  To do: new project to create

  // productList = [
  //  {name: 'Z900', price: 8799},
  //  {name: 'shubert helmet', price: 999},
  //  {name: 'sport gloves', price: 99}
  // ];

  // productList: Product[] = [];
 cartProductList = [];



 addProductToCart(product: any)
  {
    const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({...product, num:1}); // enhance "porduct" opject with "num" property
      return;
    }
    productExistInCart.num += 1;
 }
  removeProduct(product: any) {
   this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
  }

}
