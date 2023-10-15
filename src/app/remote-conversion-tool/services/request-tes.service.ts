import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequestTesService {

  constructor(private http: HttpClient) { }



  testRequest()
  {
    return this.http.get('https://api.chucknorris.io/jokes/random')
  }
}
