import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl :string = environment.baseUrl
  headers =  new HttpHeaders()
         .set("Content-type","application/json")
 
  constructor(private http :HttpClient) {

   }

   getdata(endpoint:string){
     return this.http.get(this.baseUrl+endpoint,{'headers': this.headers});
   }
}
