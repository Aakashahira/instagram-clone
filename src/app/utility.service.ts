import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http : HttpClient) { }

  getPosts(page?,limit?)
   {
    return this.http.get('https://randomuser.me/api/?page=1&results=10&seed=abc');
   }
}
