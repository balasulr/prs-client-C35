import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})

export class RequestlineCreateComponent implements OnInit {
  // Property
  requestline: Requestline = new Requestline(); // New Requestline instance
  products!: Product[]; // Collection of Products

  constructor(
    private reqlsvc: RequestlineService,
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.reqlsvc.create(this.requestline).subscribe ({
      next: (res) => {
        console.debug("Requestline added");
        this.router.navigateByUrl(`/requests/lines/${this.requestline.requestId}`);
      },
      error: (err) => { console.debug(err); }
    });
  }

  ngOnInit(): void {
    this.requestline.requestId = +this.route.snapshot.params["reqid"];
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => console.error(err)
    });
  }

}
