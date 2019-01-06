import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  GET (URL, data?) {
    URL = `${environment.API_PATH}${URL}`;
    let request, req = [];

    if (data) {
      const keys = Object.keys(data);
      if (keys && keys.length > 0 ) {
        req = keys.map ( e => `${e}=${data[e]}`);
      }
      request = `${URL}?${req.join('&')}`;
    }
    return this.http.get(request);
  }


  POST (URL, req) {
    URL = `${environment.API_PATH}${URL}`;
    return this.http.post(URL, req);
  }


}
