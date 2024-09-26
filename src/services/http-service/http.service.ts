import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class HttpService {
  private baseUrl: string = "http://localhost:5001/api/v1/";

  constructor(private http: HttpClient) {
    
  }


  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken') || "";
    return new HttpHeaders({
      'Accept': "application/json",
      'Authorization': `Bearer ${token}`
    });
  }
  
  getApiCall(endPoint:string){
    const token = localStorage.getItem('accessToken');
    console.log('JWT from local storage:', token);
    return this.http.get(this.baseUrl+endPoint, {
      headers: this.getAuthHeaders()
    });
  }

  postApiCall(endPoint:string, payload:any, addHeader:boolean=false){
    const token = localStorage.getItem('accessToken');
    console.log('JWT from local storage:', token);
    return this.http.post(this.baseUrl+endPoint, payload, {headers:addHeader? this.getAuthHeaders(): {} });
   }
 
   deleteApiCall(endPoint:string){
     return this.http.delete(this.baseUrl + endPoint,{
       headers: this.getAuthHeaders()
     });
   }
 
   putApiCall(endPoint: string, payload: any) {
    return this.http.put(this.baseUrl + endPoint, payload, {
      headers: this.getAuthHeaders()
    });
  }
}
