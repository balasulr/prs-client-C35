import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  // Property
  product: Product = new Product(); // New Product instance
  vendors!: Vendor[]; // Collection of Vendors

  constructor(
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private router: Router
  ) { }

  save(): void {
    this.product.vendorId = +this.product.vendorId;
    this.prodsvc.create(this.product).subscribe ({
      next: (res) => {
        console.debug("Product added");
        this.router.navigateByUrl("/product/list")
      },
      error: (err) => {
        console.debug(err);
      }
    });
  }

  ngOnInit(): void {
    this.vendsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendors = res;
      }
    });
  }

}
