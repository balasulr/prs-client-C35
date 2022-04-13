import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SystemService {

  user: any = null;

  constructor(
    private router: Router
  ) { }

  chkLogin() {
    if(this.user === null) { // Checks if user is logged in
      this.router.navigateByUrl("/login"); // comes from app-routing.module.ts path for login
    }
  }
}
