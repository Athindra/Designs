import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// let headers = new HttpHeaders();
// headers = headers.set('Content-Type', 'application/json; charset=utf-8');


@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  _options:any;
  baseUrl: string = 'http://localhost:54056/api/';
  constructor(private httpClient: HttpClient) {

  }
  get(strUrl: string, includeToken: boolean) {
    if (includeToken) {
      var headers=this.getHeader();
      var token=localStorage.getItem('user');
      headers= headers.append('Authorization',  token);
      return this.httpClient.get(this.baseUrl + strUrl, { headers: headers })
    }
    else
    {
      return this.httpClient.get(this.baseUrl + strUrl, { headers: this.getHeader() })
    }
  }
  post(strUrl: string, data: any, includeToken: boolean) {    
    if(includeToken){
      var headers=this.getHeader();
      var token=localStorage.getItem('user');
      headers= headers.append('Authorization',  token);
      return this.httpClient.post(this.baseUrl + strUrl,data,{ headers: headers});
    }
    else{
      return this.httpClient.post(this.baseUrl + strUrl,data,{ headers: this.getHeader() });
    }
    
  }
  getHeader(): HttpHeaders {
    let httpHeader= new HttpHeaders();
    httpHeader.append('Content-Type', 'application/json');
    httpHeader.append('Access-Control-Allow-Origin', '*');
    httpHeader.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
    httpHeader.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
    return httpHeader;

}


}
