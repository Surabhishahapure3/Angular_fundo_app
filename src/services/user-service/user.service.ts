import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  loginSignUpApiCall(endPoint:string, payload:any): Observable<any>{
    return this.httpService.postApiCall(endPoint,payload)
 }
}
