import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { NameValidator } from 'src/app/Validators/validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 isMatch = true;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
   register = new FormGroup({
     username : new FormControl(null,
              [Validators.required,
               Validators.pattern("^[a-zA-Z -']+"),
               NameValidator.whiteSpace]),
     email : new FormControl(null,
           [Validators.required,
            Validators.email]),
     password : new FormControl(null,
             [Validators.required,
              Validators.minLength(8),
              NameValidator.whiteSpace]),
     confirmPassword : new FormControl(null,
             [Validators.required,
             Validators.minLength(8),
             NameValidator.whiteSpace]),
   })
   get f()
   {
     return this.register?.controls;
   }
   onSubmit()
    {
      if(this.register.value.password == this.register.value.confirmPassword)
       {
        this.authService.createAccount(this.register.value)
       }
       else {
         this.isMatch = false;
       }
      console.log(this.register.value);
    }
}
