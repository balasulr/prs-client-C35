import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  usr: string = "";
  pwd: string = "";
  messg: string = "";

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) { }

  login(): void {
    this.sys.user = null;
    this.usrsvc.login(this.usr, this.pwd).subscribe({
      next: (res) => {
        console.debug("Login successful!");
        this.sys.user = res; // Res contains the user instance of systemservice
        this.router.navigateByUrl("/request/list")
      },
      error: (err) => {
        if(err.status === 404) {
          this.messg = "|     Username/Password is not found. Please try again";
        } else {
          console.error(err);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
