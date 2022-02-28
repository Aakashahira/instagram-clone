import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL} from 'src/app/Constant/constant'
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http : HttpClient) { }

  getPosts(limit,page)
   {
    return this.http.get(SERVER_URL + `/api/?page=${page}&results=${limit}&seed=abc`);
   }
}
