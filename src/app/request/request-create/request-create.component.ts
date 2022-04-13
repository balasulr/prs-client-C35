import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  // Property
  request: Request = new Request(); // New Request instance

  constructor(
    private reqsvc: RequestService,
    private usesvc: UserService,
    private router: Router,
    private sys: SystemService
  ) { }

  save(): void {
    this.request.userId = +this.request.userId;
    this.reqsvc.create(this.request).subscribe ({
      next: (res) => {
        console.debug("Request added");
        this.router.navigateByUrl("/request/list")
      },
      error: (err) => {
        console.debug(err);
      }
    });
  }

  ngOnInit(): void {
    this.request.userId = this.sys.user.id; // id of user logged in and put into request.userId
  }

}
