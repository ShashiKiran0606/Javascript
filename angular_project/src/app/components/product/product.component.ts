import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import product_data from './product_data';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  imports: [FormsModule,
    NgxPaginationModule,
    FontAwesomeModule

  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  productsArr = product_data;
  searchText: string = '';

  p:number = 1;
  faStar = faStar;
  sort: 'asc' | 'desc' = 'asc'; 


  filterProducts() {
    if (!this.searchText) {
      return this.productsArr;
    }
    return this.productsArr.filter(product =>
      product.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(this.searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onSort(sort: 'asc' | 'desc') {
    this.sort = sort;
    this.p = 1;
    
    if (this.sort === 'desc') {
     this.productsArr.sort((a, b) => b.price - a.price);
    } else if (this.sort === 'asc') {
      this.productsArr.sort((a, b) => a.price - b.price);
    } 
  }
  

}
