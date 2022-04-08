import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  // Property
  vendor: Vendor = new Vendor(); // New Vendor instance

  constructor(
    private vendsvc: VendorService,
    private router: Router
  ) { }

  save(): void {
    this.vendsvc.create(this.vendor).subscribe ({
      next: (res) => {
        console.debug("Vendor added");
        this.router.navigateByUrl("/vendor/list")
      },
      error: (err) => {
        console.debug(err);
      }
    });
  }

  ngOnInit(): void {
  }

}
