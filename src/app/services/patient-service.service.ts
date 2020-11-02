import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Audit} from '../model/Audit';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient : HttpClient) { }

  fetchPatientAuditTrail(patientId : string) : Observable<Audit[]> {
    return this.httpClient.get<Audit[]>('http://localhost:5000/audit/1');
  }
}
