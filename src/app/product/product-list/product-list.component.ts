import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product} from '../product.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  // Property
  products: Product[] = [];
  searchCriteria: string = ""; // searchCriteria comes from product-search.pipe.ts

  constructor(
    private prodsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        this.products = res;
        console.debug("Products", res)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
