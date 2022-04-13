import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Requestline } from 'src/app/requestline/requestline.class';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})

export class RequestReviewItemComponent implements OnInit {

  request!: Request;
  showVerifyButton: boolean = false;

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private reqlsvc: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  refresh(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
      },
      error: (err) => console.error(err)
    });
  }

  review(): void {
    this.reqsvc.review(this.request).subscribe({
      next: (res) => {
        console.debug("Request reviewed");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  edit(rel: Requestline): void {
    this.router.navigateByUrl(`/requestlines/edit/${rel.id}`)
  }

  delete(rel: Requestline) {
    this.reqlsvc.remove(rel.id).subscribe({
      next: (res) => {
        console.debug("Requestline was removed");
        this.refresh();
      },
      error: (err) => console.error(err)
    })
  }

  approve(): void {
    this.reqsvc.approve(this.request).subscribe({
      next: (res) => {
        console.debug("Request approved");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  reject(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }

  verifyReject(): void {
    this.showVerifyButton = false;
    this.reqsvc.reject(this.request).subscribe({
      next: (res) => {
        console.debug("Request is rejected");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

}
