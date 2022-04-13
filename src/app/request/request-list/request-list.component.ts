import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})

export class RequestListComponent implements OnInit {
  // Property
  requests: Request[] = [];
  searchCriteria: string = ""; // searchCriteria comes from request-search.pipe.ts

  constructor(
    private reqsvc: RequestService
  ) { }

  ngOnInit(): void {
    this.reqsvc.list().subscribe({
      next: (res) => {
        this.requests = res;
        console.debug("Requests", res)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
