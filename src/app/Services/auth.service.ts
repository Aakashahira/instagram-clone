import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { SERVER_URL} from 'src/app/Constant/constant'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private http :HttpClient,
    private toastr: ToastrService,
    private router : Router) { 
    let user = localStorage.getItem('cu');
    if (user) {
      this.currentUserSubject = new BehaviorSubject<any>(
        JSON.parse(user));
      this.currentUser = this.currentUserSubject.asObservable();
    } else {
      this.currentUserSubject = new BehaviorSubject<any>(null);
    }
  }

  loginUser(data)
   {
    this.http.get(SERVER_URL + '/api/?results=1').subscribe((x :any) => {
      console.log("ss",x.results[0].name);
     let user = {"name" : x.results[0]?.name?.first + ' ' +  x.results[0]?.name?.last,
                 "dob" : x.results[0]?.dob?.date,
                 "city" :  x.results[0]?.location?.city,
                 "picture" : x.results[0]?.picture}
                 console.log("user",user);
              localStorage.setItem('cu',JSON.stringify(user));   
              this.currentUserSubject.next(user);
              this.showSuccess('Login','Login Successfully');
              this.router.navigateByUrl('/feed');
    },(error) => {
      this.showError('Login',error.message);
    })
   }
   createAccount(data)
    {
     this.showSuccess("Register","Account created successfully");
     this.router.navigateByUrl('/auth/login'); 
    }
   public get currentUserValue() {
    if (this.currentUserSubject) return this.currentUserSubject?.value;
  }
  showSuccess(header,msg) {
    this.toastr.success(header,msg);
  }
  showError(header,msg)
   {
     this.toastr.error(header,msg)
   }
}