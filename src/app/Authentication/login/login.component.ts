import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  login = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    password : new FormControl(null,Validators.required,)
  })
  onSubmit()
   {
     this.authService.loginUser(this.login.value)
   }
   get f()
    {
      return this.login?.controls;
    }
}
