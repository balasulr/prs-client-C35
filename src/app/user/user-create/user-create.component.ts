import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {
  // Property
  user: User = new User(); // New User instance

  constructor(
    private usesvc: UserService, // Injecting service as a parameter
    private router: Router
  ) { }

  save(): void {
    this.usesvc.create(this.user).subscribe ({
      next: (res) => {
        console.debug("User added");
        this.router.navigateByUrl("/user/list")
      },
      error: (err) => {
        console.debug(err);
      }
    });
  }

  ngOnInit(): void {
  }

}
