import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from './constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }

  changePwd(body:any):Observable<any>{
     return this.http.post(APP_CONSTANTS.BACKEND_URL +'changePwd',body,{withCredentials:true});

  }

  sendMail(email:string):Observable<any>{
    return this.http.post(`http://localhost:8081/api/sendMail`,email);
  }

  validateFpToken(token:any):Observable<any>{
    return this.http.post(`http://localhost:8081/api/validateFpToken`,token);
  }

  resetPwd(form:any):Observable<any>{
    return this.http.post(`http://localhost:8081/api/resetPwd`,form);
  }

}
