import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser;
  constructor(private authService : AuthService,
              private router : Router) { 
    this.currentUser = this.authService.currentUserValue;
    console.log("current user",this.currentUser);
  }

  ngOnInit(): void {
  }
  

}
