import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public getUsers(){
    return this.http.get('https://reqres.in/api/users')
  }
}
