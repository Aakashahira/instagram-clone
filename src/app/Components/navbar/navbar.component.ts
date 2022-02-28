import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 currentUser;
  constructor(private authService : AuthService,
              private router : Router) { 
    this.currentUser = this.authService.currentUserValue;
    console.log("current user",this.currentUser);
  }

  ngOnInit(): void {
  }
  logout()
   {
     localStorage.clear();
     this.authService.currentUserSubject.next(null);
     this.router.navigateByUrl('/auth');
   }
}
