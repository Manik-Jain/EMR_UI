import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Admin} from '../model/Admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admins : Admin[]

  constructor(private httpClient : HttpClient) { 
  }

  fetchAllAdmins() : Observable<Admin[]>{
    return this.httpClient.get<Admin[]>('http://localhost:5000/admin');
  }

}
