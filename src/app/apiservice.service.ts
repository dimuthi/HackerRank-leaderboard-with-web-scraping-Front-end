import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 private url ="http://localhost:3000/";
  constructor(private _http:HttpClient) {

   }

   public getAll():Observable<any>{
     return this._http.get<any>(this.url).pipe(tap(data => {
       console.log("API Service: ", data);
     }));
   }
}
