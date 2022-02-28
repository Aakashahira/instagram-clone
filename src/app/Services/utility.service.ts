import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http : HttpClient) { }

  getPosts(limit,page)
   {
    return this.http.get(`https://randomuser.me/api/?page=${page}&results=${limit}&seed=abc`);
   }
}
