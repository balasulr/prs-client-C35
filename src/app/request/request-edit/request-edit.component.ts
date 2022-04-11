import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})

export class RequestEditComponent implements OnInit {
  // Property
  request!: Request;
  users!: User[]

  constructor(
    private reqsvc: RequestService,
    private usesvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.reqsvc.change(this.request).subscribe({
      next: (res) => {
        console.debug("Request updated");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.usesvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      },
      error: (err) => { console.error(err); }
    })
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
