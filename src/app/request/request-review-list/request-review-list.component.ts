import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})

export class RequestReviewListComponent implements OnInit {
   // Property
   requests!: Request[];
   searchCriteria: string = ""; // searchCriteria comes from request-search.pipe.ts

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.reqsvc.requests(this.sys.user.id).subscribe({ // Gets if of logged in user
      next: (res) => {
        this.requests = res;
        console.debug("Requests", res)
      },
      error: (err) => { console.error(err); }
    });
  }

}
